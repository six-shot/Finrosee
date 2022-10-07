import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Counter from './components/Counter'
import About from './components/About'

function App() {
  const [loader, setLoader] = useState(true)
  useEffect(()=>{
     setTimeout(()=>{
       setLoader(false)
     },2000)
  },[])
  return loader ? (
    <Loader/>
  ):
  (
    <div>
      
     <Hero/>
     <Counter/>
     <About/>

     
    </div>
  )
}

export default App

