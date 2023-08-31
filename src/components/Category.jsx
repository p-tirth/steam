import React from 'react'
import { data } from '../assets/mockData'

export default function Offer() {
    // const imgStyle =`bg-[url(${item.img})] w-[75%] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300`
  return (
    <div className='py-4 md:max-w-2xl'>
      <h1 className='px-1 text-slate-100'>BROWSE BY CATEGORY</h1>
      <div className='flex items-center'>
        {/* slider code */}
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {data.map((item) => (
            <div key={item.id} 
                 className='w-[65%] aspect-square inline-block m-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                 style={{ backgroundImage: `url(${item.img})` }}>
              <div className='w-[100%] h-[100%] flex justify-center items-end'>
                <h1 className='p-1  text-slate-200 text-xl font-bold mb-6'>{item.category}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
