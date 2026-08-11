// import { useState } from 'react'
import useToggle from './hooks/useToggle'
import './App.css'

function App() {
  const { value, setTrue, setFalse, toggle } = useToggle(false)

  return (
    <div>
      <h2>Status : {value ? "on" : "off"}</h2>
      <button onClick={toggle}>
        Toggle
      </button>
      <button onClick={setTrue}>
        On
      </button>
      <button onClick={setFalse}>
        Off
      </button>

    </div>

  )
}

export default App
