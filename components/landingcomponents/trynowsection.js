import React from 'react'
import style from '../../styles/globalcomponentstyles/heroabout.module.css'
import bg_image from '../../public/images/TryNow_Background.jpg'
import triangle from '../../public/vectors/triangle.png'
import vector from '../../public/vectors/vector.png'
import Popup from '../popups/popup'
import SignUpPopup from '../popups/signuppopup'
import style1 from '../../styles/globalcomponentstyles/heroabout.module.css'
import {useWindowSize} from '../../components/landingcomponents/curriculum'
import Image from 'next/image'
import Link from 'next/link'

function Trynowsection() {

    var windowSize = useWindowSize();

  return (
    (windowSize.width >= 480) ? (
        <div className="w-full relative">
            <div className='w-10/12 sm:w-8/12 border-2 border-custom_black-500 rounded-lg mx-auto my-16' style={{backgroundImage:`url(${bg_image.src})`, height:'65%', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                <div className='flex flex-col items-center gap-8 py-16 sm:py-24 md:py-32 lg:py-48'>
                    <h4 className='text-white text-3xl lg:text-5xl font-bold'>Practice Made Perfect.</h4>
                    <Link href='/authentication' className='xl:mt-8 mt-6'> 
                        <div className='bg-custom_green-400 py-3 px-10 rounded-md font-bold text-lg mob:text-sm text-white'>Try it now</div>
                    </Link>
                </div>
            </div>
            <Image src={vector} className='w-24 md:w-32 absolute lg:left-16 -top-20 sm:-top-10 lg:top-0 z-10'/>
            <Image src={triangle} className='w-24 md:w-32 absolute -bottom-24 right-20'/>
            
        </div>
    ):(
        <div className='relative w-full my-12'>
            <div className='flex flex-col items-start mx-4 gap-4'>
                <h4 className=' text-custom_black-500 text-3xl font-bold'>Practice<br/>Made Perfect.</h4>
                <Image src={bg_image} className='w-full border-2 rounded-lg border-custom_black-500'/>
                <Link href='/authentication' className='xl:mt-8 mt-6'> 
                    <div className='bg-custom_green-400 py-4 px-4 rounded-md font-bold text-xs text-white'>Try it now</div>
                </Link>
            </div>
            <Image src={vector} className='w-24 absolute right-12 -top-12'/>
            <Image src={triangle} className='w-20 absolute -bottom-8 right-12'/>
        </div>
    )
  )
}

export default Trynowsection