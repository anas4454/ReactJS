import { useState } from 'react'

function App() {

  // let counter = 10

  let [counter, setCounter] = useState(10)


  const addScore = () => {

    if (counter < 20) {
      setCounter(counter + 1)
    }
  }


  const removeScore = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h2>This is my ReactJS Hooks code</h2>
      <h4>Now your score is {counter}</h4>

      <button onClick={addScore}>Add Score {counter}</button>
      <br />
      <hr />
      <button onClick={removeScore}>Remove Score {counter}</button>
    </>
  )
}

export default App
