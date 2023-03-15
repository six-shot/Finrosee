import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Counter from './components/Counter'
import About from './components/About'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {
  const [loader, setLoader] = useState(true)
  useEffect(()=>{
     setTimeout(()=>{
       setLoader(false)
     },3000)
  },[])
  return loader ? (
    <Loader/>
  ):
  (
    <div className='overflow-hidden'>
   
     <Hero/>
     <Counter/>
     <About/>
     <Banner/>
     <Footer/>

     
    </div>
  )
}

export default App

