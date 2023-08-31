import React from 'react'
import { data } from '../assets/mockData'
import Discount from './Discount'
export default function Offer() {

  return (
    <div className='py-4 md:max-w-2xl'>
      <h1 className='px-1 text-slate-100'>SPECIAL OFFER</h1>
      <div className='flex items-center'>
        {/* slider code */}
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {data.map((item) => (
            <div key={item.id} className='w-[90%] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300
              md:w-[30%]'>
              <img
                className='aspect-square'
                src={item.img}
                alt='/'
              />
              <div className='w-full flex flex-col justify-around items-start px-5 pb-5 bg-slate-500'>
                <h1 className='p-1 text-slate-200 text-xl font-bold'>MIDWEEK DEAL</h1>
                <h1 className='p-1 text-slate-200 text-sm '>Offer ends 4 Sep @ 10:30 pm.</h1>
                <Discount/>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
