export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  points: number;
  isSecret?: boolean;
  condition: (stats: PlayerStats) => boolean;
}

export interface PlayerAchievement {
  id: string;
  userId: string;
  achievementId: string;
  unlockedAt: Date;
  progress: number;
}

export interface PlayerStats {
  // Basis Statistiken
  userId: string;
  totalGames: number;
  totalPoints: number;
  totalCorrectAnswers: number;
  totalJokersUsed: number;
  gamesWithoutJoker: number;

  // Spiel-Performance
  maxStreak: number;
  fastAnswers: number;
  perfectGames: number;
  maxCorrectAnswersPerGame: number;
  firstGameCorrectAnswers: number;
  perfectWinStreak: number;
  fastAnswersTotal: number;
  ultraFastAnswers: number;

  // Zeitbasierte Stats
  earlyGames: number;
  eveningGames: number;
  weekendGames: number;
  consecutiveDays: number;
  daysPlayedInWeek: number;
  perfectMonthStreak: number;
  lastPlayedAt: Date;
  lastUpdated: Date;
  firstPlayedAt: Date;
  
  // Schwierigkeitsgrade
  easyDifficultyWins: number;
  mediumDifficultyWins: number;
  hardDifficultyWins: number;

  // Kategorie-bezogen
  categoryStats: Record<
    string,
    {
      played: number;
      wins: number;
      highScore: number;
      perfectGames: number;
    }
  >;
  categoryWins: Record<string, number>;
  uniqueGenresPlayed: number;
  genreFirstPlaces: number;

  // Community & Social
  totalShares: number;
  followers: number;
  friends: number;
  comments: number;
  likedSongs: number;
  playlists: number;
  popularPlaylists: number;
  communityWins: number;

  // Rankings & Achievements
  globalRank: number;
  monthsInTop10: number;
  unlockedAchievements: number;
  simultaneousRecords: number;

  // Gameplay Details
  bigComebacks: number;
  maxWinsPerDay: number;
  fastestWin: number;
  comebacks: number;

  // Saisonale Stats
  summerGames: number;
  winterGames: number;
  holidayGames: number;

  // System-Konstanten
  totalRecords: number; // Gesamtanzahl der verfügbaren Rekorde
  totalAchievements: number; // Gesamtanzahl der verfügbaren Achievements
  totalGenres: number; // Gesamtanzahl der verfügbaren Genres

  // Erweiterte Spielstatistiken
  maxConsecutiveDays: number; // Maximale Anzahl aufeinanderfolgender Spieltage
  eveningWins: number; // Anzahl der Siege am Abend
  perfectRounds: number; // Anzahl der perfekten Runden

  // Tracking für verschiedene Achievements
  roundStats: {
    total: number; // Gesamtanzahl gespielter Runden
    perfect: number; // Anzahl perfekter Runden
    consecutive: number; // Aktuelle Serie perfekter Runden
    maxConsecutive: number; // Längste Serie perfekter Runden
  };

  // Tageszeit-bezogene Stats
  timeOfDayStats: {
    morning: number; // Spiele am Morgen (6-12 Uhr)
    afternoon: number; // Spiele am Nachmittag (12-18 Uhr)
    evening: number; // Spiele am Abend (18-24 Uhr)
    night: number; // Spiele in der Nacht (0-6 Uhr)
    morningWins: number; // Siege am Morgen
    afternoonWins: number; // Siege am Nachmittag
    eveningWins: number; // Siege am Abend
    nightWins: number; // Siege in der Nacht
  };

  // Streak Tracking
  streaks: {
    current: number; // Aktuelle Siegesserie
    max: number; // Längste Siegesserie
    dailyCurrent: number; // Aktuelle Serie täglicher Spiele
    dailyMax: number; // Längste Serie täglicher Spiele
    perfectCurrent: number; // Aktuelle Serie perfekter Spiele
    perfectMax: number; // Längste Serie perfekter Spiele
  };
}

export enum AchievementCategory {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  EXPERT = "EXPERT",
  SECRET = "SECRET",
}
