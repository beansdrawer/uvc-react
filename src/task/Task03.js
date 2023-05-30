import React from 'react';
import styled from 'styled-components';

const Eyes = styled.div`
  display: flex;
  justify-content: center;
`;
const Eye = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;
`;
const Ball = styled.div`
`

export default function Task() {

  return (
    <>
    <Eyes>
      <Eye>
        <Ball />
      </Eye>
      <Eye>
        <Ball />
      </Eye>
    </Eyes>
    </>
  );
}
