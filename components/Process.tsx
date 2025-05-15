import React from 'react'
import ProcessFlow from './ProcessFlow'

const Process = () => {
  return (
    <div className=' w-full px-4 md:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32'>
        <div className=' flex flex-col space-y-3 justify-center items-center mb-10'>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-snug text-black text-center">Manufacturing Process of <span className=' text-primary italic'> PMB </span> Emulsion</h1>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 max-w-xl text-center">PMB Emulsion is mixture of Polymer Modified Bitumen & Soap Solution which is specially design for micro surfacing</p>
        </div>
        <ProcessFlow/>
    </div>
  )
}

export default Process