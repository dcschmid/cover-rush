import type { Achievement } from "../types/achievements";
import { AchievementCategory } from "../types/achievements";

export const ACHIEVEMENTS: Achievement[] = [
  // BEGINNER Achievements
  {
    id: "first_win",
    title: "Erster Sieg",
    description: "Gewinne dein erstes Spiel",
    icon: "🏆",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.totalGames > 0,
  },
  {
    id: "quick_starter",
    title: "Schnellstarter",
    description: "Beantworte 5 Fragen richtig in deinem ersten Spiel",
    icon: "🎯",
    category: AchievementCategory.BEGINNER,
    points: 75,
    condition: (stats) => stats.firstGameCorrectAnswers >= 5,
  },
  {
    id: "point_collector",
    title: "Punktesammler",
    description: "Erreiche 100 Gesamtpunkte",
    icon: "💯",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.totalPoints >= 100,
  },
  {
    id: "genre_explorer",
    title: "Genre-Entdecker",
    description: "Spiele in 3 verschiedenen Genres",
    icon: "🎵",
    category: AchievementCategory.BEGINNER,
    points: 75,
    condition: (stats) => Object.keys(stats.categoryStats || {}).length >= 3,
  },
  {
    id: "first_streak",
    title: "Erste Siegesserie",
    description: "Beantworte 3 Fragen in Folge richtig",
    icon: "🔥",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.maxStreak >= 3,
  },
  {
    id: "early_bird",
    title: "Früher Vogel",
    description: "Spiele ein Spiel vor 9 Uhr",
    icon: "🌅",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.earlyGames > 0,
  },
  {
    id: "weekend_player",
    title: "Wochenendspieler",
    description: "Spiele an einem Wochenende",
    icon: "📅",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.weekendGames > 0,
  },
  {
    id: "correct_5",
    title: "Fünf Richtige",
    description: "Beantworte 5 Fragen richtig in einem Spiel",
    icon: "✋",
    category: AchievementCategory.BEGINNER,
    points: 75,
    condition: (stats) => stats.maxCorrectAnswersPerGame >= 5,
  },
  {
    id: "first_joker",
    title: "Joker-Freund",
    description: "Benutze deinen ersten Joker",
    icon: "🃏",
    category: AchievementCategory.BEGINNER,
    points: 25,
    condition: (stats) => stats.totalJokersUsed > 0,
  },
  {
    id: "quick_answer",
    title: "Schnellantwort",
    description: "Beantworte eine Frage in unter 3 Sekunden",
    icon: "⚡",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.fastAnswers > 0,
  },
  {
    id: "first_category_win",
    title: "Kategorie-Sieger",
    description: "Gewinne ein Spiel in einer Kategorie",
    icon: "🎸",
    category: AchievementCategory.BEGINNER,
    points: 75,
    condition: (stats) =>
      Object.values(stats.categoryWins || {}).some((wins) => wins > 0),
  },
  {
    id: "evening_player",
    title: "Abendspieler",
    description: "Spiele nach 20 Uhr",
    icon: "🌙",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.eveningGames > 0,
  },
  {
    id: "first_perfect_round",
    title: "Perfekte Runde",
    description: "Beantworte alle Fragen einer Runde richtig",
    icon: "🎯",
    category: AchievementCategory.BEGINNER,
    points: 100,
    condition: (stats) => stats.perfectRounds > 0,
  },
  {
    id: "first_share",
    title: "Teilen macht Spaß",
    description: "Teile dein erstes Ergebnis",
    icon: "📤",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.totalShares > 0,
  },
  {
    id: "first_daily",
    title: "Täglicher Spieler",
    description: "Spiele an zwei aufeinanderfolgenden Tagen",
    icon: "📅",
    category: AchievementCategory.BEGINNER,
    points: 75,
    condition: (stats) => stats.consecutiveDays >= 2,
  },
  {
    id: "first_comeback",
    title: "Comeback Kid",
    description: "Gewinne nach einer falschen Antwort",
    icon: "🔄",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.comebacks > 0,
  },
  {
    id: "first_friend",
    title: "Freundschaftsanfang",
    description: "Füge deinen ersten Freund hinzu",
    icon: "👥",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.friends > 0,
  },
  {
    id: "first_playlist",
    title: "Playlist-Starter",
    description: "Erstelle deine erste Playlist",
    icon: "📝",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.playlists > 0,
  },
  {
    id: "first_like",
    title: "Musikliebhaber",
    description: "Like deinen ersten Song",
    icon: "❤️",
    category: AchievementCategory.BEGINNER,
    points: 25,
    condition: (stats) => stats.likedSongs > 0,
  },
  {
    id: "first_comment",
    title: "Kommentator",
    description: "Schreibe deinen ersten Kommentar",
    icon: "💭",
    category: AchievementCategory.BEGINNER,
    points: 50,
    condition: (stats) => stats.comments > 0,
  },

  // INTERMEDIATE Achievements...
  {
    id: "perfect_game",
    title: "Perfektionist",
    description: "Beantworte alle Fragen in einem Spiel richtig",
    icon: "⭐",
    category: AchievementCategory.INTERMEDIATE,
    points: 100,
    condition: (stats) => stats.perfectGames > 0,
  },
  {
    id: "streak_10",
    title: "Zehnerkette",
    description: "Beantworte 10 Fragen in Folge richtig",
    icon: "🔥",
    category: AchievementCategory.INTERMEDIATE,
    points: 150,
    condition: (stats) => stats.maxStreak >= 10,
  },
  {
    id: "category_master",
    title: "Kategorie-Meister",
    description: "Gewinne 10 Spiele in einer Kategorie",
    icon: "👑",
    category: AchievementCategory.INTERMEDIATE,
    points: 200,
    condition: (stats) =>
      Object.values(stats.categoryWins || {}).some((wins) => wins >= 10),
  },
  {
    id: "point_master",
    title: "Punktemeister",
    description: "Erreiche 1000 Gesamtpunkte",
    icon: "💫",
    category: AchievementCategory.INTERMEDIATE,
    points: 150,
    condition: (stats) => stats.totalPoints >= 1000,
  },
  {
    id: "weekly_player",
    title: "Wochenspieler",
    description: "Spiele 5 Tage in einer Woche",
    icon: "📅",
    category: AchievementCategory.INTERMEDIATE,
    points: 150,
    condition: (stats) => stats.daysPlayedInWeek >= 5,
  },
  {
    id: "fast_learner",
    title: "Schneller Lerner",
    description: "Beantworte 20 Fragen in unter 5 Sekunden",
    icon: "⚡",
    category: AchievementCategory.INTERMEDIATE,
    points: 200,
    condition: (stats) => stats.fastAnswers >= 20,
  },
  {
    id: "genre_expert",
    title: "Genre-Experte",
    description: "Spiele in allen verfügbaren Genres",
    icon: "🎵",
    category: AchievementCategory.INTERMEDIATE,
    points: 200,
    condition: (stats) => stats.uniqueGenresPlayed >= stats.totalGenres,
  },
  {
    id: "social_butterfly",
    title: "Sozialschmetterling",
    description: "Füge 10 Freunde hinzu",
    icon: "🦋",
    category: AchievementCategory.INTERMEDIATE,
    points: 150,
    condition: (stats) => stats.friends >= 10,
  },
  {
    id: "playlist_creator",
    title: "Playlist-Ersteller",
    description: "Erstelle 5 Playlists",
    icon: "📝",
    category: AchievementCategory.INTERMEDIATE,
    points: 150,
    condition: (stats) => stats.playlists >= 5,
  },
  {
    id: "sharing_is_caring",
    title: "Teilen ist Leben",
    description: "Teile 10 Ergebnisse",
    icon: "📤",
    category: AchievementCategory.INTERMEDIATE,
    points: 150,
    condition: (stats) => stats.totalShares >= 10,
  },
  {
    id: "daily_streak",
    title: "Tagessträhne",
    description: "Spiele 7 Tage in Folge",
    icon: "📅",
    category: AchievementCategory.INTERMEDIATE,
    points: 200,
    condition: (stats) => stats.consecutiveDays >= 7,
  },
  {
    id: "medium_difficulty",
    title: "Mittelschwer",
    description: "Gewinne 5 Spiele auf mittlerer Schwierigkeit",
    icon: "🎯",
    category: AchievementCategory.INTERMEDIATE,
    points: 200,
    condition: (stats) => stats.mediumDifficultyWins >= 5,
  },
  {
    id: "comeback_master",
    title: "Comeback-Meister",
    description: "Gewinne nach 3 falschen Antworten in Folge",
    icon: "🔄",
    category: AchievementCategory.INTERMEDIATE,
    points: 200,
    condition: (stats) => stats.bigComebacks >= 1,
  },
  {
    id: "evening_master",
    title: "Abendmeister",
    description: "Gewinne 10 Spiele nach 20 Uhr",
    icon: "🌙",
    category: AchievementCategory.INTERMEDIATE,
    points: 150,
    condition: (stats) => stats.eveningWins >= 10,
  },
  {
    id: "weekend_warrior",
    title: "Wochenendkrieger",
    description: "Spiele 20 Spiele an Wochenenden",
    icon: "⚔️",
    category: AchievementCategory.INTERMEDIATE,
    points: 200,
    condition: (stats) => stats.weekendGames >= 20,
  },
  {
    id: "music_collector",
    title: "Musiksammler",
    description: "Like 50 Songs",
    icon: "❤️",
    category: AchievementCategory.INTERMEDIATE,
    points: 150,
    condition: (stats) => stats.likedSongs >= 50,
  },
  {
    id: "community_voice",
    title: "Community-Stimme",
    description: "Schreibe 20 Kommentare",
    icon: "💭",
    category: AchievementCategory.INTERMEDIATE,
    points: 150,
    condition: (stats) => stats.comments >= 20,
  },
  {
    id: "perfect_day",
    title: "Perfekter Tag",
    description: "Gewinne 3 Spiele an einem Tag",
    icon: "📆",
    category: AchievementCategory.INTERMEDIATE,
    points: 200,
    condition: (stats) => stats.maxWinsPerDay >= 3,
  },
  {
    id: "diverse_player",
    title: "Vielseitiger Spieler",
    description: "Gewinne in 5 verschiedenen Genres",
    icon: "🎭",
    category: AchievementCategory.INTERMEDIATE,
    points: 200,
    condition: (stats) => Object.keys(stats.categoryWins || {}).length >= 5,
  },
  {
    id: "quick_thinker",
    title: "Schnelldenker",
    description: "Beantworte 50 Fragen unter der durchschnittlichen Zeit",
    icon: "🧠",
    category: AchievementCategory.INTERMEDIATE,
    points: 150,
    condition: (stats) => stats.fastAnswersTotal >= 50,
  },

  // EXPERT Achievements...
  {
    id: "no_joker",
    title: "Purist",
    description: "Gewinne ein Spiel ohne Joker zu benutzen",
    icon: "🎯",
    category: AchievementCategory.EXPERT,
    points: 150,
    condition: (stats) => stats.gamesWithoutJoker > 0,
  },
  {
    id: "speed_demon",
    title: "Geschwindigkeitsmeister",
    description: "Beantworte 10 Fragen in unter 5 Sekunden",
    icon: "⚡",
    category: AchievementCategory.EXPERT,
    points: 200,
    condition: (stats) => stats.fastAnswers >= 10,
  },
  {
    id: "perfect_streak",
    title: "Perfekte Serie",
    description: "Gewinne 5 Spiele in Folge mit perfekter Punktzahl",
    icon: "🌟",
    category: AchievementCategory.EXPERT,
    points: 300,
    condition: (stats) => stats.perfectWinStreak >= 5,
  },
  {
    id: "category_legend",
    title: "Kategorie-Legende",
    description: "Gewinne 50 Spiele in einer Kategorie",
    icon: "👑",
    category: AchievementCategory.EXPERT,
    points: 500,
    condition: (stats) =>
      Object.values(stats.categoryWins || {}).some((wins) => wins >= 50),
  },
  {
    id: "points_legend",
    title: "Punktelegende",
    description: "Erreiche 10.000 Gesamtpunkte",
    icon: "🏆",
    category: AchievementCategory.EXPERT,
    points: 1000,
    condition: (stats) => stats.totalPoints >= 10000,
  },
  {
    id: "monthly_master",
    title: "Monatsmeister",
    description: "Spiele jeden Tag eines Monats",
    icon: "📅",
    category: AchievementCategory.EXPERT,
    points: 500,
    condition: (stats) => stats.maxConsecutiveDays >= 30,
  },
  {
    id: "hard_mode_master",
    title: "Schwierigkeitsmeister",
    description: "Gewinne 10 Spiele auf höchster Schwierigkeit",
    icon: "💪",
    category: AchievementCategory.EXPERT,
    points: 400,
    condition: (stats) => stats.hardDifficultyWins >= 10,
  },
  {
    id: "ultimate_streak",
    title: "Ultimative Serie",
    description: "Beantworte 20 Fragen in Folge richtig",
    icon: "🔥",
    category: AchievementCategory.EXPERT,
    points: 400,
    condition: (stats) => stats.maxStreak >= 20,
  },
  {
    id: "speed_run",
    title: "Speedrun-Meister",
    description: "Gewinne ein Spiel in unter 2 Minuten",
    icon: "⚡",
    category: AchievementCategory.EXPERT,
    points: 300,
    condition: (stats) => stats.fastestWin <= 120,
  },
  {
    id: "all_genres_master",
    title: "Genre-Allrounder",
    description: "Erreiche Platz 1 in allen Genres",
    icon: "🎭",
    category: AchievementCategory.EXPERT,
    points: 1000,
    condition: (stats) => stats.genreFirstPlaces >= stats.totalGenres,
  },
  {
    id: "platinum_player",
    title: "Platin-Spieler",
    description: "Spiele 1000 Spiele",
    icon: "💎",
    category: AchievementCategory.EXPERT,
    points: 500,
    condition: (stats) => stats.totalGames >= 1000,
  },
  {
    id: "perfect_month",
    title: "Perfekter Monat",
    description: "Gewinne jeden Tag eines Monats mindestens ein Spiel",
    icon: "📆",
    category: AchievementCategory.EXPERT,
    points: 750,
    condition: (stats) => stats.perfectMonthStreak >= 30,
  },
  {
    id: "community_legend",
    title: "Community-Legende",
    description: "Erreiche 1000 Follower",
    icon: "👥",
    category: AchievementCategory.EXPERT,
    points: 500,
    condition: (stats) => stats.followers >= 1000,
  },
  {
    id: "playlist_guru",
    title: "Playlist-Guru",
    description: "Erstelle 50 Playlists mit je mindestens 10 Likes",
    icon: "📝",
    category: AchievementCategory.EXPERT,
    points: 400,
    condition: (stats) => stats.popularPlaylists >= 50,
  },
  {
    id: "perfect_season",
    title: "Perfekte Saison",
    description: "Bleibe 3 Monate in Folge in den Top 10",
    icon: "🏅",
    category: AchievementCategory.EXPERT,
    points: 750,
    condition: (stats) => stats.monthsInTop10 >= 3,
  },
  {
    id: "knowledge_master",
    title: "Wissensmeister",
    description: "Beantworte 10.000 Fragen richtig",
    icon: "🧠",
    category: AchievementCategory.EXPERT,
    points: 1000,
    condition: (stats) => stats.totalCorrectAnswers >= 10000,
  },
  {
    id: "speed_legend",
    title: "Geschwindigkeitslegende",
    description: "Beantworte 100 Fragen in unter 3 Sekunden",
    icon: "⚡",
    category: AchievementCategory.EXPERT,
    points: 500,
    condition: (stats) => stats.ultraFastAnswers >= 100,
  },
  {
    id: "perfect_collection",
    title: "Perfekte Sammlung",
    description: "Schalte alle anderen Achievements frei",
    icon: "🌟",
    category: AchievementCategory.EXPERT,
    points: 2000,
    condition: (stats) =>
      stats.unlockedAchievements >= stats.totalAchievements - 1,
  },
  {
    id: "ultimate_master",
    title: "Ultimativer Meister",
    description: "Erreiche den ersten Platz in der Gesamtwertung",
    icon: "👑",
    category: AchievementCategory.EXPERT,
    points: 1000,
    condition: (stats) => stats.globalRank === 1,
  },
  {
    id: "legendary_status",
    title: "Legendärer Status",
    description: "Halte alle Rekorde gleichzeitig",
    icon: "🏆",
    category: AchievementCategory.EXPERT,
    points: 2000,
    condition: (stats) => stats.simultaneousRecords >= stats.totalRecords,
  },

  {
    id: "midnight_master",
    title: "Mitternachtsmeister",
    description: "Spiele 10 Spiele zwischen 0:00 und 4:00 Uhr",
    icon: "🌙",
    category: AchievementCategory.SECRET,
    points: 200,
    condition: (stats) => stats.eveningGames >= 10 && new Date().getHours() < 4,
  },
  {
    id: "holiday_spirit",
    title: "Feiertagsgeist",
    description: "Spiele an allen wichtigen Feiertagen",
    icon: "🎊",
    category: AchievementCategory.SECRET,
    points: 300,
    condition: (stats) => stats.holidayGames >= 5,
  },
  {
    id: "summer_champion",
    title: "Sommerkönig",
    description: "Gewinne 50 Spiele im Sommer",
    icon: "☀️",
    category: AchievementCategory.SECRET,
    points: 250,
    condition: (stats) => stats.summerGames >= 50,
  },
  {
    id: "winter_warrior",
    title: "Winterkrieger",
    description: "Spiele 100 Spiele im Winter",
    icon: "❄️",
    category: AchievementCategory.SECRET,
    points: 250,
    condition: (stats) => stats.winterGames >= 100,
  },
  {
    id: "perfect_timing",
    title: "Perfektes Timing",
    description: "Gewinne genau um Mitternacht",
    icon: "⏰",
    category: AchievementCategory.SECRET,
    points: 500,
    condition: (stats) => {
      const lastPlayedHour = new Date(stats.lastPlayedAt).getHours();
      const lastPlayedMinute = new Date(stats.lastPlayedAt).getMinutes();
      return lastPlayedHour === 0 && lastPlayedMinute === 0;
    },
  },
  {
    id: "party_animal",
    title: "Party-Tier",
    description: "Spiele 10 Spiele an einem Samstagabend",
    icon: "🎉",
    category: AchievementCategory.SECRET,
    points: 200,
    condition: (stats) => {
      const isWeekend = new Date().getDay() === 6;
      const isEvening = new Date().getHours() >= 20;
      return stats.weekendGames >= 10 && isWeekend && isEvening;
    },
  },
  {
    id: "early_riser",
    title: "Frühaufsteher",
    description: "Spiele 7 Tage in Folge vor 7 Uhr",
    icon: "🌅",
    category: AchievementCategory.SECRET,
    points: 300,
    condition: (stats) => stats.earlyGames >= 7 && stats.consecutiveDays >= 7,
  },
  {
    id: "palindrome",
    title: "Palindrom-Meister",
    description:
      "Erreiche eine Punktzahl, die vorwärts und rückwärts gleich ist",
    icon: "🔄",
    category: AchievementCategory.SECRET,
    points: 333,
    condition: (stats) => {
      const isPalindrome = (num: number) =>
        num.toString() === num.toString().split("").reverse().join("");
      return Object.values(stats.categoryStats || {}).some((cat: any) =>
        isPalindrome(cat.highScore),
      );
    },
  },
];
