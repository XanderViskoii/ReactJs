import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0) //At 0th index we get counter(name doesn't matter) ,at 1st index we get a function 

  // let counter = 15

  const addValue = () => {
    // console.log("Clicked", counter);
    counter = counter + 1
    if(counter <= 20){
      setCounter(counter);
    }
    else{
      // counter = 20;
      console.log(`clicked`);
      reload()
    }
    
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    else{
      // setCounter(counter = 0)
      console.log(`Clicked`);
      reload()
    }
  }

  const reload = () => {
    setCounter(counter = 0 )
  }

  return (
    <>
      <h1>Xander Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button type="submit" onClick={addValue}>Add value{counter}</button>
      <br />
      <br />
      <button type="submit" onClick={removeValue}>Remove value{counter}</button>
      <button type="submit" onClick={reload}>Reload {counter}</button>
      <footer>footer : {counter}</footer>
    </>
  )
}

export default App
