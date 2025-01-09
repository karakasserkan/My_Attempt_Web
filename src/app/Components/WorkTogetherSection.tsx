import React from 'react'
import Image from 'next/image'
export const WorkTogetherSection = () => {
  return (
    <div className='grid grid-cols-2 gap-10 items-center justify-center mt-28 font-inter place-items-center'>
        <div>
            <h2 className='text-4xl font-bold text-blue-950'>Work together,<br/> wherever you work</h2>
            <p className='text-md text-gray-500 mt-5'>In the office, remote, or a mix of the two, with Miro,<br/> your team can connect, collaborate, and co-create in<br/> one space no matter where you are.</p>
            <a href="" className='text-blue-500 hover:text-blue-600 hover:font-extrabold hover:underline'>Learn more</a>
        </div>
        <div>
            <Image src="/images/work-together.png" alt='work-together' width={500} height={500} className='mt-5'/>
        </div>
    </div>
  )
}
