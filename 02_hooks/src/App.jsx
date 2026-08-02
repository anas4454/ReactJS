// import { useState } from 'react'

import Card from "./card"

// function App() {

//   // let counter = 10

//   let [counter, setCounter] = useState(10)


//   const addScore = () => {

//     if (counter < 20) {
//       setCounter(counter + 1)
//     }
//   }


//   const removeScore = () => {
//     if (counter > 0) {
//       setCounter(counter - 1)
//     }
//   }

//   return (
//     <>
//       <h2>This is my ReactJS Hooks code</h2>
//       <h4>Now your score is {counter}</h4>

//       <button onClick={addScore}>Add Score {counter}</button>
//       <br />
//       <hr />
//       <button onClick={removeScore}>Remove Score {counter}</button>
//     </>
//   )
// }

// export default App


// function App() {
//   return (
//      <div className="min-h-screen flex items-center justify-center bg-slate-900">
//       <h1 className="text-green-700 font-bold text-4xl">
//         Tailwind CSS is Working!
//       </h1>
//     </div>
//   )
// }


function App(){
  return(
    <div className="bg-gray-900 flex justify-center align-center min-h-screen">
    <Card nombre="Anas" button="learn more" image="https://images.pexels.com/photos/35956956/pexels-photo-35956956.jpeg"/>
    <Card nombre="Ali" button="Read more" image="https://images.pexels.com/photos/27815027/pexels-photo-27815027.jpeg"/>
    <Card nombre="Ahmad"/>
    </div>
  )
}

export default App