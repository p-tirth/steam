import React from 'react'

export default function Header() {
  return (
    <div className='min-h-fit flex justify-center items-center p-2 bg-[#181a21]'>
      <img src="https://store.akamai.steamstatic.com/public/shared/images/responsive/header_menu_hamburger.png" alt="" className='absolute left-0 p-2 w-[50px]' />
      <img src="https://store.akamai.steamstatic.com/public/shared/images/responsive/header_logo.png" className='h-[1.8rem]' alt="" />
    </div>
  )
}
