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
        slidesToScroll: 1
    };
    
    return (
        <div className="container mx-auto mt-32 font-inter">
            <div className="justify-center items-center text-center">
                <h2 className="text-4xl font-extrabold text-blue-950">Loved by the world&apos;s best teams</h2>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-3xl h-10 border border-blue-500 mt-8 w-80 hover:bg-blue-500 hover:text-white transition">
                    <div>
                        <a href="#" className="flex items-center gap-2 justify-center text-center">
                            <span className="text-lg">See all customer stories</span>
                            <FaArrowRight size={15}/>
                        </a>
                    </div>
                </button>
            </div>
            <div className="mt-20">
                <Slider {...settings}>
                    <div className='p-5'>
                        <UiLovedCard/>
                    </div>
                    <div className='p-5'>
                        <UiLovedCard/>
                    </div>
                    <div className='p-5'>
                        <UiLovedCard/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default LovedSection
