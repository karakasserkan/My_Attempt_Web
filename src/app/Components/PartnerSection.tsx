import React from 'react'
import Image from 'next/image'
export const PartnerSection = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex items-center justify-center mt-32'>
            <p className='text-lg text-gray-400'>Trusted by 45M+ users</p>
        </div>
        <div>
            <ul className='flex items-center justify-center mt-12 mx-auto gap-24'>
                <li><Image src="/images/partner-1.png" alt='partner' width={117} height={64}/></li>
                <li><Image src="/images/partner-2.png" alt='partner' width={224} height={64}/></li>
                <li><Image src="/images/partner-3.png" alt='partner' width={53} height={64}/></li>
                <li><Image src="/images/partner-4.png" alt='partner' width={224} height={64}/></li>
                <li><Image src="/images/partner-5.png" alt='partner' width={70} height={64}/></li>  
            </ul>
        </div>
    </div>
  )
}
