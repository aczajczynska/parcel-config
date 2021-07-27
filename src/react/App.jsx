import React, { useState } from 'react';
import roomPic from '../images/room.jpeg';
import anatomy from '../images/anatomy.png';
import statistics from '../images/statistics.svg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  place-items: center;
  background-color: midnightblue;
  color: cornflowerblue;
  font-family: sans-serif;
  width: 900px;
  padding: 40px;

  h2 {
    font-size: 64px;
  }

  a {
    font-size: 28px;
    color: aliceblue;
  }
`;

const App = () => {
  const [state, setState] = useState(false);

  return (
    <Container>
      <h2 onClick={() => setState(!state)}>
        What is the state? : {state.toString()}
      </h2>
      <a href='/index.html'>Home</a>
      <a href='/vue.html'>Go to the Vue app</a>
      <img src={roomPic} alt='room' width='800' />
      <img src={anatomy} alt='human' width='50' height='50' />
      <img src={statistics} alt='statistics' width='500' />
    </Container>
  );
};

export default App;
