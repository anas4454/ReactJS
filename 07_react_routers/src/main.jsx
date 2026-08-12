import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './components/Home'
import Layout from './layout'
import About from './components/About'
import Contact from './components/contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='user/:userid' element={<user />} /> */}
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  
  
  
  <StrictMode>
    <RouterProvider router={router} />
     
  </StrictMode>,
)
