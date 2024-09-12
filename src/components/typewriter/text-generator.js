import { calculateBackspaces } from "./calculate-backspaces";



export function* textGenerator(
  sentences
) {
  let text = "";

  for (const sentence of sentences) {
    const backspaces = calculateBackspaces(text, sentence);

    // Now apply the number of backspaces
    for (let i = 0; i < backspaces; i++) {
      text = text.slice(0, -1);

      // Do not blink when typing
      yield { text, blink: false };
    }

    // The tricky bit
    const missingChars = sentence.slice(text.length);

    const missingCharsArray = missingChars.split("");

    for (const missingChar of missingCharsArray) {
      text += missingChar;

      // Do not blink when typing
      yield { text, blink: false };
    }

    // Add a delay between sentences
    const delay = 15;
    for (let i = 0; i < delay; i++) {
      // Blink when not typing
      yield { text, blink: true };
    }
  }
}
