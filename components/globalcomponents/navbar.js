import React from 'react'
import Link from "next/link"; // this will allow to prevent refreshing and hence, reduce the load

// Image component will help with image optimization
import Image from 'next/image'
import logo from "../../public/logos/logo.png"

// Importing the styles
import style from '../../styles/globalcomponentstyles/navbar.module.css'
// import useWindowDimensions from '../functions';

import { useState, useEffect } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


import { useSelector } from "react-redux";
import { store } from '../../redux/store';
import { CHANGE_NAVBAR } from '../../redux/types';
import AuthenticationButton from '../navbarcomponents/authenticationbutton';


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
      
      var earlyAccess = 'Sign up for early access<sup>+</sup>'
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }



function Navbar() {
    
    const size = useWindowSize();

    
    const navState = useSelector((state) => state.navbar);
    
    

    var navbarDesk = (<div className={style.navbar} >
        <div>
            <Link href='/'>
                <Image src={logo} alt="Logo" className={style.logo}></Image>
            </Link>
        </div>
        <div className={style.navBarMenu} >
            <div className={style.navBarItem} >
                <Link href='/' className={style.linkText}>
                    Home
                </Link>
            </div>
            <div className={style.navBarItem}>
                <Link href='/aboutus' className={style.linkText}>
                    About Us
                </Link>
            </div>
            <div className={style.navBarItem}>
                <Link href='/navigation'> 
                    <div className={`${style.linkText} font-semibold text-custom_green-400`}>Sign up for early access⁺</div>
                </Link>
                
            </div>
        </div>
        <div className={style.navButtons}>
            <AuthenticationButton text="Login" blue={true}/>
            <AuthenticationButton text="Get Started - It's Free" blue={false}/>
        </div>
        </div>);

    


    var navbarMobile = ( 
        <div className='relative flex flex-row w-full justify-between border-b-2 border-gray-600'>
            <div className='flex flex-row w-full justify-between'>
                <Link href='/'>
                    <Image src={logo} alt="Logo" className={`${style.logo} m-2`}></Image>
                </Link>
                <MenuIcon className='m-3' onClick={() => {
                    store.dispatch({type: CHANGE_NAVBAR, payload:true})
                }}/>
            </div>
            {(navState) &&
            <div className='absolute top-0 w-full items-center flex flex-col h-screen bg-custom_green-400 opacity-90 z-20 pb-10'>
            
                <div className='flex flex-row w-full justify-between'>
                    <Link href='/' className='m-4'>
                        <h1 className='font-bold text-white text-xl' >TheRevisionTool</h1>
                    </Link>

                    <CloseIcon className='m-4 text-white' fontSize='large' onClick={() => {
                        store.dispatch({type: CHANGE_NAVBAR, payload:false})
                    }}/>
                </div>

                <div className='my-auto items-center text-center text-white text-xl font-bold'>
                    <Link href='/' className='m-4' onClick={() => {
                        store.dispatch({type: CHANGE_NAVBAR, payload:false})
                    }}>
                        <h3>HOME</h3>
                    </Link>
                    <Link href='/aboutus' className='m-4' onClick={() => {
                        store.dispatch({type: CHANGE_NAVBAR, payload:false})
                    }}>
                        <h3>ABOUT US</h3>
                    </Link>
                    <AuthenticationButton text="Login" blue={true} onClick={() => {store.dispatch({type: CHANGE_NAVBAR, payload:false})}}/>
                    <Link href='/contact' className='m-4' onClick={() => {store.dispatch({type: CHANGE_NAVBAR, payload:false})}}>
                        <h3>CONTACT</h3>
                    </Link>
                </div>

                <AuthenticationButton text="Login" blue={true}/>
                

            </div>}
        </div>);


    return ((size.width < 960)? navbarMobile : navbarDesk) ;

        
}


export default Navbar;


