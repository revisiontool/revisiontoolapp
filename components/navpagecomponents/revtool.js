import Image from 'next/image'
import designImage from "../../public/element1.gif"
import mobileImage from '../../public/images/landing-mobile-image.png'

function Revtool(){
    return(
        <div>
            <div className= "flex justify-start lg:mt-32 sm:mt-16 mt-8 lg:ml-20 sm:ml-16 ml-8 px-1">
                <div>
                    <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-custom_black-500 lg:max-w-3xl font-bold">The Revision Tool - The <span className="text-custom_green-400">World’s Most Effective</span> Revision Tool</h1>
                    <h1 className="xl:text-lg lg:text-base md:text-sm text-xs text-custom_black-500 mt-8 max-w-2xl">
                        Revolutionize your learning with The Revision Tool, the most effective way to prepare for your exams. With step-by-step, 
                        targeted practice, you can master any subject and achieve your academic goals. 
                    </h1>
                </div>
                <div className='hidden lg:flex max-w-md'>
                    <Image src={designImage} alt="Design Image"></Image>
                </div>    
                <div className='vsm:hidden visible mt-4'>
                    <Image src={mobileImage} alt="Design Image"></Image>
                </div>  
            </div>
            <div className='h-0.5 max-w-full bg-gray-400 mt-10'></div>
            
            
        </div>
    )
}

export default Revtool;