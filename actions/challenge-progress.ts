'use server';

import db from '@/db/drizzle';
import { getUserProgress } from '@/db/queries';
import { challengeProgress, challenges, userProgress } from '@/db/schema';
import { auth } from '@clerk/nextjs/server';
import { and, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export const upsertChallengeProgress = async (
  challengeId: number,
  pointToAdd: number
) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error('Unauthorized');
  }

  const currentUserProgress = await getUserProgress();
  //TODO: Handle subscription query later

  if (!currentUserProgress) {
    throw new Error('User progress not found');
  }

  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });

  if (!challenge) {
    throw new Error('Challenge not found!');
  }

  const lessonId = challenge.lessonId;

  const existingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(challengeProgress.userId, userId),
      eq(challengeProgress.challengeId, challengeId)
    ),
  });
  const isPractise = !!existingChallengeProgress;

  //TODO: Not of user has a current subscription
  if (currentUserProgress.hearts === 0 && !isPractise) {
    return { error: 'hearts' };
  }

  if (isPractise) {
    await db
      .update(challengeProgress)
      .set({
        completed: true,
      })
      .where(eq(challengeProgress.id, existingChallengeProgress.id));

    await db
      .update(userProgress)
      .set({
        hearts: Math.min(currentUserProgress.hearts + 0),
        points: currentUserProgress.points + 0, //You can change to 10 or 0 depending on the logic of the game!
      })
      .where(eq(userProgress.userId, userId));

    revalidatePath('/learn');
    revalidatePath('/lesson');
    revalidatePath('/quests');
    revalidatePath('/leaderboard');
    revalidatePath(`/lesson/${lessonId}`);
    return;
  }

  await db.insert(challengeProgress).values({
    challengeId,
    userId,
    completed: true,
  });

  await db
    .update(userProgress)
    .set({
      points: currentUserProgress.points + pointToAdd,
    })
    .where(eq(userProgress.userId, userId));
  revalidatePath('/learn');
  revalidatePath('/lesson');
  revalidatePath('/quests');
  revalidatePath('/leaderboard');
  revalidatePath(`/lesson/${lessonId}`);
};
