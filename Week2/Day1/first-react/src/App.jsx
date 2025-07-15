import './App.css'
import AnotherComponents from './components/AnotherComponents';


function App() {
  const x = 3
  const message = "hello"
  const animals = ['🦁', '🦒', '🦓', '🐊'];
  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  }




  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h1>Hello JS Dev</h1>
      <h2>Hello from App.jsx</h2>

      <p>{x}</p>
      {message} <br />
      {JSON.stringify(animals)}
      {JSON.stringify(person)} <br />
      <AnotherComponents x={animals} message={message}/>


    </fieldset>
  )
}

export default App
