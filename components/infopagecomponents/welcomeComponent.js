import React from 'react'

export default function WelcomeComponent() {
  return (
    <div className='w-11/12 space-y-10'>
      <div className='mx-auto w-96 text-2xl text-center text-custom_black-500 font-bold'>Welcome to the <span className='text-custom_blue-500'>IBDP Economics</span> question set tool!</div>
      <div className='mx-auto bg-custom_blue-500 text-white w-32 py-2 px-6 font-bold rounded-md text-xs sm:text-base'>Start now</div>
    </div>
  )
}

