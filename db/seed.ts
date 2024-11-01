import {
  db,
  User,
  Session,
  HighscorePerCategory,
  TotalHighscore,
  Achievement,
  UserAchievement,
  PlayerStats,
  AchievementProgress,
} from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // Seed Users
  const users = Array.from({ length: 15 }, (_, i) => ({
    id: `user_${i + 1}`,
    username: `Player${i + 1}`,
    email: `player${i + 1}@example.com`,
    provider_id: `auth_${i + 1}`,
    provider_type: i % 2 === 0 ? "google" : "github",
    avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=player${i + 1}`,
    total_user_points: Math.floor(Math.random() * 10000),
    golden_lps: {
      pop: i < 5 ? ["easy", "medium"] : ["easy"],
      rock: i < 3 ? ["easy", "medium", "hard"] : [],
      hiphop: i < 7 ? ["easy"] : [],
    },
  }));

  await db.insert(User).values(users);

  // Seed Sessions
  const sessions = Array.from({ length: 15 }, (_, i) => ({
    id: `session_${i + 1}`,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
    userId: `user_${i + 1}`,
  }));

  await db.insert(Session).values(sessions);

  // Seed HighscorePerCategory
  const categories = ["pop", "rock", "hiphop", "jazz", "classical"];
  const categoryScores = categories.flatMap((category) =>
    Array.from({ length: 15 }, (_, i) => ({
      id: `score_${category}_${i + 1}`,
      userId: `user_${i + 1}`,
      category,
      score: Math.floor(Math.random() * 1000),
    })),
  );

  await db.insert(HighscorePerCategory).values(categoryScores);

  // Seed TotalHighscore
  const totalScores = Array.from({ length: 15 }, (_, i) => ({
    id: `total_${i + 1}`,
    userId: `user_${i + 1}`,
    score: Math.floor(Math.random() * 5000),
  }));

  await db.insert(TotalHighscore).values(totalScores);

  // Seed Achievements
  const achievements = [
    {
      id: "first_win",
      title: "Erster Sieg",
      description: "Gewinne dein erstes Spiel",
      icon: "🏆",
      category: "BEGINNER",
      points: 50,
      isSecret: false,
    },
    {
      id: "perfect_game",
      title: "Perfektionist",
      description: "Beantworte alle Fragen richtig",
      icon: "⭐",
      category: "INTERMEDIATE",
      points: 100,
      isSecret: false,
    },
    {
      id: "no_joker",
      title: "Purist",
      description: "Gewinne ohne Joker",
      icon: "🎯",
      category: "EXPERT",
      points: 150,
      isSecret: false,
    },
    {
      id: "speed_demon",
      title: "Geschwindigkeitsmeister",
      description: "10 schnelle Antworten",
      icon: "⚡",
      category: "EXPERT",
      points: 200,
      isSecret: false,
    },
    {
      id: "night_owl",
      title: "Nachteule",
      description: "Spiele nachts",
      icon: "🦉",
      category: "SECRET",
      points: 100,
      isSecret: true,
    },
    {
      id: "collector",
      title: "Sammler",
      description: "Sammle 5 goldene LPs",
      icon: "💿",
      category: "INTERMEDIATE",
      points: 150,
      isSecret: false,
    },
    {
      id: "master",
      title: "Meister",
      description: "1000 Punkte erreicht",
      icon: "👑",
      category: "EXPERT",
      points: 250,
      isSecret: false,
    },
    {
      id: "social",
      title: "Sozial",
      description: "Füge 5 Freunde hinzu",
      icon: "🤝",
      category: "BEGINNER",
      points: 75,
      isSecret: false,
    },
    {
      id: "combo",
      title: "Combo-König",
      description: "5 richtige nacheinander",
      icon: "🔥",
      category: "INTERMEDIATE",
      points: 125,
      isSecret: false,
    },
    {
      id: "explorer",
      title: "Entdecker",
      description: "Spiele alle Kategorien",
      icon: "🗺️",
      category: "BEGINNER",
      points: 100,
      isSecret: false,
    },
    {
      id: "veteran",
      title: "Veteran",
      description: "100 Spiele gespielt",
      icon: "🎮",
      category: "EXPERT",
      points: 300,
      isSecret: false,
    },
    {
      id: "lucky",
      title: "Glückspilz",
      description: "Geheimer Erfolg",
      icon: "🍀",
      category: "SECRET",
      points: 150,
      isSecret: true,
    },
    {
      id: "dedicated",
      title: "Dediziert",
      description: "7 Tage in Folge gespielt",
      icon: "📅",
      category: "INTERMEDIATE",
      points: 175,
      isSecret: false,
    },
    {
      id: "pioneer",
      title: "Pionier",
      description: "Einer der ersten 100 Spieler",
      icon: "🚀",
      category: "SECRET",
      points: 500,
      isSecret: true,
    },
    {
      id: "legend",
      title: "Legende",
      description: "Alle Achievements freigeschaltet",
      icon: "🌟",
      category: "EXPERT",
      points: 1000,
      isSecret: false,
    },
  ];

  await db.insert(Achievement).values(achievements);

  // Seed UserAchievements
  const userAchievements = Array.from({ length: 15 }, (_, i) => {
    // Jeder User hat zufällig 3-8 Achievements
    const numAchievements = 3 + Math.floor(Math.random() * 6);
    const userAchievs = achievements
      .sort(() => Math.random() - 0.5)
      .slice(0, numAchievements)
      .map((achievement, index) => ({
        id: `ua_${i + 1}_${index}`,
        userId: `user_${i + 1}`,
        achievementId: achievement.id,
        unlockedAt: new Date(
          Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000,
        ), // Random date within last 30 days
        progress: 100,
      }));
    return userAchievs;
  }).flat();

  await db.insert(UserAchievement).values(userAchievements);

  // Seed PlayerStats
  const playerStats = Array.from({ length: 15 }, (_, i) => ({
    id: `stats_${i + 1}`,
    userId: `user_${i + 1}`,
    totalGames: 10 + Math.floor(Math.random() * 90),
    totalCorrectAnswers: Math.floor(Math.random() * 500),
    totalPoints: Math.floor(Math.random() * 10000),
    gamesWithoutJoker: Math.floor(Math.random() * 20),
    perfectGames: Math.floor(Math.random() * 10),
    fastAnswers: Math.floor(Math.random() * 50),
    categoryStats: {
      pop: {
        played: Math.floor(Math.random() * 30),
        wins: Math.floor(Math.random() * 15),
      },
      rock: {
        played: Math.floor(Math.random() * 30),
        wins: Math.floor(Math.random() * 15),
      },
      hiphop: {
        played: Math.floor(Math.random() * 30),
        wins: Math.floor(Math.random() * 15),
      },
      jazz: {
        played: Math.floor(Math.random() * 30),
        wins: Math.floor(Math.random() * 15),
      },
      classical: {
        played: Math.floor(Math.random() * 30),
        wins: Math.floor(Math.random() * 15),
      },
    },
    lastUpdated: new Date(),
  }));

  await db.insert(PlayerStats).values(playerStats);

  // Seed AchievementProgress
  const achievementProgress = Array.from({ length: 15 }, (_, i) => {
    // Jeder User hat 2-4 laufende Achievement-Fortschritte
    const numProgress = 2 + Math.floor(Math.random() * 3);
    const progress = achievements
      .sort(() => Math.random() - 0.5)
      .slice(0, numProgress)
      .map((achievement, index) => ({
        id: `progress_${i + 1}_${index}`,
        userId: `user_${i + 1}`,
        achievementId: achievement.id,
        currentValue: Math.floor(Math.random() * 90),
        targetValue: 100,
        startedAt: new Date(
          Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000,
        ), // Random date within last 7 days
        expiresAt: new Date(
          Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000,
        ), // Random date within next 7 days
      }));
    return progress;
  }).flat();

  await db.insert(AchievementProgress).values(achievementProgress);
}
