import { shuffleArray } from "../share/shuffleArray";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  trivia?: string; // Füge trivia als optionales Feld hinzu
}

interface Album {
  coverSrc: string;
  artist: string;
  album: string;
  year: string;
  preview_link?: string;
  spotify_link?: string;
  deezer_link?: string;
  apple_music_link?: string;
}

interface QuestionElements {
  container: HTMLElement;
  question: HTMLElement;
  options: HTMLElement;
  spinner: HTMLElement;
}

interface QuestionHandlers {
  handleAnswer: (
    option: string,
    correctAnswer: string,
    question: { trivia: string }, // Anpassen an tatsächliche Struktur
    album: Album,
  ) => void;
  updateJokerState?: () => void;
}

/**
 * Lädt und zeigt eine neue Frage
 */
export function loadQuestion(
  question: Question,
  album: Album,
  elements: QuestionElements,
  handlers: QuestionHandlers,
  _currentQuestion: Question, // Renamed to avoid unused parameter warning
): void {
  try {
    elements.container.classList.add("hidden");
    elements.spinner.classList.remove("hidden");

    setTimeout(() => {
      // Setze Fragentext
      elements.question.textContent = question.question;
      elements.options.innerHTML = "";

      // ARIA-Attribute setzen
      setAccessibilityAttributes(elements);

      // Erstelle und füge Antwortoptionen hinzu
      createAnswerButtons(question, album, elements.options, handlers);

      // UI-Update abschließen
      finishLoading(elements);

      // Aktualisiere Joker-Status wenn nötig
      if (handlers.updateJokerState) {
        handlers.updateJokerState();
      }
    }, 500);
  } catch (error) {
    console.error("Fehler beim Laden der Frage:", error);
  }
}

/**
 * Setzt die ARIA-Attribute für bessere Zugänglichkeit
 */
function setAccessibilityAttributes(elements: QuestionElements): void {
  elements.container.setAttribute("role", "main");
  elements.container.setAttribute("aria-label", "Aktuelle Spielfrage");

  elements.question.setAttribute("role", "heading");
  elements.question.setAttribute("aria-level", "2");

  elements.options.setAttribute("role", "radiogroup");
  elements.options.setAttribute("aria-label", "Antwortmöglichkeiten");
}

/**
 * Erstellt die Antwortbuttons mit Event-Handlern
 */
function createAnswerButtons(
  question: Question,
  album: Album,
  optionsContainer: HTMLElement,
  handlers: QuestionHandlers,
): void {
  const shuffledOptions = shuffleArray([...question.options]);

  shuffledOptions.forEach((option: string) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "button";
    setupButtonAttributes(button, option);

    button.onclick = () =>
      handlers.handleAnswer(
        option,
        question.correctAnswer,
        { trivia: question.trivia || "" },
        album,
      );

    optionsContainer.appendChild(button);
  });

  // Keyboard Navigation
  setupKeyboardNavigation(optionsContainer, question, album, handlers);
}

/**
 * Setzt die Attribute für einen Antwortbutton
 */
function setupButtonAttributes(
  button: HTMLButtonElement,
  option: string,
): void {
  button.setAttribute("role", "radio");
  button.setAttribute("aria-checked", "false");
  button.setAttribute("aria-label", `Antwort auswählen: ${option}`);
}

/**
 * Richtet die Keyboard-Navigation ein
 */
function setupKeyboardNavigation(
  optionsContainer: HTMLElement,
  question: Question,
  album: Album,
  handlers: QuestionHandlers,
): void {
  const options = optionsContainer.querySelectorAll<HTMLElement>("button");

  options.forEach((button, index) => {
    button.addEventListener("keydown", (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
          e.preventDefault();
          const nextButton = options[(index + 1) % options.length];
          nextButton.focus();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault();
          const prevButton =
            options[(index - 1 + options.length) % options.length];
          prevButton.focus();
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          const optionText = button.textContent || "";
          handlers.handleAnswer(
            optionText,
            question.correctAnswer,
            { trivia: question.trivia || "" },
            album,
          );
          break;
      }
    });
  });

  // Setze initialen Fokus
  if (options.length > 0) {
    options[0].focus();
  }
}

/**
 * Schließt das Laden der Frage ab
 */
function finishLoading(elements: QuestionElements): void {
  elements.spinner.classList.add("hidden");
  elements.container.classList.remove("hidden");
}
