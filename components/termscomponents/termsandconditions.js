import React from 'react'
import style from '../../styles/globalcomponentstyles/terms.module.css'
import termsImage from "../../public/images/terms-image.png"
import Image from 'next/image'


export default function Termsandconditions () {
  return (
    <div className='flex flex-col items-center'>
        <div className={`${style.headsection} p-4 items-center mx-auto flex md:flex-row flex-col`}>
            <div className={`${style.division1} mx-3 sm:my-3 my-2 flex flex-col`}>
                <h1 className={`${style.heading} md:text-7xl sm:text-5xl text-2xl`}>Terms and conditions</h1>
                <p className={`${style.text1} font-light md:mb-0 mb-5 sm:mt-4 mt-0 md:text-lg sm:text-base text-xs sm:leading-9 leading-5`}>
                Welcome to <span className='text-custom_green-400'>The Revision Tool</span> Concept Test website (the &quot;Website&quot;). By accessing or using the Website, you agree to be bound by the following terms and conditions (the &quot;Terms and Conditions&quot;). If you do not agree to these Terms and Conditions, you may not access or use the Website.
                </p>
            </div>
            <Image src={termsImage} alt="animation image" className={`${style.termsImage}`}/>
        </div>

        <div className={`${style.websiteUse} sm:mx-auto mx-4 sm:-mt-14 mt-1`}>
            <h2 className='text-custom_green-400 md:text-lg sm:text-base text-sm'>USE OF THE WEBSITE</h2><br/>
            <div className='font-light sm:text-base text-xs leading-4 sm:leading-7'>You may use the Website for lawful purposes only. You may not use the Website:<br/>
                <ul>
                    <li> &#x2022; In any way that breaches any applicable local, national or international law or regulation.</li>
                    <li> &#x2022; In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.</li>
                    <li> &#x2022; For the purpose of harming or attempting to harm minors in any way.</li>
                    <li> &#x2022; To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards.</li>
                    <li> &#x2022; To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material or any other form of similar solicitation (spam).</li>
                    <li> &#x2022; To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</li>
                </ul>
                <ul>
                    <br/>
                    You also agree:<br/>
                    <li> &#x2022; Not to reproduce, duplicate, copy or re-sell any part of the Website in contravention of the provisions of these Terms and Conditions.</li>
                    <li> &#x2022; Not to access without authority, interfere with, damage or disrupt:</li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;any part of the Website;</li> 
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;any equipment or network on which the Website is stored;</li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;any software used in the provision of the Website;</li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;any equipment or network or software owned or used by any third party.</li>
                </ul>
            </div>
            
        </div>
        <br/>
        
        <div className={`${style.websiteUse} sm:mx-auto mx-4 mt-4`}>
            <h2 className='text-custom_green-400 md:text-lg sm:text-base text-sm'>INTELLECTUAL PROPERTY RIGHTS</h2><br/>
            <div className='font-light sm:text-base text-xs leading-4 sm:leading-7'>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved. You may view, download for caching purposes only, and print pages from the Website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
            <br/><br/>

                You must not:<br/>
                <ul>
                    <li> &#x2022; republish material from this website (including republication on another website);</li>
                    <li> &#x2022; sell, rent or sub-license material from the website;</li>
                    <li> &#x2022; show any material from the website in public;</li>
                    <li> &#x2022; reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose;</li>
                    <li> &#x2022; edit or otherwise modify any material on the website; or</li>
                    <li> &#x2022; redistribute material from this website except for content specifically and expressly made available for redistribution.</li>
                </ul>
                <br/>
                Where content is specifically made available for redistribution, it may only be redistributed within your organisation.
            </div>
            
        </div>

        <div className={`${style.websiteUse} sm:mx-auto mx-4 mt-4`}>
            <h2 className='text-custom_green-400 md:text-lg sm:text-base text-sm'>ACCEPTABLE USE</h2><br/>
            <div className='font-light sm:text-base text-xs leading-4 sm:leading-7'>
            You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
            </div>
            
        </div>
        

    </div>
  )
}
