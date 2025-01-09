import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export const JoinSection = () => {
  return (
    <div className="font-inter mt-32 bg-blue-950 rounded-xl">
        <div className='justify-center items-center text-center pt-24 pb-24'>
            <h2 className='text-white text-4xl font-extrabold'>Join 45M+ users today</h2>
            <div className='flex flex-col items-center justify-center text-center mt-5'>
                <span className='text-gray-400 text-md'>Start for free — upgrade anytime.</span>
                <a href="#" className='text-gray-400 text-md underline mt-5'>Joining as an organization? Contact Sales</a>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl h-10 mt-14">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2">
              <span className="text-sm">Sign up free</span>
              <FaArrowRight size={15} />
            </a>
          </div>
        </button>
        </div>
    </div>
  )
}
