'use client'
import React from "react";
import { useState } from 'react';
import '../../styles/Scrambler.css'
import { randomScrambleForEvent } from "cubing/scramble";

async function createScramble(puzzle) {
  const scramble = await randomScrambleForEvent(puzzle);
  return (scramble.toString());
}

export default function Scrambler() {
  const [puzzle,setPuzzle] = React.useState('333');
  const handleChange = (event) => {
    setPuzzle(event.target.value);
  };
  return (
    <>
      <div className="scrambler">
        <h1 className="header">Scramble Generator</h1>
          <div className="generate">
            <label>
              Puzzle:
              <select value = {puzzle} onChange = {handleChange}>
                <option value = "222">2x2</option>
                <option value = "333">3x3</option>  
                <option value = "444">4x4</option>  
                <option value = "555">5x5</option>  
                <option value = "666">6x6</option>  
                <option value = "777">7x7</option> 
                <option value = "sq1">Square1</option>  
                <option value = "skewb">Skewb</option>  
                <option value = "minx">Megaminx</option>  
                <option value = "pyram">Pyraminx</option>  
                <option value = "clock">Clock</option>  
              </select> 
            </label>
            <div>
              <p>createScramble({puzzle})</p>
            </div>
          </div>
      </div>
    </>
  );
}