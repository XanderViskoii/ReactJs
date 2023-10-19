import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15

  const addValue = () => {
    console.log("Clicked", counter);
    counter = counter + 1
    
  }

  return (
    <>
      <h1>Xander Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button type="submit" onClick={addValue}>Add value{counter}</button>
      <br />
      <br />
      <button type="submit">Remove value{counter}</button>
      <footer>footer : {counter}</footer>
    </>
  )
}

export default App
