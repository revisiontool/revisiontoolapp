import React from 'react'
import Typeformpopup from '../popups/typeformpopup';

import personvector from "../../public/vectors/person-vector.svg"
import boxesvector from "../../public/vectors/request-boxes.svg"
import Image from 'next/image';

function RequestCurriculum() {
  return (
    <div className='relative w-full bg-custom_grey-100 mb-10'>
      <div className='flex flex-col items-center w-10/12 sm:w-3/5 lg:w-1/2 mx-auto py-20 gap-4'>
        <h2 className='text-center text-xl sm:text-3xl md:text-6xl text-custom_black-500 font-bold md:font-semibold'>Request Another Curriculum or Subject</h2>
        <p className='w-10/12 text-center text-xs sm:text-md md:text-2xl font-light text-custom_black-500'>Looking for another curriculum or subject? Submit a request form and let us know what you&apos;re looking for.</p>
        <div className='py-3 sm:px-8 px-2 rounded-md bg-custom_blue-500 font-bold text-xs sm:text-lg text-white'>
          <Typeformpopup message='Send us a request' id="https://vj6jlebzp6d.typeform.com/to/Ow2ClaTD"/>
        </div>  
      </div>
      <Image alt='graphic vector 1' src={boxesvector} className='w-12 sm:w-20 md:w-24 lg:w-28 xl:w-32 absolute top-4 sm:top-20 left-5 sm:left-10 md:left-40'/>
      <Image alt='graphic vector 2' src={personvector} className='absolute -bottom-5 right-4 sm:right-20 md:right-32 w-16 sm:w-28 md:w-32 lg:w-40 xl:w-48'/>
    </div>
  )
}

export default RequestCurriculum
