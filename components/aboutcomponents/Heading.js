import style from '../../styles/globalcomponentstyles/heroabout.module.css'
import bg_image from '../../public/images/aboutus-hero-bg.png'
import Link from 'next/link';

function Heading(){
    
    return (
        <div className='py-3' style={{backgroundImage:`url(${bg_image.src})`, height:'100%', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className={`${style.heading} xl:p-3 px-3`} >
                <div className={`${style.heading} xl:mt-40 lg:mt-28 md:mt-20 mt-16`}> {/*Heading*/}
                    <p className={`${style.headingfont} xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold text-center text-custom_black-500`}>Practice Made <span className='text-custom_green-400'>Perfect</span>.</p>
                    
                    <h5 className={`${style.subheadingfont} font-normal md:w-7/12 leading-5 lg:text-base md:text-sm text-xs text-center xl:text-2xl text-custom_black-500`}>Welcome to The Revision Tool, the top study aid for exam prep. Our team helps students succeed. 
                    </h5>
                </div>
                <div className='md:mt-4'> {/*Button*/}
                    <Link href='/navigation' className='mx-auto xl:mt-8 mt-6'> 
                        <div className='bg-custom_blue-500 w-auto lg:w-80 text-center p-4 rounded-lg font-bold lg:text-lg md:text-base text-sm text-white'>Get Started- It&apos;s Free</div>
                    </Link>
                </div> 
                <div className='xl:mt-64 mt-32'> {/*Link*/}
                    <Link href="/navigation">
                        <span className={`text-indigo-600 font-bold xl:text-xl lg:text-lg md:text-base text-sm leading-5 underline`}>Discover more</span>
                    </Link>
                </div>
            </div>
            
        </div>

    );
}
export default Heading;