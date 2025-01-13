"use client"
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { UiLovedCard } from './Ui/UiLovedCard';

function LovedSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    
    return (
        <div className="container mx-auto px-4 mt-16 md:mt-32 font-inter">
            <div className="justify-center items-center text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950">
                    Loved by the world&apos;s best teams
                </h2>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-3xl h-10 border border-blue-500 mt-6 md:mt-8 w-full sm:w-80 hover:bg-blue-500 hover:text-white transition-colors">
                    <div>
                        <a href="#" className="flex items-center gap-2 justify-center text-center">
                            <span className="text-base md:text-lg">See all customer stories</span>
                            <FaArrowRight size={15}/>
                        </a>
                    </div>
                </button>
            </div>

            <div className="mt-10 md:mt-20">
                <div className="mx-[-20px] md:mx-0">
                    <Slider {...settings}>
                        <div className='p-3 md:p-5'>
                            <UiLovedCard/>
                        </div>
                        <div className='p-3 md:p-5'>
                            <UiLovedCard/>
                        </div>
                        <div className='p-3 md:p-5'>
                            <UiLovedCard/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default LovedSection
