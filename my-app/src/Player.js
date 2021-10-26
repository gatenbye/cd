import React, { useState, useEffect } from "react";

const useAudio = () => {
  const [playing, setPlaying] = useState(false);

  function stopTimer() {
    setPlaying(false);
  }

  const toggle = function() {
    setPlaying(true);
    setInterval(stopTimer, 30000);
  } 

  return [playing, toggle];
};

const Player = ({ text, numbers }) => {
  const [playing, toggle] = useAudio();

  return (
    <div>
      {playing ? 
        <div>
        <h1 className="digital-clock-font">{numbers[0]}</h1> 
        <h1>{numbers[1]}</h1> 
        <h1>{numbers[2]}</h1> 
        <h1>{numbers[3]}</h1> 
        <h1>{numbers[4]}</h1> 
        <h1>{numbers[5]}</h1>
        <h1>{numbers[6]}</h1>
        </div>
        : <button onClick={toggle}>{text}</button>}
    </div>
  );
};

export default Player;