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
  const [puzzle, setPuzzle] = React.useState(
    '{"scramble":"333","visual":"3x3x3"}',
  );
  const [scramble, setScramble] = React.useState("");
  const [cube, setCube] = React.useState("");
  const [is3D, setIs3D] = React.useState(false);

  const playerRef2d = useRef(null);
  const playerRef3d = useRef(null);

  const handleCheckboxChange = () => {
    setIs3D(!is3D);
    const value = JSON.parse(puzzle);
    if (!is3D) {
      playerRef2d.current.puzzle = value.visual;
      playerRef2d.current.alg = scramble;
    } else {
      playerRef3d.current.puzzle = value.visual;
      playerRef3d.current.alg = scramble;
    }
  };

  const handleChange = async (event) => {
    const value = event.target.value;
    const parsedValue = JSON.parse(value);
    const newPuzzle = parsedValue.scramble;
    setCube(parsedValue.visual);
    setPuzzle(value);
    const newScramble = await createScramble(newPuzzle);
    setScramble(newScramble);
    if (playerRef2d.current) {
      playerRef2d.current.puzzle = parsedValue.visual;
      playerRef2d.current.alg = newScramble;
    }
    if (playerRef3d.current) {
      playerRef3d.current.puzzle = parsedValue.visual;
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
              <option value='{"scramble":"minx","visual":"megaminx"}'>
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
          <p className="3dLabel">3D</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={is3D}
              onChange={handleCheckboxChange}
            />
            <span className="slider round"></span>
          </label>
          <div>
            Scramble: {scramble}
            {!is3D && (
              <div className="scramble-container">
                <twisty-player
                  ref={playerRef2d}
                  visualization="2D"
                  background="none"
                  alg={scramble}
                  puzzle={cube}
                ></twisty-player>{" "}
              </div>
            )}
            {is3D && (
              <div className="scramble-container">
                <twisty-player
                  ref={playerRef3d}
                  visualization="3D"
                  background="none"
                  alg={scramble}
                  puzzle={cube}
                ></twisty-player>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
