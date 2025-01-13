import React from 'react'
import Image from 'next/image'
export const PartnerSection = () => {
  return (
    <div className='container mx-auto px-4'>
        <div className='flex items-center justify-center mt-32'>
            <p className='text-lg text-gray-400'>Trusted by 45M+ users</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-10'>
            <div className='flex justify-center items-center'>
                <Image src="/images/partner-1.png" alt='partner' width={117} height={64}/>
            </div>
            <div className='flex justify-center items-center'>
                <Image src="/images/partner-2.png" alt='partner' width={224} height={64}/>
            </div>
            <div className='flex justify-center items-center'>
                <Image src="/images/partner-3.png" alt='partner' width={53} height={64}/>
            </div>
            <div className='flex justify-center items-center'>
                <Image src="/images/partner-4.png" alt='partner' width={224} height={64}/>
            </div>
            <div className='flex justify-center items-center'>
                <Image src="/images/partner-5.png" alt='partner' width={70} height={64}/>
            </div>
        </div>
    </div>
  )
}
