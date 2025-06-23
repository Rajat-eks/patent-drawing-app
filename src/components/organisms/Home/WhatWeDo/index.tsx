import React from 'react'
import Patent from '../../../assets/img/patent.jpg'
import Image from 'next/image'

interface WhatWeDoProps {
 // define props here
}

const WhatWeDo: React.FC<WhatWeDoProps> = (props) => {
 return (
  <main className='p-6'>
   <h1>What We Do</h1>
   <section className='grid grid-cols-3 gap-10 mt-10  px-20'>
    <div className='border-2 rounded-md border-rounded border-blue flex flex-col justify-center items-center'>
     <Image src={Patent} alt='sample' className='relative -top-14 w-60  px-4' />
     <h2 className='relative -left-32 bg-white bottom-4 text-lg font-semibold text-blue'>
      Illustration
     </h2>
    </div>
    <div className='border-2 rounded-md border-rounded border-blue flex flex-col justify-center items-center'>
     <Image src={Patent} alt='sample' className='relative -top-14 w-60  px-4' />
     <h2 className='relative -left-32 bg-white bottom-4 text-lg font-semibold text-blue'>
      Illustration
     </h2>
    </div>
    <div className='border-2 rounded-md border-rounded border-blue flex flex-col justify-center items-center'>
     <Image src={Patent} alt='sample' className='relative -top-14 w-60  px-4 rounded' />
     <h2 className='relative -left-32 bg-white bottom-4 text-lg font-semibold text-blue'>
      Illustration
     </h2>
    </div>
   </section>
  </main>
 )
}

export default WhatWeDo
