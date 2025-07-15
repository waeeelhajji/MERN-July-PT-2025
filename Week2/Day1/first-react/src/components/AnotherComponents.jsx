import React from 'react'

const AnotherComponents = (props) => {
    console.log(props.x)
    const nexAnimal = props.x
    const newMessage = props.message
  return (
    <fieldset>
        <legend>AnotherComponents.jsx</legend>
      <h1>Hello from the other Side</h1>
      <h4>my Animals : {nexAnimal}</h4>
      new Message : {newMessage}
    </fieldset>
  )
}

export default AnotherComponents
