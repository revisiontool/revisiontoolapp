import style from '../../styles/globalcomponentstyles/signuppopup.module.css'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa"
import background from '../../public/popup-images/loginbackground.png'
import chatbox from '../../public/popup-images/chatbox.svg'
import rise from '../../public/popup-images/rise.svg'
import Image from 'next/image'
function Login(){
    const [email, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        setEmailAddress('');
        setPassword('');
  };
    return(
        /* I have taken out background picture temporarily */
        // <div className='flex flex-col justify-center items-center vsm:pb-12 pb-6  mt-3 px-3' style={{backgroundImage: `url(${background.src})`, backgroundPosition: '50% 80%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className='flex flex-col justify-center items-center vsm:pb-12 pb-6  mt-3 px-3'>
            <div className={` font-bold my-8 xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center bg-white`}>
                <p>Welcome Back!</p>
            </div>
            <div className='flex flex-col border-2 border-black rounded-xl sm:px-6 px-3 py-2 mt-5 max-w-xl w-11/12 esm:w-96 lg:w-full items-start bg-white z-20'>
                <div className='mt-3'>
                    <p className={`font-semibold xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm`}>Enter your email and password to access your account and question sets.</p>
                </div>
                <div className='sm:mt-6 mt-3 w-full'>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className='flex flex-col md:gap-6 gap-3 '>
                            
                            <div className= {`${style.formBox} w-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs`}>
                                <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmailAddress(event.target.value)}
                                placeholder="Email Address*"
                                required
                                style= {{width: '90%', padding: '2px 10px'}}
                                />
                            </div>
                        
                            <div className= {`${style.formBox} w-full flex flex-row items-center justify-between xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs`}>
                                <input
                                type= {showPassword ? "text" : "password"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Password*"
                                required
        
                                style= {{width: '90%', padding: '2px 10px'}}
                                />
                                <div className= 'items-end'>
                                    {showPassword ? (
                                        <FaEyeSlash onClick={toggleShowPassword} />
                                    ) : (
                                        <FaEye onClick={toggleShowPassword} />
                                    )}
                                </div>
                            </div>
                            
                        </div>

                        <div className='text-start w-full sm:mt-3 mt-2'>
                            <p className={`${style.passwordfont} xl:text-base md:text-sm text-xs`} style={{color: 'rgba(55, 58, 58, 0.7)'}}>Forgot your password?  
                                <a href="" target="_blank"> <span className='text-custom_blue-500 underline'>Click here to reset it</span></a>
                            </p>
                            <p className={`${style.passwordfont} xl:text-base md:text-sm text-xs sm:mt-6 mt-3 `} style={{color: 'rgba(55, 58, 58, 0.7)'}}>By logging in, you agree to our Terms and Conditions and Privacy Policy.</p>
                        </div>
                        <button type="submit" className='bg-custom_blue-500 w-full max-w-2xl py-4 rounded-md mt-6'><span className={`${style.buttonfont}`}>Login</span></button>
                    </form>
                    <div className='text-start w-full sm:mt-3 mt-2'>
                        <span className={`${style.loginfont} md:text-lg sm:text-base text-xs`}>New to The Revision Tool?&nbsp;
                            <a href="" target="_blank">
                                <span className='text-custom_green-400 underline'>Sign up now</span>
                            </a>
                        </span>
                    </div>
                </div>
                
            </div>
            <Image className='absolute vsm:w-20 w-14 bottom-1/10 right-1/10 z-10 vsm:hidden' src={chatbox}/>
            <Image className='absolute vsm:w-28 w-14 top-1/10 left-1/10 z-10 vsm:hidden' src={rise}/>
        </div>
    )
}
export default Login;