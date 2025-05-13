import React from 'react'
import ProcessFlow from './ProcessFlow'

const Process = () => {
  return (
    <div className=' w-full px-4 md:px-6 lg:px-8 py-10'>
        <div className=' flex flex-col space-y-3 justify-center items-center'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug text-black text-center">Manufacturing Process of <span className=' text-primary italic'> PMB </span> Emulsion</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl text-center">PMB Emulsion is mixture of Polymer Modified Bitumen & Soap Solution which is specially design for micro surfacing</p>
        </div>
        <ProcessFlow/>
    </div>
  )
}

export default Process