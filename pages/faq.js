import React from 'react'
import ControlledAccordions from '../components/faqcomponents/accordion'
import styles from '../styles/globalcomponentstyles/faq.module.css'
import Image from 'next/image'
import chatbox from '../public/referral-popup-images/chatbox.svg'
import triangle from '../public/referral-popup-images/triangle.svg'

export default class FAQ extends React.Component {


    render() {
        return (
        <div>
            <div className={`${styles.textbox} w-full lg:w-10/12 relative sm:my-16 my-8 flex flex-column items-center mx-auto`}>
                <div className={`text-center mx-auto text-custom_black-500 font-bold flex items-center align-middle`} >
                THE REVISION TOOL FAQ
                </div>
                <div className={`text-center mx-auto text-custom_black-500 sm:text-6xl text-3xl font-bold flex items-center align-middle`}>
                Your Guide to Using the Platform.
                </div>
                <Image src={chatbox} className='sm4:hidden w-16 absolute right-0 top-0'/>
                <Image src={triangle} className='sm4:hidden w-16 absolute left-0 top-0'/>
            </div>
            <ControlledAccordions/>
        </div>)
    }
}