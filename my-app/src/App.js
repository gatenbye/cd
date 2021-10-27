import './App.css';

import Player from "./Player";
import React, { useState } from "react";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getBigNumber() {
  return (getRandomArbitrary(1, 5)) * 25;
}

function drawCoord(degrees) {
  let radius = 294;
  let radians = (degrees * Math.PI) / 180;
  let offset = 10;
  let rX = radius + offset + Math.sin(radians) * radius;
  let rY = radius + offset - Math.cos(radians) * radius;
  let dir = degrees > 180 ? 1 : 0;
  // prettier-ignore
  let coord = `M${radius + offset},${radius + offset} L${radius + offset},${offset} A${radius},${radius} 0 ${dir},1 ${rX},${rY}`
  return coord;
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
    setPlaying(-1);
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
  const [degrees, setDegrees] = useState(55);
  return (
    <div className="numbers-container">
    {(playing == -1) && <button onClick={() => {toggle(0)}}>None from the top</button>}
    {(playing == 0) && <Player
        numbers={calculateNumbers(0)}
      /> }

    {(playing == -1) && <button onClick={() => {toggle(1)}}>One from the top</button> }
    {(playing == 1) && <Player
        numbers={calculateNumbers(1)}
      /> }  
    {(playing == -1) && <button onClick={() => {toggle(2)}}>Two from the top</button>}
    {(playing == 2) && <Player
        numbers={calculateNumbers(2)}
      /> }

    {(playing == -1) && <button onClick={() => {toggle(3)}}>Three from the top</button> }
    {(playing == 3) && <Player
        numbers={calculateNumbers(3)}
      /> }  
    {(playing == -1) && <button onClick={() => {toggle(4)}}>Four from the top</button> }
    {(playing == 4) && <Player
        numbers={calculateNumbers(4)}
      /> }  

        <svg width="908" height="908">
   <circle cx="344" cy="344" r="317" stroke="#666666" stroke-width="10" fill="#FFFFFF">
   </circle>
   <circle cx="344" cy="344" r="311" stroke="#524E4D" stroke-width="4" fill="#FFFFFF">
   </circle>
   <circle cx="344" cy="344" r="300" stroke="#666666" stroke-width="20" fill="#FFFFFF">
   </circle>
   <circle cx="344" cy="344" r="294" stroke="#232F7A" stroke-width="16" fill="#B6B3AC">
   <path d={drawCoord(180)} fill="#232F7A" />
   </circle>
   
   <circle cx="344" cy="50" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   <circle cx="344" cy="638" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   <circle cx="50" cy="344" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   <circle cx="638" cy="344" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   <circle cx="86" cy="203" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   <circle cx="184" cy="97" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   
   <circle cx="602" cy="203" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   
   <circle cx="502" cy="97" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   
   <circle cx="495" cy="595" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   
   <circle cx="190" cy="595" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   <circle cx="600" cy="487" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   <circle cx="87" cy="487" r="2" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF" />
   
   
   <circle cx="344" cy="344" r="100" stroke="#C6BDB6" stroke-width="2" fill="#C6BDB6" />
   <line x1="630" y1="344" x2="58" y2="344" stroke="#666666" stroke-width="4"/>
   <line x1="344" y1="630" x2="344" y2="58" stroke="#666666" stroke-width="4"/>
   Sorry, your browser does not support inline SVG.
</svg> 
  </div>);
}

export default App;
