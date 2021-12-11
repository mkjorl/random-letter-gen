import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  

  const [selectedLetter, setSelectedLetter] = useState(0);
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]

  function randomInteger(min, max) {
    setSelectedLetter(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return (
    <div className="App">
        <div className="box" onClick={() => {randomInteger(0, 27)}}>
          <h1>{letters[selectedLetter]}</h1>
        </div>
    </div>
  );
}

export default App;
