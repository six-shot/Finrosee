import React from "react"
import Video from "../Videos/Load.mp4"

function Loader() {
  return (
    <div className="relative h-[100vh] text-white ">
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <video
            className='min-h-full min-w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover'
            autoPlay
            loop
            muted
            type='video/mp4'
          >
            <source src={Video} />
          </video>
        </div>
        </div>
  )
}

export default Loader
