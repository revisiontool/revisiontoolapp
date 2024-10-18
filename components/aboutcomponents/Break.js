import style from '../../styles/globalcomponentstyles/heroabout.module.css'
import personvector from "../../public/vectors/person-vector.svg"
import boxesvector from "../../public/vectors/request-boxes.svg"
import Image from 'next/image';
import Link from 'next/link';

function Break(){
    return (
        <div className='relative bg-custom_grey-100 md1:py-32 py-16 px-3 flex flex-col md1:items-center'>
        
            <div className={`text-center`}>
                <h1 className={`${style.headingfont} text-custom_black-500 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold`}>The <span className='text-custom_green-400'>Revision </span>Tool</h1>
            </div>
            <div className='flex flex-col md1:flex-row justify-between md1:gap-8 gap-2 xl:mt-8 mt-6'> {/*All Boxes */}
                <div className='bg-custom_blue-100 rounded-3xl px-3 py-2 text-center mx-auto'>
                    <p><span className={`${style.subheadingfont} font-medium xl:text-lg lg:text-base md:text-sm text-xs  text-custom_blue-500`}>Guided Past Paper Practice</span></p>
                </div>
                <div className='bg-custom_green-600 rounded-3xl p-2 text-center mx-auto'>
                    <p><span className={`${style.subheadingfont} font-medium xl:text-lg lg:text-base md:text-sm text-xs text-custom_green-400`}>Current Score Prediction</span></p>
                </div>
                <div className='bg-custom_blue-100 rounded-3xl p-2 text-center mx-auto'>
                    <p><span className={`${style.subheadingfont} font-medium xl:text-lg lg:text-base md:text-sm text-xs text-custom_blue-500`}>Build Exam Technique</span></p>
                </div>
                <div className='bg-custom_green-600 rounded-3xl p-2 text-center mx-auto'>
                    <p><span className={`${style.subheadingfont} font-medium xl:text-lg lg:text-base md:text-sm text-xs text-custom_green-400`}>Identify Weak Areas</span></p>
                </div>
            </div>

            <div className='text-center xl:mt-8  mt-6'>
                <p><span className={`${style.subheadingfont} text-custom_black-500 font-normal xl:text-2xl lg:text-xl sm:text-lg text-sm`}>Break free from revision roadblocks with The Revision Tool</span></p>
            </div>

            <Link href='/navigation' className='mx-auto xl:mt-8 mt-6'> 
                <div className='bg-custom_blue-500 w-auto lg:w-80 text-center p-2 lg:p-4 rounded-lg font-bold lg:text-lg md:text-base text-sm text-white'>Sign Up for Early Access</div>
           </Link>
            <Image alt='graphic vector 1' src={boxesvector} className='w-12 sm:w-20 md:w-24 lg:w-28 xl:w-32 absolute top-4 sm:top-32 left-5 sm:left-10 md:left-32 mob1:hidden'/>
            <Image alt='graphic vector 2' src={personvector} className='absolute -bottom-5 right-4 sm:right-20 md:right-32 w-16 sm:w-28 md:w-32 lg:w-40 xl:w-48 z-20'/>
        </div>
       

    );
}
export default Break;