import React, { useState } from "react";



const Player = ({numbers}) => {
  return (
        <div>
        <h1 className="digital-clock-font">{numbers[0]}</h1> 
        <br/>
        <h1>{numbers[1]}</h1> 
        <h1>{numbers[2]}</h1> 
        <h1>{numbers[3]}</h1> 
        <h1>{numbers[4]}</h1> 
        <h1>{numbers[5]}</h1>
        <h1>{numbers[6]}</h1>
 
        </div>
  );
};

export default Player;