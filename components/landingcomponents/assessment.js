import React from 'react'
import Image from 'next/image'
import topbar from '../../public/vectors/topmenu.svg'

import trianglebox from "../../public/vectors/triangle-box.png"
import {useWindowSize} from '../../components/landingcomponents/curriculum'
import Link from 'next/link'


function Assessment() {

    var windowSize = useWindowSize();

    return (
        (windowSize.width >= 640) ? (
        <div className='relative flex flex-row-reverse items-center w-10/12 py-24 gap-12'>
            <div className='flex flex-col items-start w-11/12 gap-6'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-6xl leading-tight font-bold text-custom_black-500'>Assess Your Current Performance & Grade</h2>
                <p className='text-xs sm:text-sm md:text-md lg:text-lg text-custom_black-500 font-light'>Assess your performance with a comprehensive report and predicted grade after completing a guided question set. Our platform will give you a clear picture of where you stand and what you need to do to improve.</p>
                <Link href='/navigation' className='xl:mt-8 mt-6'> 
                    <div className='bg-custom_blue-500 py-3 px-10 rounded-md font-bold text-lg mob:text-sm text-white'>Start your free trial today!</div>
                </Link>
                
            </div>
            <div className='pb-72 lg:pb-96 w-4/5 mx-auto bg-white border-2 rounded-md'>
                <Image src={topbar}/>
            </div>
            <Image src={trianglebox} alt='graphics for display' className='absolute bottom-0 sm1:hidden right-0 w-32 lg:w-48'/>
        </div>):(
        <div className='w-full'>
            <div className='flex mx-auto w-11/12 sm:w-10/12 md:w-8/12 flex-col py-16 sm:py-24 items-start gap-6'>
                <h2 className='text-2xl sm:text-5xl font-bold text-custom_black-500'>Assess Your Current Performance & Grade</h2>
                <p className='text-sm md:text-lg lg:text-xl font-light text-custom_black-500 leading-4 md:leading-8 tracking-normal'>
                Assess your performance with a comprehensive report and predicted grade after completing a guided question set. Our platform will give you a clear picture of where you stand and what you need to do to improve.
                </p>
                <div className='pb-32 sm3:pb-48 lg:pb-96 w-full mx-auto bg-white border-2 rounded-md'>
                    <Image src={topbar}/>
                </div>
                
                <Link href='/navigation' className='xl:mt-8 mt-6'> 
                    <div className='bg-custom_blue-500 py-3 px-10 rounded-md font-bold text-lg mob:text-sm text-white'>Start your free trial today!</div>
                </Link>
            </div>
        </div>));
}

export default Assessment