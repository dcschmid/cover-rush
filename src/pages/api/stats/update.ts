import type { APIRoute } from "astro";

import { db, eq, PlayerStats } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const { userId, stats } = await request.json();


  try {
    const updatedStats = await db
      .update(PlayerStats)
      .set({
        ...stats,
        lastUpdated: new Date(),
      })
      .where(eq(PlayerStats.userId, userId));

    return new Response(JSON.stringify(updatedStats));
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Fehler beim Aktualisieren der Statistiken" }),
      {
        status: 500,
      },
    );
  }
};
