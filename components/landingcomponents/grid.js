import React from 'react'
// Image component will help with image optimization
import Image from 'next/image'

import { useState, useEffect } from 'react';

import Grid from "../../public/Grid-Images/GRID.svg"
import Grid1 from "../../public/Grid-Images/GRID1.svg"



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


function GridSection() {

    const size = useWindowSize();

    return ( (size.width >= 620) ?
        <div className='w-full'>
            <Image src={Grid} className='my-20 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12'/>
        </div> :
        <div className='w-full'>
            <Image src={Grid1} className='w-10/12 sm3:w-8/12 mx-auto gap-2 my-12' />
        </div>
    )

}

export default GridSection;