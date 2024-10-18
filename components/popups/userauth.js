import style from '../../styles/globalcomponentstyles/signuppopup.module.css'
import background from '../../public/popup-images/signupbackground.png'
import { useState } from 'react'
import {FcGoogle } from "react-icons/fc"
import {FaApple } from "react-icons/fa"

function userauth(){
    // const [name, setName] = useState('');
    // const [email, setEmailAddress] = useState('');
    // const [password, setPassword] = useState('');
    // const [curriculum, setCurriculum] = useState('');
    // const [school, setSchoolName] = useState('');
    // const [location, setLocation] = useState('');

    // const [showPassword, setShowPassword] = useState(false);
    // const toggleShowPassword = () => setShowPassword(!showPassword);
        
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setName('');
    //     setEmailAddress('');
    //     setPassword('');
    //     setCurriculum('');
    //     setSchoolName('');
    //     setLocation('');
    // };

    return(
    // <div className='flex flex-col justify-center items-center px-5 py-2 min-h-full' style={{backgroundImage: `url(${background.src})`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <div className=' min-h-screen flex flex-col justify-start items-center px-5 py-2 my-8'>
        <div className={`font-bold text-custom_black-500 xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-center`}>
            Welcome to <span className='text-custom_green-400'>the Revision Tool </span>Beta!
        </div>
        <div className={` text-custom_black-500 text-center xl:text-lg lg:text-base md:text-sm text-xs max-w-5xl mt-3`}>
            Join our trial and experience a revolutionary way to revise. With personalized past paper practice and progress tracking,
            receive your report and predicted grade now. Available for IBDP Math & Economics.
        </div>

        {/* here will be a sign-in with google button */}
        
        <div className="border-custom_green-400 border flex items-center justify-center rounded-lg w-56 sm:w-80 m-2 p-2 relative top-20">
            <FcGoogle fontSize={40} className="mr-4" />
            <span className='text-sm sm:text-base lg:text-lg'>Sign in with Google</span>
        </div>
        <div className="border-custom_green-400 border flex items-center justify-center rounded-lg w-56 sm:w-80 m-2 p-2 relative top-20">
            <FaApple fontSize={40} className='mr-4'/>
            <span className='text-sm sm:text-base lg:text-lg'>Sign in with Apple</span>
        </div>
        
        {/* <div className=''>

        </div> */}

        {/* Below form is commented out since we are using Google Authentication for now and later, when needed we will use email and password credentials */}
        {/* <div className='flex flex-col border-2 border-black rounded-xl p-6 sm:mt-5 mt-3 max-w-4xl w-full bg-white'>
            <div className='mx-auto sm:w-max w-11/12 sm1:text-center '>
                <p className={`xl:text-2xl lg:text-xl md1:text-lg md:text-base text-sm vsm:leading-7 leading-5`}>To start your trial, please <span className='text-custom_blue-500'>create an account</span> by entering your details below:</p>
            </div>
            
            <form onSubmit={handleSubmit} className='flex flex-col sm:mt-6 mt-3 md:w-full w-11/12 mx-auto'>
                <div className='flex sm:flex-row flex-col md:gap-6 gap-3 w-full justify-center'>
                    <div className= {`${style.formBox} max-w-sm xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs mx-auto`}>
                        <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Name*"
                        required
                        style= {{width: '90%', padding: '2px 10px'}}
                        />
                    </div>
                    <div className= {`${style.formBox} max-w-sm xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs mx-auto`}>
                        <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmailAddress(event.target.value)}
                        placeholder="Email Address*"
                        required
                        style= {{width: '90%', padding: '2px 10px'}}
                        />
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col md:gap-6 gap-3 mt-3 justify-center'>
                    <div className= {`${style.formBox}  flex flex-row items-center justify-between max-w-sm xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs mx-auto`}>
                        <input
                        type= {showPassword ? "text" : "password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password (8+ characters)*"
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
                    <div className= {`${style.formBox} max-w-sm xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs mx-auto`}>
                        <input
                        type="text" //list??
                        value={curriculum}
                        onChange={(event) => setCurriculum(event.target.value)}
                        placeholder="Curriculum of Interest"
                        style= {{width: '90%', padding: '2px 10px'}}
                        />
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col md:gap-6 gap-3 mt-3 justify-center '>
                    <div className= {`${style.formBox} max-w-sm xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs mx-auto`}>
                        <input
                        type="text" 
                        value={school}
                        onChange={(event) => setSchoolName(event.target.value)}
                        placeholder="School Name*"
                        style= {{width: '90%', padding: '2px 10px'}}
                        />
                    </div>
                    <div className= {`${style.formBox} max-w-sm xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs mx-auto`}>
                        <input
                        type="text" 
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        placeholder="Location*"
                        style= {{width: '90%', padding: '2px 10px'}}
                        />
                    </div>
                </div>
                <button type="submit" className='bg-custom_blue-500 w-full max-w-full xl:py-4 py-2 vsm:py-3 rounded-md mt-6 mx-auto'><span className={`${style.buttonfont} xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs `}>Send Request</span></button>
                <div className='text-start mt-3 '>
                    <p className={`${style.loginfont} md:text-lg sm:text-base text-sm`}>Already have an account? 
                        <a href="" target="_blank">
                            <span className='text-custom_green-400'> Login</span>
                        </a>
                    </p>
                </div>
            </form>
            
            
            
        </div> */}
    </div>
    )
}
export default userauth;