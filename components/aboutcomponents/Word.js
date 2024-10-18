import Popup from '../popups/popup'
import LoginPopup from '../popups/loginpopup'
import SignUpPopup from '../popups/signuppopup'
import style from '../../styles/globalcomponentstyles/heroabout.module.css'
import Image from 'next/image'
import review1 from "../../public/vectors/Review1.svg"
import review2 from "../../public/vectors/Review2.svg"
import Link from 'next/link'

function Word(){
    return (
        <div className='relative mt-16 z-10'>
            <div className='relative bg-custom_blue-100 items-center py-32 px-3 z-10'>
                <div className={`${style.heading}`} >
                    <div className='text-center'>
                        <h1><span className={`${style.headingfont} font-bold md:text-7xl sm:text-6xl vsm:text-5xl text-4xl text-custom_blue-500`}>Don&apos;t take our word for it</span></h1>
                    </div>
                    <div className='text-center'>
                        <h1><span className={`${style.subheadingfont} font-normal md:text-xl sm:text-base text-sm mt-5 text-custom_blue-500`}>Join thousands of students worldwide to lead the revision revolution today.</span></h1>
                    </div>
                </div>
                <div className='flex vsm:flex-row flex-col vsm:gap-12 gap-2 mt-10 w-min mx-auto'> {/*Buttons*/}
                    <Link href='/navigation' className='mx-auto xl:mt-8 mt-6'> 
                        <div className=' bg-custom_green-400 w-44 md:w-80 text-center py-4 sm:p-4 rounded-lg font-bold lg:text-lg md:text-base text-sm text-white'>Get Started- It&apos;s Free</div>
                    </Link>
                    <Link href='/navigation' className='mx-auto xl:mt-8 mt-6'> 
                        <div className=' bg-transparent text-custom_blue-500 border-custom_blue-500 border-2 w-32 text-center p-4 rounded-lg font-bold lg:text-lg md:text-base text-sm'>Login</div>
                    </Link>
                    
                </div>
                <Image className='absolute w-48 sm:w-56 md:w-80 -top-6 left-5 sm:left-20 z-20' alt='5-star review from Wesly Chan, says:"The Revision Tool has changed the way I revise and I scored a Level 7 on my IBDP Math AA test on Numbers & Algebra!"' src={review1}/>
                <Image className='absolute w-48 sm:w-56 md:w-80 -bottom-6 right-5 sm:right-20 z-20' alt='5-star review from Cameron King, says:"The Revision Tool is my life saver! Absolutely loving the exam based prep for IGCSE Maths!"' src={review2}/>
            </div>
            
        </div>
    
    );
}
export default Word;