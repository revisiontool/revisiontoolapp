import React from 'react'
import blue_shirt from "../../public/navpage-images/blue_shirt.svg";
import Image from 'next/image';
import TypeFormPopup from '../popups/typeformpopup';

const ThankYou = () => {
  return (
    <div className="grid grid-cols-1 gap-10  md:grid-cols-2 ">
        <div className="flex flex-col justify-center gap-10">
          <span className="text-xl font-bold text-custom_black-500 sm:text-2xl md:text-4xl lg:text-3xl xl:text-5xl">
            Help Us{" "}
            <span className="text-custom_green-400">Improve Your Learning</span>{" "}
            Experience
          </span>
          <span className="text-xs text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
            We hope this report will help you in your exam preparation. If you
            have any feedback or suggestions on how we can improve, please let
            us know.
          </span>
          <div className="flex w-1/2 flex-col gap-5 sm:flex-row">
              <div className="mt-3 xl:py-5 lg:py-4 md:py-3 sm:py-2 py-1 xl:px-10 lg:px-9 md:px-5 sm:px-3 px-2 xl:text-base lg:text-sm text-xs border-2 border-black rounded-md font-semibold">
                  <TypeFormPopup message="Submit Feedback" id="https://gfyfs726ds2.typeform.com/to/PcTdQPBM"/>
              </div>
          </div>
        </div>

        <div className="flex w-1/2 items-end justify-start md:w-full md:justify-end">
          <Image src={blue_shirt} className="w-3/4 object-cover" />
        </div>
      </div>
  )
}

export default ThankYou