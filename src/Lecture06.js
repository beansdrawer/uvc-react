import React, { useState } from 'react';

export default function App() {
  const [nation, setNation] = useState('')
  const [foodList] = useState([
    { nation: '한국', food: '제육볶음' },
    { nation: '일본', food: '가라아게' },
    { nation: '한국', food: '순대국밥' },
    { nation: '일본', food: '야끼소바' },
    { nation: '한국', food: '김치찌개' },
    { nation: '미국', food: '햄버거' },
  ]);

  return (
    <>
    <button onClick={() => setNation('')}>모두</button>
    <button onClick={() => setNation('한국')}>한식</button>
    <button onClick={() => setNation('미국')}>양식</button>
    <button onClick={() => setNation('일본')}>일식</button>
    {nation === '' ? 
      <ul>
        {foodList.map((item, index) => <li key={index}>{item.food}</li>)}
      </ul> 
      :
      <ul>
        {foodList.filter((item) => item.nation === nation).map((item, index) => <li key={index}>{item.food}</li>)}
      </ul> 
    } 
    </>
  );
}
