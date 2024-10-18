import Image from 'next/image'
import Group1 from '../../public/aboutus-images/Group1.svg'
import circle from '../../public/aboutus-images/circle.svg'
import cylinder from '../../public/aboutus-images/cylinder.svg'
import triangle from '../../public/aboutus-images/triangle.svg'
import style from '../../styles/globalcomponentstyles/heroabout.module.css'
import Popup from '../popups/popup'
import SignUpPopup from '../popups/signuppopup'
import Link from 'next/link'

function Why(){
    return (
        <div className='mt-24 xl:px-32 lg:px-8 md:px-4 w-11/12 lg:w-full mx-auto'>
            <div className='flex flex-row justify-between items-end lg:mb-16'> {/*Why have we created + start free trial */}
                <div className='max-w-2xl'>
                    <p className={`${style.headingfont} text-custom_black-500 font-bold xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl`} >Why have we created The Revision Tool?</p>
                </div>
                <div className='hidden lg:block'>
                    <Link href='/navigation' className='mx-auto xl:mt-8 mt-6'> 
                        <div className='bg-custom_blue-500 w-80 text-center p-4 rounded-lg font-bold lg:text-lg md:text-base text-sm text-white'>Start your free trial!</div>
                    </Link>
                </div>
            </div>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 mt-12'> {/*All Boxes*/}
                
                    <div className='flex flex-col items-start gap-2.5 lg:p-8 p-4 rounded-xl border-2 border-solid border-custom_blue-500 bg-custom_blue-100'> {/*Efficient Revision box*/}
                        <div className='max-w-xs'> {/*Efficient Revision box*/}
                            <Image src={Group1} alt="Logo" className='xl:h-10 xl:w-10 lg:h-8 sm:h-6 sm:w-6 h-4 w-4'></Image>
                            <p className={`${style.subheadingfont} text-custom_black-500 font-semibold xl:text-lg lg:text-base sm:text-sm text-xs xl:mt-0 mt-1 `}>Efficient Revision:</p>
                            <p className={`${style.subheadingfont} text-custom_black-500 font-normal xl:text-lg lg:text-base sm:text-sm text-xs`}>Identify your weak areas and track progress to maximize score improvement</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-2.5 lg:p-8 p-4 rounded-xl border-2 border-solid border-custom_blue-500 bg-custom_blue-100'>
                        <div className='max-w-xs'> {/*Decode Complex Concepts box*/}
                            <Image src={triangle} alt="Logo" className='xl:h-10 xl:w-10 lg:h-8 sm:h-6 sm:w-6 h-4 w-4'></Image>
                            <p className={`${style.subheadingfont} text-custom_black-500 font-semibold xl:text-lg lg:text-base sm:text-sm text-xs xl:mt-0 mt-1`}>Decode Complex Concepts:</p>
                            <p className={`${style.subheadingfont} text-custom_black-500 font-normal xl:text-lg lg:text-base sm:text-sm text-xs`}>The revision tool provides a step-by-step explanation of answers</p>
                        </div>
                    </div>
               
               
                    <div className='flex flex-col items-start gap-2.5 lg:p-8 p-4 rounded-xl border-2 border-solid border-custom_blue-500 bg-custom_blue-100'>
                        <div className='max-w-xs'> {/*Access Resources box*/}
                            <Image src={circle} alt="Logo" className='xl:h-10 xl:w-10 lg:h-8 sm:h-6 sm:w-6 h-4 w-4'></Image>
                            <p className={`${style.subheadingfont} text-custom_black-500 font-semibold xl:text-lg lg:text-base sm:text-sm text-xs  xl:mt-0 mt-1`}>Access Resources:</p>
                            <p className={`${style.subheadingfont} text-custom_black-500 font-normal xl:text-lg lg:text-base sm:text-sm text-xs`}>Our tool has adapted past papers questions from the past 10 years.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-2.5 lg:p-8 p-4 rounded-xl border-2 border-solid border-custom_blue-500 bg-custom_blue-100'>
                        <div className='max-w-xs' > {/*Empower Educators Box*/}
                            <Image src={cylinder} alt="Logo" className='xl:h-10 xl:w-10 lg:h-8 sm:h-6 sm:w-6 h-4 w-4'></Image>
                            <p className={`${style.subheadingfont} text-custom_black-500 font-semibold xl:text-lg lg:text-base sm:text-sm text-xs xl:mt-0 mt-1`}>Empower Educators:</p>
                            <p className={`${style.subheadingfont} text-custom_black-500 font-normal xl:text-lg lg:text-base sm:text-sm text-xs `}>Our tool allows overworked teachers and tutors to save time, improving the quality and delivery of their lessons.</p>
                        </div>
                    </div>
                </div>
            
        </div>
        
    );
}
export default Why;