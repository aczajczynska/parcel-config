import React, { useState } from 'react';
import roomPic from '../images/room.jpeg';
import anatomy from '../images/anatomy.png';
import statistics from '../images/statistics.svg';

const Typograpy: React.FC = ({ children, ...props }) => (
  <h2 {...props}>{children}</h2>
);

const App = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <Typograpy onClick={() => setState(!state)}>
        What is the state? : {state.toString()}
      </Typograpy>
      <img src={roomPic} alt='room' width='800' />
      <img src={anatomy} alt='human' />
      <img src={statistics} alt='statistics' width='500' />
    </div>
  );
};

export default App;
