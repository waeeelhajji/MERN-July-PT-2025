import React, { useState } from 'react'

const Ninja = () => {

  const [newAnimal, useNewAnimal] = useState("")
  const [zoo, useZoo] = useState(['🦁', '🦒', '🦓', '🐊'])

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(zoo)
    useZoo([...zoo, newAnimal])
  }






  return (
    <fieldset>
      <legend>Ninja.jsx</legend>
      {JSON.stringify(zoo)} <br />
      {JSON.stringify(newAnimal)} <br />
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={(e) => useNewAnimal(e.target.value)} />
        <button>Submit</button>
      </form>
    </fieldset>
  )
}

export default Ninja
