import style from '../../styles/globalcomponentstyles/referralpopup.module.css'
import Image from 'next/image'
import blue_cube from '../../public/referral-popup-images/blue_cube.svg'
import chatbox from '../../public/referral-popup-images/chatbox.svg'
import circle from '../../public/referral-popup-images/circle.svg'
import cube from '../../public/referral-popup-images/cube.svg'
import fx from '../../public/referral-popup-images/fx.svg'
import root from '../../public/referral-popup-images/root.svg'
import triangle from '../../public/referral-popup-images/triangle.svg'

function ReferralPopupContent(){
    return(
        <div className='flex flex-col justify-center items-center lg1:px-32 px-5 max-w-full min-h-full py-10'  >
            
            <div className="items-center text-center max-w-screen-xl z-50" >
                <p className={`${style.headingfont} xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl leading-none`}>Want to gain exclusive access to the <span className='text-custom_green-400'>full version</span> of the revision tool before launch?</p>
            </div>
            <div className="items-center text-center mt-8 z-50">
                <p className={`${style.subheadingfont} xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs vsm:leading-7 leading-6`}>Sign up for early access to The Revision Tool and get a one week free trial on launch. Get an extra week of free access for each friend referred.</p>
            </div>
            <div className='flex md1:flex-row flex-col items-center justify-center md1:gap-12 gap-6 mt-10 w-full z-50'> {/*Buttons*/}
                <button className={`${style.waitlistbutton} bg-custom_green-400`}> 
                    <span className={`font-bold xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-white`}>Join the waitlist!</span>
                </button>
                <button className={`${style.friendbutton} bg-custom_blue-500`}>
                    <span className={`font-bold xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-white`}>Refer a friend and earn rewards!</span>
                </button>
            </div>
            <Image className='absolute xl:w-12 lg:w-10 md:w-10 sm:w-10 w-6  top-1/10 left-6/10 z-30' src={blue_cube}/>
            <Image className='absolute xl:w-24 lg:w-20 md:w-18 sm:w-16 w-12  top-0 left-1/2 z-20' src={chatbox}/>
            <Image className='absolute xl:w-48 lg:w-40 md:w-36 sm:w-32 w-16  top-2/3 right-0 z-20' src={circle}/>
            <Image className='absolute xl:w-10 lg:w-8 md:w-8 sm:w-8 w-6  top-8/10 left-1/20 z-20' src={cube}/>
            <Image className='absolute xl:w-16 lg:w-12 md:w-12 sm:w-12 w-10  top-9/10 left-6/10 z-20' src={fx}/>
            <Image className='absolute xl:w-12 lg:w-10 md:w-8 sm:w-8 w-6  top-1/20 left-1/4 z-20' src={root}/>
            <Image className='absolute xl:w-16 lg:w-12 md:w-12 sm:w-12 w-8  bottom-1/20 left-1/10 z-20' src={triangle}/>
        </div>
    )
}
//style={{backgroundImage: `url(${background.src})`, backgroundPosition: 'left top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
export default ReferralPopupContent;