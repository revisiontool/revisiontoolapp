import style from '../../styles/globalcomponentstyles/heroabout.module.css'
import pic from '../../public/aboutus-images/group27.jpg'
import cube from '../../public/aboutus-images/cube.svg'

import Image from 'next/image'
function Founders(){
    return (
            <div className='bg-gray-200 xl:py-16 xl:px-32 lg:px-8 md:px-4 sm:px-16 sm:py-8 py-4 '>
                <div className='mx-auto w-11/12 flex md:flex-row flex-col justify-around items-center md:w-auto'>
                    <div className=' xl:max-w-lg lg:max-w-md md:max-w-xs'>
                        <p className={`${style.subheadingfont} text-custom_black-500 font-normal xl:text-2xl xl:leading-10 lg:text-lg lg:leading-9 sm:text-sm md:leading-8 sm:leading-7 text-xs leading-5`}>
                            Our <span className='text-custom_green-400'>founders, Jay and Nish,</span> bring over 20 years of combined 
                            experience within the education space to 
                            The Revision Tool.
                        </p>
                        <p className={`${style.subheadingfont} text-custom_black-500 font-normal xl:text-2xl xl:leading-10 lg:text-lg lg:leading-9 sm:text-sm md:leading-8 sm:leading-7 text-xs leading-5`}>
                            Working with <span className='text-custom_green-400'>thousands of students </span>and
                            <span className='text-custom_green-400'> tutors</span> inspired them to create an 
                            innovative solution for students globally.
                        </p>
                    </div>
                    <div className='xl:max-w-2xl lg:max-w-lg md:max-w-sm xl:ml-10 lg:ml-5 md:ml-5 mt-2 xl:h-60 h-40 overflow-hidden border-2 border-black rounded' >
                            <Image className='object-left object-cover max-h-full' src={pic} alt="Logo"></Image>
                    </div>
                    
                </div>

                <div className='h-0.5 max-w-full bg-gray-400 mt-10'></div> {/*Line*/}

                <div className='flex md:flex-row flex-col md:justify-around mt-8 mx-auto md:w-full w-11/12'>
                    <div className='flex flex-row xl:gap-2 md:gap-1 gap-1 items-center xl:max-w-lg lg:max-w-md md:max-w-xs md:w-full'> {/*Logo + our mission */}
                        <div className=''> {/*Logo*/}
                            <Image className='xl:h-10 xl:w-10 lg:h-8 sm:h-6 sm:w-6 h-4 w-4' src={cube} alt="Logo"></Image> {/*Change to SVG */}
                        </div>
                        <div className='max-w-2xl'> {/*our mission */}
                            <p className={`${style.subheadingfont} text-custom_black-500 tracking-tighter font-bold xl:text-xl lg:text-lg text-sm`}>Our mission</p>
                        </div>
                    </div>
                    <div className='xl:max-w-2xl lg:max-w-lg md:max-w-sm lg:mt-5 mt-2'>
                        <p className={`${style.missionfont} text-custom_black-500 font-normal xl:text-lg lg:text-base text-sm`}>Our mission is to revolutionize revision by creating an effective digital experience for students and educators worldwide.</p>
                    </div>
                </div>
            </div>

    );
}
export default Founders;