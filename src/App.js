import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { CSSTransition, SwitchTransition, Transition } from 'react-transition-group';

function App() {


  const [selectedLetter, setSelectedLetter] = useState(0);
  let timer = 2000;
  const letters = [
    "a", "b", "c", "d",
    "e", "f", "g", "h",
    "i", "j", "k", "l",
    "m", "n", "o", "p",
    "q", "r", "s", "t",
    "u", "v", "w", "x",
    "y", "z"
  ]

  function randomInteger(min, max) {

  }


  const nextFrame = () => {

    if (timer > 0) {
      setSelectedLetter(Math.floor(Math.random() * (25 - 0 + 1)) + 0);
      timer = timer - 100;
      setTimeout(nextFrame, 100);
    }
  }

  return (
    <div className="App">
      <div className="box" onClick={() => { nextFrame() }}>
        <SwitchTransition>
          <CSSTransition
            key={selectedLetter}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            classNames='fade'>
            <span className="letter">{letters[selectedLetter]}</span>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default App;
