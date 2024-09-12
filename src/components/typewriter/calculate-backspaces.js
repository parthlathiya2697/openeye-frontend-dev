export function calculateBackspaces(from, to) {
  let charsInCommonFromStart = 0;

  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i];
    const toChar = to[i];

    if (toChar === fromChar) {
      charsInCommonFromStart += 1;
    } else {
      break;
    }
  }

  return from.length - charsInCommonFromStart;
}
