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
        const newIndex = isLastSlide ? 0 : (currentIndex + 1)%12;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='hidden md:block md:w-full md:max-w-full'>
            <h1 className='px-1 text-slate-100'>BROWSE BY CATEGORY</h1>
            <div className=' flex justify-center items-center h-[12em] w-full relative group'>
                {/* Left Arrow */}
                <div className=' h-[5rem] w-[2rem] flex justify-center items-center text-2xl  text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div className='w-[100%] h-[10rem] '>
                    <div className='inline-block w-[22%] aspect-square mx-2 my-1 '>
                        <div
                            style={{ backgroundImage: `url(${data[currentIndex].img})` }}
                            className='w-[100%] h-[10rem] aspect-square center bg-cover duration-500'
                        ></div>
                        <div className='relative bottom-8 w-full text-center'>
                            <h1 className='p-1 text-slate-200 text-xl font-bold mb-6 md:text-base'>{data[currentIndex].category}</h1>
                        </div>
                    </div>
                    <div className='inline-block w-[22%] aspect-square mx-2 my-1 '>
                        <div
                            style={{ backgroundImage: `url(${data[(currentIndex + 1)%12].img})` }}
                            className='w-[100%] h-[10rem] aspect-square bg-center bg-cover duration-500'
                        ></div>
                        <div className='relative bottom-8 w-full text-center'>
                            <h1 className='p-1 text-slate-200 text-xl font-bold mb-6 md:text-base'>{data[(currentIndex + 1)%12].category}</h1>
                        </div>
                    </div>
                    <div className='inline-block w-[22%] aspect-square mx-2 my-1 '>
                        <div
                            style={{ backgroundImage: `url(${data[(currentIndex + 2)%12].img})` }}
                            className='w-[100%] h-[10rem] aspect-square bg-center bg-cover duration-500'
                        ></div>
                        <div className='relative bottom-8 w-full text-center'>
                            <h1 className='p-1 text-slate-200 text-xl font-bold mb-6 md:text-base'>{data[(currentIndex + 3)%12].category}</h1>
                        </div>
                    </div>
                    <div className='inline-block w-[22%] aspect-square mx-2 my-1 '>
                        <div
                            style={{ backgroundImage: `url(${data[(currentIndex + 4)%12].img})` }}
                            className='w-[100%] h-[10rem] aspect-square bg-center bg-cover duration-500'
                        ></div>
                        <div className='relative bottom-8 w-full text-center'>
                            <h1 className='p-1 text-slate-200 text-xl font-bold mb-6 md:text-base'>{data[(currentIndex + 4)%12].category}</h1>
                        </div>
                    </div>
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