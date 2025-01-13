import React from 'react'
import Image from 'next/image'
export const WorkTogetherSection = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center justify-center mt-16 md:mt-28 font-inter'>
        <div className='text-center lg:text-left'>
            <h2 className='text-3xl md:text-4xl font-bold text-blue-950'>
              Work together,<br/> wherever you work
            </h2>
            <p className='text-md text-gray-500 mt-5'>
              In the office, remote, or a mix of the two, with Miro,
              your team can connect, collaborate, and co-create in
              one space no matter where you are.
            </p>
            <a href="" className='inline-block mt-4 text-blue-500 hover:text-blue-600 hover:font-extrabold hover:underline transition-colors'>
              Learn more
            </a>
        </div>
        <div className='flex justify-center lg:justify-end'>
            <Image 
              src="/images/work-together.png" 
              alt='work-together' 
              width={500} 
              height={500} 
              className='w-full max-w-[500px] h-auto'
            />
        </div>
      </div>
    </div>
  )
}
