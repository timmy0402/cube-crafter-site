import { randomScrambleForEvent } from "cubing/scramble";

async function createScramble(puzzle) {
  const scramble = await randomScrambleForEvent(puzzle);
  return (scramble.toString());
}
