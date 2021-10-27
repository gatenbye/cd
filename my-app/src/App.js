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
    return [getRandomArbitrary(100, 1000), big, uniqueBig, getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)];
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


function App() {

  const [numbers, setNumbers] = useState([]);
  const [playing, setPlaying] = useState(-1);
  return (
    <div className="numbers-container">

    {playing == -1 && <button onClick={() => {setNumbers(calculateNumbers(0)); setPlaying(0)}}>None from the top</button>}
    {(playing && playing == 0) && <Player
        numbers={numbers}
        noFromTop={0}
        goBack={() => setPlaying(-1)}
      /> }

    {playing == -1  && <button onClick={() => {setNumbers(calculateNumbers(1)); setPlaying(1)}}>One from the top</button> }
    {(playing && playing == 1) && <Player
        numbers={numbers}
        noFromTop={1}
        goBack={() => setPlaying(-1)}
      /> }  
    {playing == -1  && <button onClick={() => {setNumbers(calculateNumbers(2)); setPlaying(2)}}>Two from the top</button>}
    {(playing && playing == 2) && <Player
        numbers={numbers}
        noFromTop={2}
        goBack={() => setPlaying(-1)}
      /> }

    {playing == -1  && <button onClick={() => {setNumbers(calculateNumbers(3)); setPlaying(3)}}>Three from the top</button> }
    {(playing && playing == 3) && <Player
        numbers={numbers}
        noFromTop={3}
        goBack={() => setPlaying(-1)}
      /> }  
    {playing == -1  && <button onClick={() => {setNumbers(calculateNumbers(4)); setPlaying(4)}}>Four from the top</button> }
    {(playing && playing == 4) && <Player
        numbers={numbers}
        noFromTop={4}
        goBack={() => setPlaying(-1)}
      /> }  

  </div>);
}

export default App;
