import React, { useEffect } from 'react';

export default function App() {

  const handleSubmit = (content) => {
    window.localStorage.setItem("content", `${content}`)
  }

  useEffect(() => {
    window.alert(`content의 내용 : ${window.localStorage.getItem('content')}`)
  }, [])

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e.target.content.value)}>
        <input type='text' placeholder='로컬스토리지에 저장할 내용' name='content' />
        <input type='submit' value='저장' />
      </form>
    </>
  );
}
