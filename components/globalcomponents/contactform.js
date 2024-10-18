import React from 'react'
import FormImage from "../../public/images/form-image.png"
import Image from 'next/image'
import { Button, TextField } from '@mui/material'


export default class ContactForm extends React.Component {

    static async getInitialProps(){
      return {}
    }

    render() {
        return (
            <div className='relative w-11/12 sm:w-10/12 md:w-9/12 mx-auto mb-2 mt-6 sm:mt-20'>
                <div className='flex flex-col items-center gap-2'>
                    <h3 className="text-custom_black-500 font-bold text-center text-xl sm:text-3xl lg:text-5xl">Have questions or need support?</h3>
                    <p className="font-light text-xs text-center">Contact us through our form and we will be happy to assist.</p>
                </div>
                <div className='flex flex-col-reverse lg:flex-row items-center my-4'>
                    <Image src={FormImage} alt="Graphic Design Image" className='w-10/12 md:w-1/2'/>
                    <div className='flex w-full sm3:w-10/12 md:w-1/2 flex-col gap-2'>
                        <p className='font-bold my-2 text-custom_black-500'>Your details</p>
                        <div className='flex flex-row gap-2 sm:gap-10'>
                            <TextField className='w-1/2' id="first-name" label="First Name" variant="outlined" />
                            <TextField className='w-1/2' id="last-name" label="Last Name" variant="outlined" />
                        </div>
                        <TextField className='w-full' id="email" label="Email" variant="outlined" />
                        <p className='font-bold my-2'>Types of enquiry</p>

                        <div className='flex flex-row flex-wrap gap-2 text-xs'>
                            <div className='whitespace-nowrap w-min py-2 px-0 vsm:px-4 rounded bg-custom_grey-100 text-custom_black-500'>Feedback and suggestions</div>
                            <div className='whitespace-nowrap w-min py-2 px-0 vsm:px-4 rounded bg-custom_grey-100 text-custom_black-500'>Investment and partnership opportunities</div>
                            <div className='whitespace-nowrap w-min py-2 px-0 vsm:px-4 rounded bg-custom_grey-100 text-custom_black-500'>General enquiries and interest</div>
                            <div className='whitespace-nowrap w-min py-2 px-0 vsm:px-4 rounded bg-custom_grey-100 text-custom_black-500'>Technical support and assistance</div>
                        </div>

                        <div className='flex flex-col gap-2 w-full'>
                            <p className='font-bold text-custom_black-500'>Your message</p>
                            <TextField className='w-full' id="subject" label="Subject" variant="outlined" />
                            <TextField className='w-full' multiline rows={4} id="message" label="Type your message..." variant="outlined" />

                            <button className={`px-8 py-4 w-48 font-bold rounded bg-custom_grey-100 text-custom_grey-300 my-2`}>Send Request</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
