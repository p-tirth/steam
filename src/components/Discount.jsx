import React from 'react'

export default function Discount() {
  return (
    <div className='flex'>
        <h1 className='px-3 flex items-center justify-center text-2xl font-bold text-lime-400 bg-lime-800'>
            -20%
        </h1>
        <div className='px-3 max-w-fit bg-red-900 text-lime-400'>
            <p><s>$1000</s></p>
            <p>$800</p>
        </div>
    </div>
  )
}
