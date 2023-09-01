import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { data } from "../assets/mockData"


function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='hidden md:block md:w-full'>
            <h1 className='px-1 mt-2 text-slate-100'>FEATURED & RECOMMENDED</h1>
            <div className=' flex justify-center items-center h-[20em] w-full m-auto py-6 relative group'>
                {/* Left Arrow */}
                <div className=' h-[5rem] w-[2rem] flex justify-center items-center text-2xl  text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div
                    style={{ backgroundImage: `url(${data[currentIndex].img})` }}
                    className='w-[70%] h-full bg-center bg-cover duration-500'
                ></div>
                <div className='h-full w-md p-2'>
                    <h1 className='text-slate-200 text-2xl'>{data[currentIndex].game}</h1>
                    <div className='flex justify-center items-center'>
                        <div className='p-1'>
                            <img src={data[currentIndex].img} alt="" className='p-1 w-[6rem] aspect-video' />
                            <img src={data[currentIndex].img} alt="" className='p-1 w-[6rem] aspect-video'/>
                        </div>
                        <div className='p-1'>
                            <img src={data[currentIndex].img} alt="" className='p-1 w-[6rem] aspect-video'/>
                            <img src={data[currentIndex].img} alt="" className='p-1 w-[6rem] aspect-video'/>
                        </div>            
                    </div>
                    <h1 className='text-slate-200'>Reccomended because you played</h1>
                </div>

                {/* Right Arrow */}
                <div className='h-[5rem] w-[2rem] flex justify-center items-center text-2xl  text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>

            <div className='flex justify-center py-2'>
                {data.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>

                ))}
            </div>
        </div>
    );
}

export default App;