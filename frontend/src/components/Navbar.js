import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import Logo from "../assets/Logo.svg"
import menu from "../assets/menu.svg"
import { navLinks } from "../data/data"

function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const showSidebar = () => setNavbar(!navbar)
  return (
    <div>
      <div className=' relative flex-col  sm:flex-row flex justify-between items-center px-4 sm:px-16 mb-[50px] '>
        <div className='bg-gradient absolute w-[80%] h-[20vh] rotate-[-10deg]  -right-[6rem] top-[60px] z-[-10]' />

        <div className='flex justify-between items-center w-[100%] gap-[74px] '>
          <div className='w-[100px]  sm:h-full sm:w-full'>
            <img src={Logo} alt='' />
          </div>
          <div className='sm:hidden '>
            <img src={menu} className="w-[23px]" onClick={showSidebar} alt='' />
          </div>
          <nav className='hidden sm:flex  items-center '>
            <ul className='sm:flex sm:flex-row gap-[74px] '>
              {navLinks.map((items) => {
                return (
                  <li key={items.id}>
                    <h4 className='text-white font-circular text-[16px] '>
                      {items.title}
                    </h4>
                  </li>
                )
              })}
            </ul>
          </nav>
          <button className='sm:flex hidden bg-white px-[21px] py-[9px] rounded-[12.6px] '>
            Download
          </button>
        </div>

        <div className=' sm:flex  '>
     
          <nav className={navbar ? " nav-menu active" : " nav-menu"}>
          <div className='bg-gradient absolute w-[80%] h-[20vh] rotate-[-10deg]  -right-[6rem] top-0 z-[-10]' />
          <div className='bg-gradient absolute w-[80%] h-[20vh] rotate-[-10deg]  -right-[6rem] bottom-0 z-[10]' />

            <ul
              className='block sm:flex sm:flex-row gap-[74px] '
              onClick={showSidebar}
            >
              <li className="flex justify-end ">
                <AiOutlineClose className="text-white mt-10 text-[23px] " />
              </li>
              {navLinks.map((items) => {
                return (
                  <li key={items.id}>
                    <h4 className='text-white font-circular text-[16px] nav-items uppercase '>
                      {items.title}
                    </h4>
                  </li>
                )
              })}
              <li className="text-white"> <h4 className='text-white font-circular text-[16px] nav-items uppercase '>
                Download
                    </h4></li>
            </ul>

          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
