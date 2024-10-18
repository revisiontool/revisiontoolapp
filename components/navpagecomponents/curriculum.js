import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import Image from 'next/image'
import green_shirt from "../../public/navpage-images/green_shirt.svg"
import blue_shirt from "../../public/navpage-images/blue_shirt.svg"
import TypeFormPopup from "../popups/typeformpopup";
function Curriculum(){
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return(
        <div className="mt-10 lg:mt-20 px-4 md:w-auto w-3/4 mx-auto">
            <div className="text-center flex flex-col">
                <h1 className="text-custom_black-500 xl:text-5xl lg:text-4xl  text-3xl font-bold">Can&apos;t Find Your <span className="text-custom_green-400">Curriculum?</span></h1>
                <h2 className="mt-6 xl:text-lg lg:text-base md:text-sm text-xs text-custom_black-500">We are constantly expanding our library to meet the needs of our users. If you can&apos;t find your curriculum/subject on our platform, please let us know by clicking the button below. We&apos;ll do our best to make it available for you soon!</h2>
            </div>
            <div className="flex justify-center mt-6"> {/*FIX THIS!! */}
                <TextField
                    id="search"
                    type="search"
                    label="Enter the curriculum you’d like to use"
                    value={searchTerm}
                    onChange={handleChange}
                    color=""
                    sx={{ width: 600 }}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            Request Now
                        </InputAdornment>
                    ),
                    }}
                />
            </div>

            <div className="flex md:flex-row flex-col mt-6 gap-4 justify-center">
                <div className="flex flex-row border-2 border-custom_blue-500 rounded-xl">
                    <div className="bg-custom_blue-100 w-1/3 p-1">
                        <Image src={green_shirt} className=""/>
                    </div>
                    <div className="my-auto px-4 py-2 w-2/3">
                        <h1 className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm font-bold text-custom_black-500">We Value Your Feedback!</h1>
                        <h2 className="mt-3 xl:text-base md:text-sm text-xs">We want to hear from you! Your feedback helps us improve our platform and provide better service.</h2>
                        <div className="mt-3 xl:py-5 lg:py-4 md:py-3 sm:py-2 py-1 xl:px-10 lg:px-9 md:px-5 sm:px-3 px-2 xl:text-base lg:text-sm text-xs border-2 border-black rounded-md font-semibold">
                            <TypeFormPopup message="Submit Feedback" id="https://vj6jlebzp6d.typeform.com/to/Ow2ClaTD"/>
                        </div>
                        {/* <div data-tf-live="01HH7ZQTAHXJAC39MY47D19XTC"></div>
                        <script src="//embed.typeform.com/next/embed.js"></script> */}
                    </div>
                </div>

                <div className="flex flex-row border-2 border-custom_blue-500 rounded-xl ">
                    <div className="bg-custom_blue-100 w-1/3 p-1">
                        <Image src={blue_shirt} className=""/>
                    </div>
                    <div className="my-auto px-4 py-2 w-2/3">
                        <h1 className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm font-bold text-custom_black-500">Spread the Word!</h1>
                        <h2 className="mt-3 xl:text-base md:text-sm text-xs">Know someone who can benefit from our platform? Share the love and invite them to join!</h2>
                        <button className="mt-3 xl:py-5 lg:py-4 md:py-3 sm:py-2 py-1 xl:px-10 lg:px-9 md:px-5 sm:px-3 px-2 xl:text-base lg:text-sm text-xs border-2 border-black rounded-md font-semibold">Get Referral Link</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Curriculum;
