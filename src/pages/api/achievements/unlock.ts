import { APIRoute } from "astro";
import { db, UserAchievement } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { achievement } = await request.json();

    await db.insert(UserAchievement).values({
      id: crypto.randomUUID(),
      userId: achievement.userId,
      achievementId: achievement.achievementId,
      unlockedAt: new Date(),
      progress: 100,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error unlocking achievement:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
