import React, { useState } from 'react';

export default function Task() {
  const [images, setImages] =  useState([])

  return (
    <>
      <input type="button" value="이미지 가져오기" />
      <br />
    </>
  );
}
