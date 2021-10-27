import './App.css';

import Player from "./Player";
import React, { useState } from "react";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getBigNumber() {
  return (getRandomArbitrary(1, 5)) * 25;
}

function calculateNumbers(numBig) {
  var previousBigs = [];
  switch(numBig) {
  case 0:
    return [getRandomArbitrary(100, 1000), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)];
    break;
  case 1:
    return [getRandomArbitrary(100, 1000), getBigNumber(), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)];
    break;
  case 2:
    var big = getBigNumber();
    var uniqueBig = getBigNumber();
    while(big == uniqueBig) {
      uniqueBig = getBigNumber();
    }
    return [getRandomArbitrary(100, 1000), (getRandomArbitrary(1, 5)) * 25, (getRandomArbitrary(1, 5)) * 25, getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)];
    break;
  case 3:
    var bigs = [getBigNumber()];
    var uniqueBig = getBigNumber();
    while(bigs.includes(uniqueBig)) {
      uniqueBig = getBigNumber();
    }
    bigs.push(uniqueBig);
    uniqueBig = getBigNumber();
    while(bigs.includes(uniqueBig)) {
      uniqueBig = getBigNumber();
    }
    return [getRandomArbitrary(100, 1000), bigs[0], bigs[1], uniqueBig, getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)]; 
    break;
  case 4:
    var bigs = [getBigNumber()];
    var uniqueBig = getBigNumber();
    while(bigs.includes(uniqueBig)) {
      uniqueBig = getBigNumber();
    }
    bigs.push(uniqueBig);
    uniqueBig = getBigNumber();
    while(bigs.includes(uniqueBig)) {
      uniqueBig = getBigNumber();
    }
    bigs.push(uniqueBig);
    uniqueBig = getBigNumber();
    while(bigs.includes(uniqueBig)) {
      uniqueBig = getBigNumber();
    }
    return [getRandomArbitrary(100, 1000), bigs[0], bigs[1], bigs[2], uniqueBig, getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)]; 
    break;
  default:
    // code block
  }
}



const useAudio = () => {
  const [playing, setPlaying] = useState(-1);
  var interval = null;

  function stopTimer() {
    setPlaying(-2);
    clearInterval(interval);
  }

  const toggle = function(number) {
    setPlaying(number);
    interval = setInterval(stopTimer, 30000);
  } 

  return [playing, toggle];
};

function App() {

  const [playing, toggle] = useAudio();
  const [numbers, setNumbers] = useState([]);
  return (
    <div className="numbers-container">

    {(playing == -1) && <button onClick={() => {toggle(0); setNumbers(calculateNumbers(0))}}>None from the top</button>}
    {(playing == 0 || playing == -2) && <Player
        numbers={numbers}
      /> }

    {(playing == -1) && <button onClick={() => {toggle(1); setNumbers(calculateNumbers(1))}}>One from the top</button> }
    {(playing == 1 || playing == -2) && <Player
        numbers={numbers}
      /> }  
    {(playing == -1) && <button onClick={() => {toggle(2); setNumbers(calculateNumbers(2))}}>Two from the top</button>}
    {(playing == 2 || playing == -2) && <Player
        numbers={numbers}
      /> }

    {(playing == -1) && <button onClick={() => {toggle(3); setNumbers(calculateNumbers(3))}}>Three from the top</button> }
    {(playing == 3 || playing == -2) && <Player
        numbers={numbers}
      /> }  
    {(playing == -1) && <button onClick={() => {toggle(4); setNumbers(calculateNumbers(4))}}>Four from the top</button> }
    {(playing == 4 || playing == -2) && <Player
        numbers={numbers}
      /> }  

  </div>);
}

export default App;
