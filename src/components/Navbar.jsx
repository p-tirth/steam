import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-slate-500 '>
      <div className='md:flex md:bg-blue-200 md:justify-between md:w-[80%] md:min-w-fit md:absolute top-20 md:left-[50%] md:translate-x-[-50%]'>
        <div className='md:flex md:justfy-center md:items-center'>
          <h1 className='text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>Your Store </h1>
          <h1 className='text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>New & Noteworthy</h1>
          <h1 className='text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>Categories</h1>
          <h1 className='text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>Points Shop</h1>
          <h1 className='text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>News</h1>
          <h1 className='text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>Labs</h1>
        </div>
        <div className='flex justify-center'>
          <input type="text" placeholder='Search' className='w-full p-1 m-1 rounded-md placeholder:text-slate-800' />
          <button className='absolute right-[10px]'>
            {/* <img src="https://picsum.photos/20/20" alt="" className='' /> */}
          </button>
        </div>
      </div>
      <div className='rounded-md '>
        <img src="https://picsum.photos/1200/450" alt="" className='w-full' />
      </div>
    </div>
  )
}