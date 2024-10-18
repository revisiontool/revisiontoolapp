import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import topbar from '../../public/vectors/topmenu.svg'
import Popup from '../popups/popup'
import SignUpPopup from '../popups/signuppopup'



function Practice() {
  return (
    <div className='w-full bg-custom_grey-100'>
        <div className='flex mx-auto w-11/12 sm:w-10/12 md:w-8/12 flex-col py-16 sm:py-24 items-start gap-6'>
            <h2 className='text-3xl sm:text-5xl font-bold text-custom_black-500'>Practice Smarter, Not Harder.</h2>
            <p className='visible sm:hidden text-xs md:text-lg lg:text-xl font-light text-custom_black-500 leading-4 md:leading-8 tracking-wide'>
            Don&apos;t waste time studying what you already know. Our platform guides you through the revision process, identifying target areas to maximize improvement and equips you with the tools needed for success.
            </p>
            <div className='pb-32 sm2:pb-48 lg:pb-96 w-full mx-auto bg-white'>
                <Image src={topbar}/>
            </div>
            <p className='visible sm1:hidden md:text-lg lg:text-xl font-light text-custom_black-500 leading-5 md:leading-8 tracking-wide'>
            Don&apos;t waste time studying what you already know. Our platform guides you through the revision process, identifying target areas to maximize improvement and equips you with the tools needed for success.
            </p>
            <Link href='/navigation' className='xl:mt-8 mt-6'> 
                <div className=' bg-custom_blue-500 py-3 px-10 rounded-md font-bold text-lg mob:text-sm text-white'>Get started for free and see the difference!</div>
            </Link>
        </div>
    </div>
  )
}

export default Practice