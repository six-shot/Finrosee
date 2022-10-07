import React, { useState } from "react"
import Typewriter from "typewriter-effect"

function Type() {
  return (
    <>
      <div className='w-[300px]'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Have you try withdrwing from a POS and then got debited without getting yor cash?? I know how that might have made you feel and the though of you going to the bank to queue just to get a refund from a rude customer care agent FINROSE GAT YOU!!"
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString("FINROSE is a Fintech Company that provides a bridge between customers and their banks or money we help ease all the stress by provding services directly with your bank and help you resolve whatever issue in hours and guarantee your money back in seconds ")
              .start()
          }}
        />
      </div>
    </>
  )
}

export default Type
