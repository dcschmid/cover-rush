import { type MediaElements, updateMedia } from "./mediaUtils";

interface FeedbackElements {
  feedbackElement: HTMLElement;
  overlayElement: HTMLElement;
  overlayCover: HTMLImageElement;
  artistElement: HTMLElement;
  albumElement: HTMLElement;
  triviaElement: HTMLElement;
  yearElement: HTMLElement;
  scoreElement: HTMLElement;
}

interface Answer {
  option: string;
  correctAnswer: string;
  question: {
    trivia: string;
  };
  album: {
    coverSrc: string;
    artist: string;
    album: string;
    year: string;
  };
}

interface GameState {
  score: number;
  startTime: number;
  mediaElements?: MediaElements | null;
}

interface AnswerCallbacks {
  onScoreUpdate: (score: number) => void;
  onNextRound: () => void;
}

/**
 * Verarbeitet die Antwort des Spielers
 */
export function handleAnswer(
  answer: Answer,
  gameState: GameState,
  elements: FeedbackElements,
  callbacks: AnswerCallbacks,
): void {
  const { option, correctAnswer, question, album } = answer;
  const { score, startTime, mediaElements } = gameState;

  try {
    const { totalPoints, bonusPoints } = calculatePoints(
      option === correctAnswer,
      startTime,
    );

    // Feedback anzeigen
    showFeedback(
      elements.feedbackElement,
      option === correctAnswer,
      correctAnswer,
      bonusPoints,
    );

    // Score aktualisieren
    const newScore = score + totalPoints;
    callbacks.onScoreUpdate(newScore);

    // UI aktualisieren
    updateUI(elements, question, album);

    // Media aktualisieren
    if (mediaElements) {
      updateMedia(album, mediaElements);
    }

    // Overlay anzeigen
    setupOverlay(elements.overlayElement, callbacks.onNextRound);
  } catch (error) {
    console.error("Fehler bei der Antwortverarbeitung:", error);
  }
}

/**
 * Berechnet die Punkte basierend auf der Antwort und Zeit
 */
function calculatePoints(isCorrect: boolean, startTime: number) {
  const timeTaken = (Date.now() - startTime) / 1000;
  let totalPoints = 0;
  let bonusPoints = 0;

  if (isCorrect) {
    bonusPoints = timeTaken <= 10 ? 50 : timeTaken <= 15 ? 25 : 0;
    totalPoints = 50 + bonusPoints;
  }

  return { totalPoints, bonusPoints };
}

/**
 * Zeigt das Feedback zur Antwort an
 */
function showFeedback(
  feedbackElement: HTMLElement,
  isCorrect: boolean,
  correctAnswer: string,
  bonusPoints: number,
) {
  feedbackElement.classList.add(isCorrect ? "correct" : "incorrect");
  feedbackElement.textContent = isCorrect
    ? `Richtig! 50 Punkte + ${bonusPoints} Bonuspunkte`
    : `Falsch! Die richtige Antwort war: ${correctAnswer}`;

  feedbackElement.classList.add("show");

  setTimeout(() => {
    feedbackElement.classList.remove("show", "correct", "incorrect");
  }, 5000);
}

/**
 * Aktualisiert die UI-Elemente
 */
function updateUI(
  elements: FeedbackElements,
  question: { trivia: string },
  album: { coverSrc: string; artist: string; album: string; year: string },
) {
  elements.overlayCover.src = album.coverSrc || "";
  elements.artistElement.textContent = album.artist || "";
  elements.albumElement.textContent = album.album || "";
  elements.triviaElement.textContent = question.trivia || "";
  elements.yearElement.textContent = album.year || "";
}

/**
 * Richtet das Overlay ein
 */
function setupOverlay(overlayElement: HTMLElement, onNextRound: () => void) {
  overlayElement.classList.remove("hidden");
}

/**
 * Initialisiert die benötigten Feedback-Elemente
 */
export function initializeFeedbackElements(): FeedbackElements | null {
  try {
    const elements = {
      feedbackElement: document.getElementById("feedback"),
      overlayElement: document.getElementById("overlay"),
      overlayCover: document.getElementById("overlay-cover"),
      artistElement: document.getElementById("overlay-artist"),
      albumElement: document.getElementById("overlay-album"),
      triviaElement: document.getElementById("overlay-funfact"),
      yearElement: document.getElementById("overlay-year"),
      scoreElement: document.querySelector(".coinsCount"),
    };

    // Prüfe, ob alle Elemente gefunden wurden
    if (Object.values(elements).some((element) => !element)) {
      throw new Error("Nicht alle erforderlichen Elemente gefunden");
    }

    return elements as FeedbackElements;
  } catch (error) {
    console.error("Fehler beim Initialisieren der Feedback-Elemente:", error);
    return null;
  }
}
