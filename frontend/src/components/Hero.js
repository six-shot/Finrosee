import React from "react"
import BG from "../Videos/video.mp4"
import Navbar from "./Navbar"
import Type from "./Type"


function Loader() {
  return (
    <>
      <div className='relative  h-[100vh] text-white '>
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden bg-black'>
          <video
            className='min-h-full min-w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover'
            autoPlay
            loop
            muted
            type='video/mp4'
          >
            <source src={BG} />
          </video>
        </div>
        <div className='absolute z-10'>
          <Navbar />
          <div className='ml-6 flex flex-col justify-center items-start mt-[120px] '>
            <h1 className='text-[4rem] leading-[4rem] uppercase'>
              Been Debited <br></br> for no reason
            </h1>
            <p className='tracking-[0.3rem]'>
              GET YOUR MONEY BACK ALL IN ONE TAP <br></br>WITHOUT STRESSING TO
              LEAVE YOUR HOUSE TODAY
            </p>
            <button className='bg-transparent border rounded-lg mt-2'>
              GET STARTED
            </button>
          </div>
          <div className="flex justify-between">
            <div className='ml-6 mt-14'>
              <h3 className='text-[2rem]'>OUR OFFICIAL PATNERS</h3>
              <div className='flex '>
                <h3 className='mr-4 border-r py-3 px-2'>OPAY</h3>
                <h3 className='mr-4 border-r py-3 px-2'>MONEI POINT</h3>
                <h3 className='mr-4 border-r py-3 px-2'>ZENITH BANK</h3>
                <h3 className='mr-4 border-r py-3 px-2'>UBA</h3>
              </div>
            </div>
            <div>
              <Type/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader
