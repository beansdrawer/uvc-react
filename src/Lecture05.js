import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(./cat.png);
  background-size: cover;
  border-radius: 50%;
`;
const ColoredCircle = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${props => props.bgColor};
  border-radius: 50%;
`;

export default function App() {

  return (
    <>
      <Circle />
      <ColoredCircle bgColor='red' />
    </>
  );
}
