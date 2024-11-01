import { column, defineDb, defineTable } from "astro:db";

const User = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    username: column.text(),
    email: column.text(),
    provider_id: column.text(),
    provider_type: column.text(),
    avatar_url: column.text(),
    total_user_points: column.number(),
    golden_lps: column.json({ optional: true, default: {} }),
  },
});

const Session = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    expiresAt: column.date(),
    userId: column.text({
      references: () => User.columns.id,
    }),
  },
});

const HighscorePerCategory = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    userId: column.text({
      references: () => User.columns.id,
    }),
    category: column.text(),
    score: column.number(),
  },
});

const TotalHighscore = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    userId: column.text({
      references: () => User.columns.id,
    }),
    score: column.number(),
  },
});
const Achievement = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    title: column.text(),
    description: column.text(),
    icon: column.text(),
    category: column.text(), // 'BEGINNER', 'INTERMEDIATE', 'EXPERT', 'SECRET'
    points: column.number(),
    isSecret: column.boolean({ default: false }),
  },
});

const UserAchievement = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    userId: column.text({
      references: () => User.columns.id,
    }),
    achievementId: column.text({
      references: () => Achievement.columns.id,
    }),
    unlockedAt: column.date(),
    progress: column.number({ default: 0 }), // Fortschritt in Prozent
  },
});

const PlayerStats = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    userId: column.text({
      references: () => User.columns.id,
    }),
    totalGames: column.number({ default: 0 }),
    totalCorrectAnswers: column.number({ default: 0 }),
    totalPoints: column.number({ default: 0 }),
    gamesWithoutJoker: column.number({ default: 0 }),
    perfectGames: column.number({ default: 0 }),
    fastAnswers: column.number({ default: 0 }),
    categoryStats: column.json({
      optional: true,
      default: {},
    }),
    firstGameDate: column.date(),
    summerGames: column.number({ default: 0 }),
    winterGames: column.number({ default: 0 }),
    holidayGames: column.number({ default: 0 }),
    firstGameCorrectAnswers: column.number({ default: 0 }),
    ultraFastAnswers: column.number({ default: 0 }),
    easyDifficultyWins: column.number({ default: 0 }),
    mediumDifficultyWins: column.number({ default: 0 }),
    hardDifficultyWins: column.number({ default: 0 }),
    // System-Konstanten (können als JSON gespeichert werden)
    systemConstants: column.json({
      totalRecords: 0,
      totalAchievements: 0,
      totalGenres: 0,
    }),

    // Erweiterte Statistiken
    maxConsecutiveDays: column.number({ default: 0 }),
    eveningWins: column.number({ default: 0 }),
    perfectRounds: column.number({ default: 0 }),

    // JSON-Spalten für komplexe Statistiken
    roundStats: column.json({
      total: 0,
      perfect: 0,
      consecutive: 0,
      maxConsecutive: 0,
    }),

    timeOfDayStats: column.json({
      morning: 0,
      afternoon: 0,
      evening: 0,
      night: 0,
      morningWins: 0,
      afternoonWins: 0,
      eveningWins: 0,
      nightWins: 0,
    }),

    streaks: column.json({
      current: 0,
      max: 0,
      dailyCurrent: 0,
      dailyMax: 0,
      perfectCurrent: 0,
      perfectMax: 0,
    }), // Speichert category-spezifische Stats
    lastUpdated: column.date(),
  },
});

// Für tägliche/wöchentliche Herausforderungen
const AchievementProgress = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    userId: column.text({
      references: () => User.columns.id,
    }),
    achievementId: column.text({
      references: () => Achievement.columns.id,
    }),
    currentValue: column.number({ default: 0 }),
    targetValue: column.number(),
    startedAt: column.date(),
    expiresAt: column.date({ optional: true }),
  },
});

export default defineDb({
  tables: {
    User,
    Session,
    HighscorePerCategory,
    TotalHighscore,
    Achievement,
    UserAchievement,
    PlayerStats,
    AchievementProgress,
  },
});
