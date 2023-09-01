import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { data } from "../assets/mockData"
import Discount from './Discount';

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
        <div className='hidden md:block md:w-full md:max-w-full mt-10'>
            <h1 className='px-1 text-slate-100'>SPECIAL OFFER</h1>
            <div className=' flex justify-center items-center w-full relative group'>
                {/* Left Arrow */}
                <div className=' h-[5rem] w-[2rem] flex justify-center items-center text-2xl  text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div className='w-[100%] h-[20rem] '>
                    <div className='inline-block w-[30%] mx-2 my-1 '>
                        <div
                            style={{ backgroundImage: `url(${data[currentIndex].img})` }}
                            className='w-[100%] h-[18rem] bg-center bg-cover duration-500'
                        ></div>
                        <div className='w-full bg-red-700'>
                            <Discount />
                        </div>
                    </div>
                    <div className='inline-block w-[30%] mx-2 my-1 '>
                        <div
                            style={{ backgroundImage: `url(${data[(currentIndex + 1)%12].img})` }}
                            className='w-[100%] h-[18rem] bg-center bg-cover duration-500'
                        ></div>
                        <div className='w-full bg-red-700'>
                            <Discount />
                        </div>
                    </div>
                    <div className='inline-block w-[30%]'>
                        <div className=' w-[100%] mx-2 my-1'>
                            <div
                                style={{ backgroundImage: `url(${data[(currentIndex + 2)%12].img})` }}
                                className='w-[100%] h-[7rem] bg-center bg-cover duration-500'
                            ></div>
                            <div className='w-full bg-red-700'>
                                <Discount />
                            </div>
                        </div>
                        <div className=' w-[100%] mx-2 my-1'>
                            <div
                                style={{ backgroundImage: `url(${data[(currentIndex + 3)%12].img})` }}
                                className='w-[100%] h-[7rem] bg-center bg-cover duration-500'
                            ></div>
                            <div className='w-full bg-red-700'>
                                <Discount />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Arrow */}
                <div className='h-[5rem] w-[2rem] flex justify-center items-center text-2xl  text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>

            <div className='flex justify-center py-2 mt-8'>
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