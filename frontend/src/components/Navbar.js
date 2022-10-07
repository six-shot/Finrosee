import React, { useState } from "react"

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = ()=>{
    if(window.scrollY >= 70){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBackground)
  return (
    <>
      
      <nav className={navbar ? 'sticky top-0 z-[999]  py-0 mt-10  border-[1px] rounded-t-[25px] text-lg h-[70px]  font-semibold mr-1 ml-6 active':' z-[999] sticky top-0  py-0 mt-10 border-[1px] rounded-t-[25px] text-lg h-[70px]  font-semibold mr-1 ml-6'}>
        <ul className="px-10 py-3  flex justify-between items-center w-[94vw] text-white">
          <li>FinRose</li>
          <li>
            <ul  className="flex justify-between uppercase">
              <li className="mr-8">
                Home
              </li>
              <li className="mr-8">
                Services
              </li>
              <li className="mr-8">
               Contact 
              </li>
              <li className="mr-8">
               Support
              </li>
            </ul>
          </li>
        <button className="uppercase">Get Started</button>
          
        </ul>
      </nav>
      
    </>
  )
}

export default Navbar
