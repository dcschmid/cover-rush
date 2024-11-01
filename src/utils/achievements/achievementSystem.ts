import { ACHIEVEMENTS } from "../../data/achievements";
import type {
  Achievement,
  PlayerAchievement,
  PlayerStats,
} from "../../types/achievements";

export class AchievementSystem {
  private async getPlayerAchievements(userId: string): Promise<any[]> {
    try {
      const response = await fetch(`/api/achievements/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
        }),
      });

      if (!response.ok) {
        console.error(
          "Fehler beim Laden der Achievements:",
          await response.text(),
        );
        return [];
      }

      const data = await response.json();
      // Stelle sicher, dass wir ein Array zurückgeben
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error("Fehler beim Laden der Achievements:", error);
      return [];
    }
  }

  private async savePlayerAchievement(
    userId: string,
    achievementId: string,
  ): Promise<void> {
    try {
      const response = await fetch("/api/achievements/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          achievementId,
          unlockedAt: new Date(),
          progress: 100,
        }),
      });

      console.log("savePlayerAchievement:", response);

      if (!response.ok) {
        throw new Error("Fehler beim Speichern des Achievements");
      }
    } catch (error) {
      console.error("Fehler beim Speichern des Achievements:", error);
    }
  }

  public async checkAchievements(
    userId: string,
    stats: PlayerStats,
  ): Promise<Achievement[]> {
    try {
      const playerAchievements = await this.getPlayerAchievements(userId);
      console.log("Player Achievements:", playerAchievements); // Debug-Ausgabe

      // Stellen Sie sicher, dass playerAchievements ein Array ist
      const unlockedAchievementIds = new Set(
        Array.isArray(playerAchievements)
          ? playerAchievements.map((pa) => pa.achievementId)
          : [],
      );

      const unlockedAchievements: Achievement[] = [];

      // Prüfe jedes Achievement
      for (const achievement of ACHIEVEMENTS) {
        if (
          !unlockedAchievementIds.has(achievement.id) &&
          achievement.condition(stats)
        ) {
          await this.savePlayerAchievement(userId, achievement.id);
          unlockedAchievements.push(achievement);
        }
      }

      return unlockedAchievements;
    } catch (error) {
      console.error("Fehler beim Prüfen der Achievements:", error);
      return [];
    }
  }

  private showAchievementNotification(achievement: Achievement): void {
    // Implementierung der Benachrichtigung
    const notification = document.createElement("div");
    notification.className = "achievement-notification";
    notification.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-info">
        <h3>Achievement freigeschaltet!</h3>
        <p>${achievement.title}</p>
        <p>${achievement.description}</p>
        <p>+${achievement.points} Punkte</p>
      </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
  }
}
