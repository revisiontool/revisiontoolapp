import React from 'react'
import Link from "next/link"; // this will allow to prevent refreshing and hence, reduce the load

// Image component will help with image optimization
import Image from 'next/image'

// Importing the styles
// import style from '../../styles/landingcomponentstyles/FooterSection.module.css'
import triangle from '../../public/vectors/triangle.svg'
import vector from '../../public/vectors/Vector.svg'
import square from '../../public/vectors/Square.svg'
import Typeformpopup from '../popups/typeformpopup';

function FooterSection() {

    return (
        <div className='relative w-full bg-custom_grey-100'>
            <div className='sm:space-x-20 w-10/12 mx-auto flex sm:flex-row sm:py-16 mt-20 py-10 flex-col px-2'>
                <div className='relative w-12/12 sm:w-5/12 flex flex-col gap-6'>
                    <h3 className='md:text-4xl lg:text-6xl text-custom_black-500 text-2xl font-bold'>Ready to get started?</h3>
                    <p className='text-sm sm:text-base md:text-lg lg:text-xl font-light'>Trials Available for IBDP Mathematics & Economics!</p>
                    <div className='flex flex-row md:gap-6 gap-2 w-full'> {/*Buttons*/}
                        <Link href='/navigation' className='xl:mt-8 mt-6'> 
                            <div className='bg-custom_blue-500 w-auto  text-center py-4 px-2 sm:p-4 rounded-lg font-bold md:text-base text-xs text-white'>Get Started- It&apos;s Free</div>
                        </Link>
                        <Link href='/navigation' className='xl:mt-8 mt-6'> 
                            <div className=' bg-transparent text-custom_black-500 border-custom_black-500 border sm:border-2 w-auto md:w-32 lg:w-36 text-center p-4 rounded-lg font-bold md:text-base text-xs'>Login</div>
                        </Link>
                    </div>
                    <Image src={square} className='-top-5 -right-5 sm:right-0 absolute w-12 md:w-16 lg:w-20'/>
                </div>
                <div className='w-full sm:w-5/12 flex flex-col gap-2'>
                    <h3 className='sm:text-xl text-base font-semibold my-4 text-custom_black-500'>Join our newsletter</h3>
                    <div className='w-full bg-transparent border-2 rounded-md'>
                        <input className='w-8/12 py-2 bg-transparent sm:px-4 px-2 rounded font-light sm:text-lg text-sm' defaultValue={"Fill with your email."}/>
                        <button className='w-4/12 bg-custom_grey-200 text-custom_black-500 font-semibold sm:px-4 py-2 px-1 sm:text-lg text-sm'>Join now</button>
                    </div>
                    <div className='flex flex-row space-x-5 md:space-x-10 lg:space-x-20 py-4 text-xs sm:text-md md:text-lg  text-custom_black-500'>
                        <div className='flex flex-col space-y-3'>
                            <Link className='font-semibold' href={"#"}>Discover</Link>
                            <Link href={"/"}>Home</Link>
                            <Link href={"/aboutus"}>About us</Link>
                            <Link href={"/navigation"}>Sign up for early access</Link>
                            <Link href={"/navigation"}>Login</Link>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <Link className='font-semibold' href={"/faq"}>Others</Link>
                            <Link href={"/contact"}>Contact us</Link>
                            <Link href={"/privacypolicy"}>Copyright</Link>
                            <Link href={"/terms-and-conditions"}>Legal Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={vector} className='left-10 -top-5 absolute w-12 md:w-16 lg:w-20'/>
            <Image src={triangle} className='right-20 bottom-2 sm:bottom-10 absolute w-12 md:w-16 lg:w-20'/>
        </div>
    )
}

export default FooterSection;