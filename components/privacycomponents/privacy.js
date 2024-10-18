import React from 'react'
import privacyImage from '../../public/images/privacy-image.png'
import style from '../../styles/globalcomponentstyles/privacy.module.css'
import Image from 'next/image'

function Privacy() {
  return (
    <div className='flex flex-col items-center m-8'>
        <div className={`${style.headsection} p-4 items-center mx-auto flex md:flex-row flex-col`}>
            <div className={`${style.division1} mx-3 sm:my-3 my-2 flex flex-col`}>
                <h1 className={`${style.heading} md:text-7xl sm:text-5xl text-2xl`}>Privacy Policy</h1>
                
                <p className={`${style.text1} font-light md:mb-0 mb-2 sm:mt-8 mt-6 md:text-lg sm:text-base text-xs sm:leading-9 leading-5`}>
                    At The Revision Tool, we take the privacy of our users seriously. We understand that the personal information you provide to us is important and we want to ensure that it is protected and used responsibly.
                </p>

                <p className={`${style.text1} font-light md:mb-12 mb-10 sm:mt-8 mt-6 md:text-lg sm:text-base text-xs sm:leading-9 leading-5`}>
                    This Privacy Policy explains how we collect, use, disclose, and protect your personal information. By using our website, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
                </p>

            </div>
            <Image src={privacyImage} alt="animation image" className={`${style.privacyImage}`}/>
        </div>

        <div className={`${style.websiteUse} sm:mx-auto mx-2 sm:-mt-14 mt-1`}>
            <h2 className='text-custom_blue-500 md:text-lg sm:text-base text-sm'>INFORMATION WE COLLECT</h2><br/>
            <div className='font-light sm:text-base text-xs leading-4 sm:leading-7 mb-10'>
                <p className={`font-light md:mb-0 mb-2 sm:my-6 mt-0 md:text-lg sm:text-base text-xs sm:leading-9 leading-5`}>
                We may collect personal information from you when you use our website, including but not limited to your name, email address, and curriculum/subject of interest. We may also collect information about your use of our website, including but not limited to your browsing history and the pages you access.
                </p>
            </div>

            <h2 className='text-custom_blue-500 md:text-lg sm:text-base text-sm'>USE OF INFORMATION</h2><br/>
            <div className='font-light sm:text-base text-xs leading-4 sm:leading-7 mb-10'>
                <p className={`font-light md:mb-0 mb-2 sm:my-6 mt-0 md:text-lg sm:text-base text-xs sm:leading-9 leading-5`}>
                    We may use the personal information we collect to provide you with access to our question sets, respond to your inquiries, and improve our website and services. We may also use your personal information to contact you with information about our services and promotions.
                </p>
            </div>

            <h2 className='text-custom_blue-500 md:text-lg sm:text-base text-sm'>DISCLOSURE OF INFORMATION</h2><br/>
            <div className='font-light sm:text-base text-xs leading-4 sm:leading-7 mb-10'>
                <p className={`font-light md:mb-0 mb-2 sm:my-6 mt-0 md:text-lg sm:text-base text-xs sm:leading-9 leading-5`}>
                    We will not disclose your personal information to any third parties without your consent, except as required by law or as necessary to provide you with our services.
                </p>
            </div>

            <h2 className='text-custom_blue-500 md:text-lg sm:text-base text-sm'>SECURITY OF INFORMATION</h2><br/>
            <div className='font-light sm:text-base text-xs leading-4 sm:leading-7 mb-10'>
                <p className={`font-light md:mb-0 mb-2 sm:my-6 mt-0 md:text-lg sm:text-base text-xs sm:leading-9 leading-5`}>
                We take reasonable steps to protect the personal information we collect from unauthorized access, use, or disclosure. However, no method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.    
                </p>
            </div>

            <h2 className='text-custom_blue-500 md:text-lg sm:text-base text-sm'>CHANGES TO PRIVACY POLICY</h2><br/>
            <div className='font-light sm:text-base text-xs leading-4 sm:leading-7 mb-10'>
                <p className={`font-light md:mb-0 mb-2 sm:my-6 mt-0 md:text-lg sm:text-base text-xs sm:leading-9 leading-5`}>
                    We reserve the right to modify this Privacy Policy at any time. Any changes to this Privacy Policy will be effective immediately upon posting on our website.    
                </p>
            </div>
            
            <h2 className='text-custom_blue-500 md:text-lg sm:text-base text-sm'>CONTACT US</h2><br/>
            <div className='font-light sm:text-base text-xs leading-4 sm:leading-7 mb-10'>
                <p className={`font-light md:mb-0 mb-2 sm:my-6 mt-0 md:text-lg sm:text-base text-xs sm:leading-9 leading-5`}>
                If you have any questions or concerns about our Privacy Policy, please contact us at support@therevisiontool.com.
                </p>
            </div>
            
            <div className='font-light sm:text-base text-xs leading-4 sm:leading-7 mb-5'>
                <p className={`font-light md:mb-0 mb-2 sm:my-2 mt-0 md:text-lg sm:text-base text-xs sm:leading-9 leading-5`}>
                    Thank you for using The Revision Tool. We value your trust and are committed to protecting your personal information.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Privacy