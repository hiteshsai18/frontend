import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import Navbar from './Navbar'

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product/:mobiles/:version" element={<Products/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App