import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (

    <UserContextProvider>
   <h1 className='text-4xl , text-green-900'>This is our Context API Project</h1>
   <Login />
   <br />
   <br />
   <Profile />

   
    </UserContextProvider>
  )
  
}

export default App
