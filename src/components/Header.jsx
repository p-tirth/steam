import React, { useState } from 'react'

export default function Header() {
  const [menu,setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <div className='min-h-fit flex justify-center items-center p-2 '>
      <div className='absolute left-0 p-2 w-[50px] hover:cursor-pointer' onClick={toggleMenu}>
        <img src="https://store.akamai.steamstatic.com/public/shared/images/responsive/header_menu_hamburger.png" alt="" className='' />
        <div className={`${menu? 'translate-x-[-150%]' : 'translate-x-[0%]'} absolute z-20 left-0 ease-in-out duration-500`}>
          <div className='bg-[#171a21] w-[300px] divide-y h-screen divide-black '>
            <div className='w-full p-1 text-slate-300 text-2xl'>
              <h1 className='p-2'>Login</h1>
            </div>
            <div className=' flex justify-between items-center p-1 w-full text-slate-300 text-2xl'>
              <h1 className='p-2'>Store</h1>
              <h1>V</h1>
            </div>
            <div className='flex justify-between items-center p-1 w-full text-slate-300 text-2xl'>
              <h1 className='p-2 '>Community</h1>
              <h1>V</h1>
            </div>
            <div className='flex justify-between items-center p-1 w-full text-slate-300 text-2xl'>
              <h1 className='p-2'>Support</h1>
            </div>
            <div className='text-base text-gray-600'>
              <h1 className='p-2'>
                Change Language
              </h1>
              <h1 className='p-2'>
                View Desktop Website
              </h1>
            </div>
          </div>
        </div>
      </div>
      <img src="https://store.akamai.steamstatic.com/public/shared/images/responsive/header_logo.png" className='h-[1.8rem]' alt="" />
    </div>
  )
}
