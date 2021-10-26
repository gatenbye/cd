import React, { useState } from "react";

const useAudio = () => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  return [playing, toggle];
};

const Player = ({ text, numbers }) => {
  const [playing, toggle] = useAudio();

  return (
    <div>
      {playing ? 
        <div>
        <h2 className="digital-clock-font">{numbers[0]}</h2> 
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