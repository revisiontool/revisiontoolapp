import Image from 'next/image'
import React from 'react'

import vector1 from '../../public/vectors/info-instructions-vector1.svg'
import vector2 from '../../public/vectors/info-instructions-vector2.svg'
import vector3 from '../../public/vectors/info-instructions-vector3.svg'
import vector4 from '../../public/vectors/info-instructions-vector4.svg'
import vector5 from '../../public/vectors/info-instructions-vector5.svg'


export default function Instructions() {


    let class_head = 'text-base sm:text-xl text-custom_black-500 font-bold'

    return (
        <div className='my-6'>
            <div className='flex flex-col xl:flex-row lg:mx-24 justify-between space-y-10 space-x-0 lg:space-x-20'>
                <div className='mx-auto w-10/12 lg:w-8/12 xl:w-6/12 space-y-6 xl:space-y-6'>
                    {/* Using and stuff will go here */}
                    <span className='text-sm'>INSTRUCTIONS FOR USING</span>
                    <h2 className='text-custom_black-500 text-xl sm:text-3xl font-bold'>Before you begin, please take note of the following <span className='text-custom_green-400'>instructions</span> on how to use the tool:</h2>
                    <div className='bg-custom_blue-500 text-white w-32 py-2 px-6 font-bold rounded-md text-xs sm:text-base'>Start now</div>
                </div>
                <div className='mx-auto w-10/12 sm:w-9/12 xl:w-6/12'>
                    <div className='flex flex-col md:flex-row items-start space-x-4'>
                        <Image src={vector1} alt="Display vector" className='my-2 mx-4 w-6 sm:w-8'/>
                        <div className='py-2 space-y-2'>
                            <h3 className={class_head}>Purpose of the question set</h3>
                            <p className='text-custom_black-500 font-normal sm:font-light text-xs sm:text-base'>Each question set is designed to test your understanding of specific learning objectives within the syllabus, as well as guide you through the process of finding the correct response.</p>
                        </div>    
                    </div>
                    <div className='flex flex-col md:flex-row items-start space-x-4'>
                        <Image src={vector2} alt='Display vector' className='my-2 mx-4 w-6 sm:w-8'/>
                        <div className='py-2 space-y-2'>
                            <h3 className={class_head}>Types of questions</h3>
                            <p className='text-custom_black-500 font-normal sm:font-light text-xs sm:text-base'>The question set will include a variety of question types, such as multiple choice, short answer, and extended response questions.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-start space-x-4'>
                        <Image src={vector3} alt='Display vector' className='my-2 mx-4 w-6 sm:w-8'/>
                        <div className='py-2 space-y-2'>
                            <h3 className={class_head}>Report generation</h3>
                            <p className='text-custom_black-500 font-normal sm:font-light text-xs sm:text-base'>Once the practice is complete, the tool will generate a report that includes key statistics about your practice, including your predicted grade, and details about which learning objectives you need to review based on the questions you got wrong. Please note that the report and predicted grade will only be generated once the question set is complete.</p>
                        </div>    
                    </div>
                    <div className='flex flex-col md:flex-row items-start space-x-4'>
                        <Image src={vector4} alt='Display vector' className='my-2 mx-4 w-6 sm:w-8'/>
                        <div className='py-2 space-y-2'>
                            <h3 className={class_head}>Progress saving</h3>
                            <p className='text-custom_black-500 font-normal sm:font-light text-xs sm:text-base'>It is recommended to complete the question set in one sitting, but if you are unable to do so, you can save your progress and return to the question set at a later time.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-start space-x-4'>
                        <Image src={vector5} alt='Display vector' className='my-2 mx-4 w-6 sm:w-8'/>
                        <div className='py-2 space-y-2'>
                            <h3 className={class_head}>First attempt count</h3>
                            <p className='text-custom_black-500 font-normal sm:font-light text-xs sm:text-base'>The tool will only count your first answer attempt in the calculation of your predicted grade and in the report which will be generated once the question set is completed.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

