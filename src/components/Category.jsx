import React from 'react'
import { data } from '../assets/mockData'

export default function Offer() {
  return (
    <div className='py-4 md:max-w-2xl'>
      <h1 className='px-1 text-slate-100'>BROWSE BY CATEGORY</h1>
      <div className=''>
        {/* slider code */}
        <div
          id='slider'
          className='overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {data.map((item) => (
            <div key={item.id}
              className='w-[65%] aspect-square inline-block m-2 cursor-pointer hover:scale-105 ease-in-out duration-300
                md:max-w-[33%]'>
              <img src={item.img} alt="" />
              <div className='relative bottom-8 w-full text-center'>
                <h1 className='p-1 text-slate-200 text-xl font-bold mb-6 md:text-base'>{item.category}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
