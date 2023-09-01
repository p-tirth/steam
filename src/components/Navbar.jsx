import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
      <div className='md:flex md:bg-gradient-to-r from-[#3a6497] to-[#0e206d] md:justify-between md:w-[80%] md:min-w-fit md:absolute top-20 md:left-[50%] md:translate-x-[-50%]'>
        <div className='md:flex md:justfy-center md:items-center'>
          <div className='relative group text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>
            <h1>Your store</h1>
            <div className='invisible m-1 p-1 bg-gradient-to-br from-slate-400 to-slate-800 absolute md:group-hover:visible'>
              <h1>Home</h1>
              <h1>Followed games </h1>
              <h1>Option</h1>
            </div>
          </div>
          <div className='relative group text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>
            <h1>New & Noteworthy</h1>
            <div className='invisible  m-1 p-1 opacity-100 bg-gradient-to-br from-slate-400 to-slate-800 absolute md:group-hover:visible'>
              <h1>Steam Replay</h1>
              <h1>Top Sellers</h1>
              <h1>Most Played</h1>
              <h1>New and Trending</h1>
              <h1>Special & Offers</h1>
              <h1>Recently Updating</h1>
              <h1>Popular upcomming</h1>
            </div>
          </div>
          <div className='relative group text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>
            <h1>Categories</h1>
            <div className='invisible  m-1 p-1 bg-gradient-to-br from-slate-400 to-slate-800 absolute md:group-hover:visible'>
              <h1>Option</h1>
              <h1>Option</h1>
              <h1>Option</h1>
            </div>
          </div>
          <div className='relative group text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>
            <h1>Points Shop</h1>
            <div className='invisible m-1 p-1  bg-gradient-to-br from-slate-400 to-slate-800  absolute md:group-hover:visible'>
              <h1>Option</h1>
              <h1>Option</h1>
              <h1>Option</h1>
            </div>
          </div>
          <div className='relative group text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>
            <h1>News</h1>
            <div className='invisible bg-gradient-to-br from-slate-400 to-slate-800  absolute md:group-hover:visible'>
              <h1>Option</h1>
              <h1>Option</h1>
              <h1>Option</h1>
            </div>
          </div>
          <div className='relative group text-lg font-medium text-slate-100 p-1 md:text-[0.6rem] md:px-3 md:font-bold'>
            <h1>Labs</h1>
            <div className='invisible bg-gradient-to-br from-slate-400 to-slate-800  absolute md:group-hover:visible'>
              <h1>Option</h1>
              <h1>Option</h1>
              <h1>Option</h1>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <input type="text" placeholder='Search' className='w-full p-1 m-1 rounded-md md:bg-[#316282] placeholder:text-slate-800' />
          <button className='absolute right-[10px]'>
            {/* <img src="https://picsum.photos/20/20" alt="" className='' /> */}
          </button>
        </div>
      </div>
      <div className=''>
        <img src="https://picsum.photos/1200/350" alt="" className='aspect-video md:w-[100%] md:aspect-auto' />
      </div>
    </div>
  )
}
