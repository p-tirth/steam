import React from 'react'

export default function SideNav() {
  return (
    <div className='relative right-14 top-10 flex  items-start flex-col bg-gray-800'>
        <div className=''>
            <img src="https://store.akamai.steamstatic.com/public/images//gift/steamcards_promo_03.png?v=1" alt="" className='min-w-[178px] max-h-[65px]' />
            <h1 className='text-blue-300'>STEAM GIFT CARDS</h1>
            <h1 className='text-gray-400'>Give the Gift of Game</h1>
        </div>
        <div>
            <h1 className='text-cyan-600 text-sm'>RECENTLY PLAYED</h1>
            <h1 className='text-gray-400'>Brawlhala</h1>
            <h1 className='text-gray-400'>Valorant</h1>
        </div>
        <div>
          <h1 className='text-cyan-600 text-sm'>YOUR TAGS</h1>
          <h1 className='text-gray-400'>Hero shooter</h1>
          <h1 className='text-gray-400'>Local co-op</h1>
          <h1 className='text-gray-400'>Class-Based</h1>
          <h1 className='text-gray-400'>Online Co-Op</h1>
          <h1 className='text-gray-400'>team-Based</h1>
        </div>
        <div>
          <h1 className='text-cyan-600 text-sm'>RECOMMENDED</h1>
          <h1 className='text-gray-400'>By Friends</h1>
          <h1 className='text-gray-400'>By Curators</h1>
          <h1 className='text-gray-400'>Tags</h1>
        </div>
        <div>
          <h1 className='text-cyan-600 text-sm'>BROWSE CATEGORIES</h1>
          <h1 className='text-gray-400'>Top Sellers</h1>
          <h1 className='text-gray-400'>New Release</h1>
          <h1 className='text-gray-400'>Upcomming</h1>
          <h1 className='text-gray-400'>Specials</h1>
          <h1 className='text-gray-400'>VR Titles</h1>
          <h1 className='text-gray-400'>Controller-friendly</h1>
        </div>
    </div>
  )
}
