import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [color , setColor] = useState("olive");

  return (
    <div className='h-screen flex justify-center pt-8 ' style={{backgroundColor: color}}> 
     <div className='w-3xl flex justify-center items-center bg-teal-500 h-12 rounded-4xl'>
      <button onClick={() => setColor("red")} className=' p-2 ml-8 rounded-2xl bg-red-700'>
        Red
      </button>
       <button onClick={()=> setColor("green")} className='border-2 border-green-900 p-2 ml-4 rounded-2xl bg-green-700'>
        Green
      </button>
       <button onClick={() => setColor("yellow")} className="p-2 ml-4 rounded-2xl bg-yellow-300">
        Yellow
      </button>
       <button onClick={()=>setColor("blue")} className=' p-2 ml-4 rounded-2xl bg-blue-700'>
        Blue
      </button>
       <button onClick={()=>setColor("pink")} className=' p-2 ml-4 rounded-2xl bg-pink-200'>
        pink
      </button>
       <button onClick={()=>setColor("brown")} className=' p-2 ml-4 rounded-2xl text-white bg-red-950'>
        Brown
      </button>
       <button onClick={()=>setColor("violet")} className=' p-2 ml-4 rounded-2xl  text-white bg-violet-400'>
        Violet
      </button>
       <button onClick={()=>setColor("grey")} className=' p-2 ml-4 rounded-2xl  text-white bg-gray-700'>
        Grey
      </button> 
      <button onClick={()=>setColor("black")} className=' p-2 ml-4 rounded-2xl  text-white bg-black'>
        Black
      </button>
      <button onClick={()=>setColor("gold")} className=' p-2 ml-4 mr-6 rounded-2xl  text-white bg-yellow-700'>
        Golden
      </button>
      
      
     </div>
    </div>
  )
}

export default App
