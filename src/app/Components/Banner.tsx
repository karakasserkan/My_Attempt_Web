import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
const Banner = () => {  
  return (
    <div className='grid grid-cols-2 gap-10 items-center justify-center mt-32 font-inter place-items-center'>
        <div>
            <h1 className='text-6xl font-extrabold text-blue-950'>Take ideas from better to best</h1>
            <p className='text-xl text-gray-500 mt-5'>Miro is your team&apos;s visual platform to connect, collaborate, and create — together.</p>
            <div className='flex gap-5 items-center mt-5'>
              <input type="email" placeholder='Enter your work email' className='border-2 border-gray-300 rounded-3xl px-4 py-2 w-full h-12 shadow-md hover:border-blue-500 focus:outline-none'/>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl mt-2 w-full h-12 shadow-md flex items-center justify-center">
              <div className="flex items-center gap-2">
                <a href="#" className="flex items-center gap-2">
                  <span className="text-sm">Sign up free</span>
                  <FaArrowRight size={15}/>
                </a>
              </div>
            </button>
            <p className='text-gray-400 mt-1'>Collaborate with your team within minutes</p>
            <Image src="/images/div.png" alt='banner' width={350} height={60} className='mt-5 justify-center'/>
        </div>
        <div>
          <div>
            <Image src="/images/banner-img.png" alt='banner' width={680} height={484}/>
          </div>
        </div>
    </div>
  )
}

export default Banner