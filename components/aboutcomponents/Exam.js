import style from '../../styles/globalcomponentstyles/heroabout.module.css'
import Image from 'next/image'
import topbar from '../../public/vectors/topmenu.svg'
import square from '../../public/aboutus-images/Square.svg'
import triangle from '../../public/aboutus-images/triangle.svg'

function Exam(){
    return (
        <div className='mt-8'>
            <div className='flex md:flex-row flex-col items-center md:justify-around justify-center xl:px-32 lg:px-8 md:px-4 w-11/12 lg:w-full mx-auto'>
                <div className='md:order-1 order-2 pt-3 md:pt-0'>
                    <div className='relative pb-56 sm:pb-64 lg:pb-96 w-full xl:max-w-2xl lg:max-w-xl md:max-w-lg bg-white border-2 border-custom_grey-100'>
                        <Image src={topbar}/>
                        <Image className='absolute w-8  md:hidden -top-2 right-20 sm:right-30 z-20' src={square}/>
                        <Image className='absolute w-8  md:hidden -top-4 right-10 sm:right-12 z-20' src={triangle}/>
                    </div>
                    <div className='mt-10'> {/*our tool breaks down*/}
                        <p className={`${style.subheadingfont} text-custom_black-500 font-normal xl:text-2xl xl:leading-10 lg:text-xl sm:text-base text-xs xl:max-w-2xl lg:max-w-xl md:max-w-lg max-w-full text-left`}>
                        Our tool breaks every question down in to micro steps,
                        designed to test your understanding of the key concepts 
                        required for academic success. All questions are linked to 
                        learning objective identified from decades of past papers 
                        making the revision tool a must for students. Watch the 
                        perfect answer being built in front of your eyes as you work 
                        through each question.
                        </p>
                    </div>
                </div>
                <div className='xl:max-w-md md:max-w-xs xl:ml-32 lg:ml-0 md:ml-16 lg:max-w-xs  md:order-2 order-1'> {/*The revision tool*/} 
                    <p className={`${style.headingfont} text-custom_black-500 font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl sm2:text-3xl text-2xl sm:leading-10 leading-8`}>
                        The Revision
                        Tool predicts
                        <span className='text-custom_green-400'> exam </span> 
                        <span className='text-custom_green-400'>performance</span>, 
                        guides students to
                        <span className='text-custom_green-400'> better </span>
                        <span className='text-custom_green-400'>answers</span>, and
                        <span className='text-custom_green-400'> removes </span>
                        <span className='text-custom_green-400'>anxiety.</span>
                    </p>
                </div>
            </div>
        </div>

    );
}
export default Exam;