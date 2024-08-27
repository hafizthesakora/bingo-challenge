import { auth } from '@clerk/nextjs/server';

const adminIds = [
  'user_2jyjMCWDVBy7UK2ONwFszxP2jOZ',
  'user_2jynTol7XtjiNI6xUfKklFkKn59',
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
