import React from 'react'
import Link from "next/link"; // this will allow to prevent refreshing and hence, reduce the load

// Image component will help with image optimization
import Image from 'next/image'
import designImage from "../../public/element1.gif"
import mobileImage from '../../public/images/landing-mobile-image.png'


function LandingSection() {
  return (
    <div className='mx-auto flex flex-col gap-y-16'>
        <div className='flex md:flex-row flex-col'>
            <div className='flex flex-col md:ml-40 mx-2 md:gap-y-3 gap-y-3'>
                <h1 className='md:mt-20 mt-8 md:mb-6 mb-2 md:text-6xl sm:text-4xl text-xl font-extrabold md:font-bold w-10/12'>
                    The Revision Tool - The <span className='text-custom_green-400'>World&apos;s Most Effective</span> Revision Tool
                </h1>
                <div className='md:text-2xl text-xs max-w-xl md:leading-8 leading-1 md:font-extralight font-light'>
                Revolutionize your learning with our cutting-edge technology. Get step-by-step, targeted practice for success in IB Math and Economics.
                </div>
                <br/>
                <div className='flex flex-col md:gap-y-3 gap-y-2'>
                    <div className='flex flex-row md:gap-x-4 gap-x-1'>
                        <span className='bg-custom_green-400 bg-opacity-20 text-custom_green-400 text-xs md:text-sm rounded-2xl px-2 py-1 md:py-1 md:px-3'>Guided Past Paper Practice</span>
                        <span className='bg-custom_blue-500 bg-opacity-20 text-custom_blue-500 text-xs md:text-sm rounded-2xl px-2 py-1 md:py-1 md:px-3'>Current Score Prediction</span>
                    </div>
                    <div className='flex flex-row md:gap-x-4 gap-x-1'>
                        <span className='bg-custom_blue-500 bg-opacity-20 text-custom_blue-500 text-xs md:text-sm rounded-2xl px-2 py-1 md:py-1 md:px-3'>Identify Weak Areas</span>
                        <span className='bg-custom_green-400 bg-opacity-20 text-custom_green-400 text-xs md:text-sm rounded-2xl px-2 py-1 md:py-1 md:px-3'>Build Exam Technique</span>
                    </div>
                    
                </div>
                <div className='flex flex-row md:gap-6 gap-2 w-full'>
                    <Link href='/navigation' className='xl:mt-8 mt-6'> 
                        <div className='bg-custom_blue-500 w-auto sm:w-60 text-center py-4 px-2 sm:p-4 rounded-lg font-bold md:text-lg text-xs text-white'>Get Started- It&apos;s Free</div>
                    </Link>
                    <Link href='/navigation' className='xl:mt-8 mt-6'> 
                        <div className=' bg-transparent text-custom_black-500 border-custom_black-500 border sm:border-2 w-auto sm:w-36 text-center p-4 rounded-lg font-bold md:text-lg text-xs'>Learn More</div>
                    </Link>
                </div>
            </div>

            <div className='hidden lg:flex'>
                <Image src={designImage} alt="Design Image"></Image>
            </div>    
            <div className='vsm:hidden visible mt-4'>
                <Image src={mobileImage} alt="Design Image"></Image>
            </div>  
        </div>
    </div>

  )
}

export default LandingSection;