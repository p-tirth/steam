import React from 'react'

export default function Browse() {
  return (
    <div className='w-full'>
        <div className='text-slate-100 mb-5'>BROWSE STEAM</div>
        <div className='flex justify-evenly items-center flex-wrap mb-10'>
            <div className='w-[10rem] m-2 text-center rounded-md py-3 text-slate-100 bg-gradient-to-r from-blue-300 to-blue-700'>NEW RELEASE</div>
            <div className='w-[10rem] m-2 text-center rounded-md py-3 text-slate-100 bg-gradient-to-r from-blue-300 to-blue-700'>SPECIALS</div>
            <div className='w-[10rem] m-2 text-center rounded-md py-3 text-slate-100 bg-gradient-to-r from-blue-300 to-blue-700'>FREE GAMES</div>
            <div className='w-[10rem] m-2 text-center rounded-md py-3 text-slate-100 bg-gradient-to-r from-blue-300 to-blue-700'>BY USER TAGS</div>
        </div>
    </div>
  )
}
