import React from "react"

function Footer() {
  return (
    <>
      <div className='px-6 py-[100px] bg-[#040910] text-white flex justify-between items-start'>
        <div></div>
        <div>
          <h2 className="">DESTINATION</h2>
          <ul>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
        <div>
          <h2>ABOUT</h2>
          <ul className="">
            <li>Our Testimonial</li>
            <li>Our Procedure</li>
            <li>Be a memeber</li>
          </ul>
        </div>
        <div>
          <h2>DEBITED?</h2>
          <button className='bg-white text-[#010910] font-bold'>
            REPORT NOW!!
          </button>
        </div>
      </div>
      <div className='text-sm bg-[#ffffff] p-2 text-center font-bold text-[#040910]'>
        Copyright FinRose 2022{" "}
      </div>
    </>
  )
}

export default Footer
