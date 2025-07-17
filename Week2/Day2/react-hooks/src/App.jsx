import { useState } from 'react'
import Ninja from './components/Ninja';
import './App.css'

function App() {
  const x = 3;
  const messagee = ""; //? VDOM
  const input = "wael" //! DOM 

  //? CREATE STATE FOR THIS COMPONENT
  //!      State
  //!       !  Change state
  //!      V      V            default state
  const [message, useMessage] = useState("")


  const animals = ['🦁', '🦒', '🦓', '🐊'];

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  };

  return (
    <fieldset>
      <legend>App.jsx</legend>
      {/* <button onClick={() => alert("onClick Event!")}> Click to alert! </button>
      <input onChange={(e) => console.log(e.target.value)} /> */}
      <Ninja />

    </fieldset>
  )
}

export default App
