import React from 'react'
import { data } from '../assets/mockData'
import FeatureScroll from './FeatureScroll'

export default function Featured() {

  return (
    <div className='py-4  md:max-w-2xl'>
      <h1 className='px-1 text-slate-100'>FEATURED & RECOMMENDED</h1>
      <div className='flex items-center'>
        {/* slider code */}
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {data.map((item) => (
            <div key={item.id} className='w-[90%] max-w-lgurl inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300
              md:max-w-xl'>
              <img
                className='aspect-video'
                src={item.img}
                alt='/'
              />
              <div className='w-full bg-slate-500'>
                <h1 className='p-1 text-slate-200 text-xl font-bold'>{item.game}</h1>
                <h1 className='p-1 text-slate-200 '>{item.price}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
