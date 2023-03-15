import React, { useState } from "react"
import Countup from "react-countup"
import ScrollTriger from "react-scroll-trigger"

function Counter() {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <>
      <ScrollTriger className="bg-[#040910] text-white"
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className=' ml-6 flex w-[94vw] justify-between py-[60px] px-[20px] '>
          <div>
            <h3 className="text-3xl">
              {counterOn && (
                <Countup start={0} end={100} duration={2} delay={0} />
              )}
              +
            </h3>
            <p className="text-xl">Banks Affliation</p>
          </div>
          <div>
            <h3 className="text-3xl">
              {counterOn && (
                <Countup start={0} end={87} duration={2} delay={0} />
              )}
              %
            </h3>
            <p className="text-xl">Sucess Rate</p>
          </div>
          <div>
            <h3 className="text-3xl">
              {counterOn && (
                <Countup start={2020} end={2022} duration={2} delay={0} />
              )}
              +
            </h3>
            Up Till Date
          </div>
          <div>
            <h3 className="text-3xl">
              {counterOn && (
                <Countup start={0} end={100} duration={2} delay={0} />
              )}
              %
            </h3>
            <p className="text-xl">Cash Back Guaranteed</p>
          </div>
          
         
        </div>
      </ScrollTriger>
    </>
  )
}

export default Counter
