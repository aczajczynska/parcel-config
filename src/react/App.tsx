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

const Typograpy: React.FC = ({ children, ...props }) => (
  <h2 {...props}>{children}</h2>
);

const App = () => {
  const [state, setState] = useState(false);

  return (
    <Container>
      <Typograpy onClick={() => setState(!state)}>
        What is the state? : {state.toString()}
      </Typograpy>
      <a href='/index.html'>Home</a>
      <a href='/vue.html'>Go to React app</a>
      <a href='/svelte.html'>Go to Svelte app</a>
      <img src={roomPic} alt='room' width='800' />
      <img src={anatomy} alt='human' />
      <img src={statistics} alt='statistics' width='500' />
    </Container>
  );
};

export default App;
