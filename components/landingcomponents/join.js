import React from 'react'
import {useWindowSize} from '../../components/landingcomponents/curriculum'
import Image from 'next/image'
import Popup from '../popups/popup'
import SignUpPopup from '../popups/signuppopup'
import review1 from "../../public/vectors/Review1.svg"
import review2 from "../../public/vectors/Review2.svg"
import Link from "next/link"; 

function Join() {

    return (
        <div className='relative w-full bg-custom_blue-1000'>
            <div className='w-5/6 sm:w-2/3 flex flex-col items-center mx-auto py-24 sm:py-32 gap-4 sm:gap-12'>
                <h2 className='text-center text-2xl sm:text-5xl  font-extrabold text-custom_blue-500'>
                    Join the Revision Revolution
                </h2>
                <p className='text-center text-custom_blue-500 text-xs md:text-xl font-light'>
                Join thousands of students who are leading the revision revolution today. Read reviews from satisfied students and see for yourself why The Revision Tool is the world&apos;s most powerful revision tool.
                </p>
                <div className='mx-auto xl:mt-8 mt-6'> 
                    <Link href={'/navigation'} className='py-2 sm:py-3 sm:px-8 px-2 rounded-md bg-custom_green-400 font-bold text-lg mob:text-xs text-white'>Get Started for free!</Link>
                </div>

            </div>
            <Image className='absolute w-48 sm:w-56 md:w-80 -top-6 left-5 sm:left-20' alt='5-star review from Wesly Chan, says:"The Revision Tool has changed the way I revise and I scored a Level 7 on my IBDP Math AA test on Numbers & Algebra!"' src={review1}/>
            <Image className='absolute w-48 sm:w-56 md:w-80 -bottom-6 right-5 sm:right-20 z-20' alt='5-star review from Cameron King, says:"The Revision Tool is my life saver! Absolutely loving the exam based prep for IGCSE Maths!"' src={review2}/>
        </div>);
}

export default Join