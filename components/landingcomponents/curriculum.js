import React from 'react'
import Link from "next/link"; // this will allow to prevent refreshing and hence, reduce the load

// Image component will help with image optimization
import Image from 'next/image'


import { useState, useEffect } from 'react';
// Importing the styles
import IBlogo from "../../public/Curriculum-Images/IB-logo.svg"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import graphics from "../../public/Curriculum-Images/GraphicBoxes.png"

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }


function CurriculumCart(props) {
    return (
        <div className='w-11/12 sm:w-96 rounded-lg border-2 border-custom_blue-500 bg-custom_blue-1000'>
            <div className=' h-5/12 bg-white rounded-t-lg border-custom_blue-500 border-b-2'>
                <Image alt='IB Logo' src={IBlogo}/>
            </div>
            <div className='flex flex-col m-2 sm:m-4 gap-2 sm:gap-4 h-7/12'>
                <h3 className='text-custom_black-500 text-lg sm:text-2xl font-bold'>{props.title}</h3>
                <p className='text-custom_black-500 text-xs sm:text-sm font-light'>{props.description}</p>
                <Link href='/navigation' className='text-custom_blue-500 text-xs sm:text-sm'>Discover more <ArrowRightAltIcon/></Link>
            </div>
        </div>
    )
}

function CurriculumSection() {

    var windowSize = useWindowSize();

  return (
    <div className='w-full bg-custom_grey-100'>
        
        <div className='flex flex-col items-start w-11/12 lg:w-8/12 mx-auto py-8 sm:py-16 gap-6'>
            <h2 className='sm:text-5xl text-2xl font-bold text-custom_black-500'>Available Curriculums</h2>
            <p className='text-custom_black-500 w-11/12 sm:w-10/12 lg:w-8/12 font-light text-xs sm:text-base '>Maximize your scores and reduce stress with personalized learning. Our revision tool identifies your strengths and weaknesses, so you can focus on what matters most. Join the revision revolution and make practice perfect.</p>
            
            {(windowSize.width <= 420) && 
            <div className='flex flex-row'>
                <h2 className='text-custom_blue-500 font-bold text-xs w-1/2 mb-16'>Join the revision revolution and make practice perfect!</h2>
                <Image className='w-1/2' src={graphics}/>
            </div>
            }
        

            <div className='flex lg:flex-row lg:gap-6 flex-col gap-4'>
                <CurriculumCart title='IBDP Math' description='Cursus laoreet gravida senectus arcu tellus nunc. Ullamcorper feugiat senectus elementum nec.'/>
                <CurriculumCart title='IBDP Economics' description='Cursus laoreet gravida senectus arcu tellus nunc. Ullamcorper feugiat senectus elementum nec.'/>
            </div>

            {(windowSize.width > 420) && <h2 className='text-custom_blue-500 font-bold'>Join the revision revolution and make practice perfect!</h2>}
  

            <Link href='/navigation' className='xl:mt-8 mt-6'> 
                <div className='bg-custom_blue-500 text-white w-full sm:w-auto py-2 px-6 font-bold rounded-md text-xs sm:text-base'>Sign up for a free trial today!</div>
            </Link>

        </div>
        
    </div>
    

  )
}

export {CurriculumSection, useWindowSize};

