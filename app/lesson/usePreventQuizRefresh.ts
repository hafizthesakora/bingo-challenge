import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const usePreventQuizRefresh = (isActive: boolean, lessonId: number) => {
  const router = useRouter();

  useEffect(() => {
    // Check if we're returning from a confirmed refresh
    const checkRefreshQuit = () => {
      const quizQuitStatus = localStorage.getItem('quizQuitStatus');
      if (quizQuitStatus === 'confirmed') {
        localStorage.removeItem('quizQuitStatus');
        router.push('/learn'); // Or wherever you want to redirect after quitting
      }
    };

    checkRefreshQuit();

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isActive) {
        // Set a flag that we're attempting to refresh
        localStorage.setItem('quizQuitStatus', 'confirmed');

        const message =
          'You will loose a heart. Are you sure you want to Refresh?';
        e.preventDefault();
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Clean up localStorage if component unmounts normally
      localStorage.removeItem('quizQuitStatus');
    };
  }, [isActive, router, lessonId]);
};

export default usePreventQuizRefresh;
