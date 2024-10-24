"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import "../../styles/Scrambler.css";
import { randomScrambleForEvent } from "cubing/scramble";
import "cubing/twisty";

async function createScramble(puzzle) {
  const scramble = await randomScrambleForEvent(puzzle);
  return scramble.toString();
}

export default function Scrambler() {
  const [puzzle, setPuzzle] = React.useState("");
  const [scramble, setScramble] = React.useState("");
  const playerRef2d = useRef(null);
  const playerRef3d = useRef(null);

  const handleChange = async (event) => {
    const newPuzzle = event.target.value.scramble;
    setPuzzle(newPuzzle);
    const newScramble = await createScramble(newPuzzle);
    setScramble(newScramble);
    if (playerRef2d.current) {
      playerRef2d.current.alg = newScramble;
    }
    if (playerRef3d.current) {
      playerRef3d.current.alg = newScramble;
    }
  };
  return (
    <>
      <div className="scrambler">
        <h1 className="header">Scramble Generator</h1>
        <div className="generate">
          <label>
            Puzzle:
            <select value={puzzle} onChange={handleChange}>
              <option value='{"scramble":"222","visual":"2x2x2"}'>2x2</option>
              <option value='{"scramble":"333","visual":"3x3x3"}'>3x3</option>
              <option value='{"scramble":"444","visual":"4x4x4"}'>4x4</option>
              <option value='{"scramble":"555","visual":"5x5x5"}'>5x5</option>
              <option value='{"scramble":"666","visual":"6x6x6"}'>6x6</option>
              <option value='{"scramble":"777","visual":"7x7x7"}'>7x7</option>
              <option value='{"scramble":"sq1","visual":"square1"}'>
                Square1
              </option>
              <option value='{"scramble":"skewb","visual":"skewb"}'>
                Skewb
              </option>
              <option value='{"scramble":"mix","visual":"megaminx"}'>
                Megaminx
              </option>
              <option value='{"scramble":"pyram","visual":"pyraminx"}'>
                Pyraminx
              </option>
              <option value='{"scramble":"clock","visual":"clock"}'>
                Clock
              </option>
            </select>
          </label>
          <div>
            Scramble: {scramble}
            <twisty-player
              ref={playerRef2d}
              visualization="2D"
              background="none"
            ></twisty-player>{" "}
            <twisty-player
              ref={playerRef3d}
              visualization="3D"
              background="none"
            ></twisty-player>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
