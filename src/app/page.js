'use client'
import Image from "next/image";
import react, {useState, useEffect, useRef, ref, sessionStorage} from 'react';
export default function Home() {
const [score, setScore] = useState(0)
  function addtoScore() {
    setScore(score + 1)
    console.log(score)
  }

  function doubleScore() {
    addtoScore()
  }
  return (
    <main>
      <h1>Home</h1>
      <div>
        <button onClick={addtoScore}>Add 1</button>
        <button onClick={doubleScore}>Add 2</button>
        <p>Score: {score}</p>
      </div>
    </main>
  );
}
