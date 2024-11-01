import { APIRoute } from "astro";
import { db, eq, UserAchievement } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return new Response(JSON.stringify({ error: "User ID is required" }), {
        status: 400,
      });
    }

    const achievements = await db
      .select()
      .from(UserAchievement)
      .where(eq(UserAchievement.userId, userId));

    return new Response(JSON.stringify(achievements || []), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching achievements:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
