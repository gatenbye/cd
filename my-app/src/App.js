import './App.css';

import Player from "./Player";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function calculateNumbers(numBig) {
  switch(numBig) {
  case 0:
    return [getRandomArbitrary(100, 1000), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)];
    break;
  case 1:
    return [getRandomArbitrary(100, 1000), (getRandomArbitrary(1, 5)) * 25, getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)];
    break;
  case 2:
    return [getRandomArbitrary(100, 1000), (getRandomArbitrary(1, 5)) * 25, (getRandomArbitrary(1, 5)) * 25, getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)];
    break;
  case 3:
    return [getRandomArbitrary(100, 1000), (getRandomArbitrary(1, 5)) * 25, (getRandomArbitrary(1, 5)) * 25, (getRandomArbitrary(1, 5)) * 25, getRandomArbitrary(1, 10), getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)]; 
    break;
  case 4:
    return [getRandomArbitrary(100, 1000), (getRandomArbitrary(1, 5)) * 25, (getRandomArbitrary(1, 5)) * 25, (getRandomArbitrary(1, 5)) * 25, (getRandomArbitrary(1, 5)) * 25, getRandomArbitrary(1, 10), getRandomArbitrary(1, 10)]; 
    break;
  default:
    // code block
}
}

function App() {
  return (
    <div>
    <Player
        text={'None from the top'}
        numbers={calculateNumbers(0)}
      /> 
    <Player
        text={'One from the top'}
        numbers={calculateNumbers(1)}
      /> 
    <Player
        text={'Two from the top'}
        numbers={calculateNumbers(2)}
      /> 
    <Player
        text={'Three from the top'}
        numbers={calculateNumbers(3)}
      /> 
    <Player
        text={'Four from the top'}
        numbers={calculateNumbers(4)}
      /> 
  </div>);
}

export default App;
