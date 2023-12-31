import React, { useState } from "react";
import muteIcon from './volume_mute_icon.png';
import up from './volume_up_icon.png'

const useTimer = () => {
  const [degrees, setDegrees] = useState(0);
  var interval = null;
  var elapsed = 0;
  function secondTick(argument) {
    elapsed += 1000;
    if(elapsed == 30000) {
      setDegrees((elapsed / 1000) * 6);
      clearInterval(interval);
    } else {
      setDegrees((elapsed / 1000) * 6);
    }
  }

  const toggle = function(degrees) {
    setDegrees(degrees);
    interval = setInterval(secondTick, 1000);
  }

  return [degrees, toggle];
}
function drawCoord(degrees) {
  let radius = 286;
  let radians = (degrees * Math.PI) / 180;
  let offset = 58;
  let rX = radius + offset + Math.sin(radians) * radius;
  let rY = radius + offset - Math.cos(radians) * radius;
  let dir = degrees > 180 ? 1 : 0;
  // prettier-ignore
  let coord = `M${radius + offset},${radius + offset} L${radius + offset},${offset} A${radius},${radius} 0 ${dir},1 ${rX},${rY}`
  return coord;
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


const Player = ({numbers, noFromTop, goBack}) => {
  const [degrees, setDegrees] = useTimer();
  const [playing, toggle] = useAudio();
  const [muted, mute] = useState(false);

  function start() {
    setDegrees(0);
    toggle(1);
  }

  return (
        <div>
        {!muted ? <div className="mute" onClick={() => mute(true)}><img src={up} alt="Logo" /></div>
        : <div className="mute" onClick={() => mute(false)}><img src={muteIcon} alt="Logo" /></div>}
        <button onClick={() => goBack()}>Back</button>
        <button onClick={() => start()}>Start</button>
        <br/>
        <h1 className="digital-clock-font">{numbers[0]}</h1> 
        <br/>
        <div className="headers">
        <h1>{numbers[1]}</h1> <span>&nbsp;&nbsp;&nbsp;</span>
        <h1>{numbers[2]}</h1> <span>&nbsp;&nbsp;&nbsp;</span>
        <h1>{numbers[3]}</h1> <span>&nbsp;&nbsp;&nbsp;</span>
        <h1>{numbers[4]}</h1> <span>&nbsp;&nbsp;&nbsp;</span>
        <h1>{numbers[5]}</h1> <span>&nbsp;&nbsp;&nbsp;</span>
        <h1>{numbers[6]}</h1> <span>&nbsp;&nbsp;&nbsp;</span>
        </div>
        <svg width="695" height="695">
           <circle cx="344" cy="344" r="317" stroke="#666666" stroke-width="10" fill="#FFFFFF">
           </circle>
           <circle cx="344" cy="344" r="311" stroke="#524E4D" stroke-width="4" fill="#FFFFFF">
           </circle>
           <circle cx="344" cy="344" r="300" stroke="#666666" stroke-width="20" fill="#FFFFFF">
           </circle>
           <circle cx="344" cy="344" r="294" stroke="#232F7A" stroke-width="16" fill="#B6B3AC">
           </circle>
           <path d={drawCoord(degrees)} fill="#E5DCD3" />
           
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
        </div>
  );
};

export default Player;