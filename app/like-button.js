'use client';

import { useState } from 'react';

export default function GoodButton() {
 function handleClick() {
  setLikes(likes + 1);
 }
 
 const [likes, setLikes] = useState(0);

 return (
  <button onClick={handleClick}>いいね！({likes})</button>
 )
}