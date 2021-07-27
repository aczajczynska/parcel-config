import React, { useState } from 'react';
import roomPic from '../images/room.jpeg';
import anatomy from '../images/anatomy.png';
import statistics from '../images/statistics.svg';

const App = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <h2 onClick={() => setState(!state)}>
        What is the state? : {state.toString()}
      </h2>
      <img src={roomPic} alt='room' width='800' />
      <img src={anatomy} alt='human' />
      <img src={statistics} alt='statistics' width='500' />
    </div>
  );
};

export default App;
