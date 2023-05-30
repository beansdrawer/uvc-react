import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  const handleChange = (param) => {
    setText(param);
  }

  return (
    <>
      <input type='text' placeholder='아무 내용이나 써보기' onChange={e => handleChange(e.target.value)}/>
      <p>{text}</p>
    </>
  );
}
