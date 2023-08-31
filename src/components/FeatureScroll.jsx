import React from 'react'

export default function FeatureScroll({ data }) {
    console.log(data)
    return (
        <div
            id='slider'
            className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
            {data.map((item) => (
                <div key={item.id} className='w-[90%] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
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
    )
}
