import React, { useState } from 'react';

function Box(){
  return <div style={{
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200
  }}>Styled Box</div>
}

export default function Task() {
  const [color, setColor] = useState('');

  return (
    <>
      <input type='text' placeholder='색상 정보를 입력하세요' />
      <Box />
    </>
  );
}
