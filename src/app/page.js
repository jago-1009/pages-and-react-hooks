'use client'
import Image from "next/image";
import react, {useState, useEffect, useRef, ref, sessionStorage} from 'react';
export default function Home() {

const [score, setScore] = useState(0)
const [name, setName] = useState('')
const nameRef = useRef();

useEffect(() => {
  setName('User')
}, [])
function nameSet(query) { 
  if (query) {
    setName(query)}
}
  function addtoScore() {
    setScore(score + 1)
    console.log(score)
  }
  
  return (
    <main>
      <h1>Welcome, {name}</h1>
      <h1>Home</h1>
      <div>
        <button onClick={addtoScore}>Add 1</button>
        <p>Score: {score}</p>
      </div>

      <form onSubmit={nameSet}>
      <input className="nameInput" type="text" ref={nameRef}/>
      <button type="button" onClick={nameSet()}>Set Name</button>
      </form>
    </main>
  );
}
