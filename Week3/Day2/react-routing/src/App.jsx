import Home from "./components/Home"
import Cool from "./components/Cool"
import Hero from "./components/Hero"
import './App.css'
import { Route, Routes, Link } from "react-router-dom"

function App() {

  return (
    <fieldset>
      <legend>App.jsx</legend>
      {/* THEATER STAGE */}
      {/* nooooo anchor tag  */}
      {/* <a href="/home"> Home </a> */}
      <Link to="/home" >Home 🏡</Link>
      -----<Link to="/cool" >Cool 😎</Link>
      -----<Link to="/hero" >Hero 🦸‍♀️</Link>

      <Routes>
        {/* ACT I - HOME */}
        <Route path="/home" element={<Home />} />
        {/* ACT II - Cool 😎 */}
        <Route path="/cool" element={<Cool />} />
        {/* ACT III - Hero  */}
        <Route path="/hero/:Lyna" element={<Hero />} />
        <Route path="*" element={<h1>Page not Found</h1>} />

      </Routes>


    </fieldset>
  )
}

export default App
