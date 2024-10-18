import blue_cube from "../../public/navpage-images/blue_cube.svg"
import green_cube from "../../public/navpage-images/green_cube.svg"
import Image from 'next/image'
import TestComponent from "./testcomponent"
import Link from "next/link";

function Start(){
    
    return(
     <div> 
        <div className= "px-4 md:py-15 lg:py-20 py-10 bg-custom_blue-100">
            <div className="flex flex-col text-center">
                <span className=" xl:text-lg md:text-base lg:text-sm text-xs">Master Your Exam with The Revision Tool </span>
                <span className="mt-3 xl:text-5xl md:text-4xl lg:text-3xl sm:text-2xl text-xl font-bold text-custom_black-500">Start <span className="text-custom_blue-500">Practicing for Exam</span> Success Now </span>
                <h1 className="mt-8 max-w-lg md:max-w-none mx-auto xl:text-lg md:text-base lg:text-sm text-xs text-custom_black-500">Choose the topic you want to focus on and start practicing, you&apos;ll get step-by-step guidance
                    and targeted practice to help you master even the most challenging topics. Simply select your curriculum, subject, and subtopic to get started.
                </h1>
            </div>

            <div className="flex md:flex-row flex-col mt-4 gap-4 md:max-w-none max-w-lg md:mx-0 mx-auto">
                    <TestComponent 
                        subject={"Math"} 
                        heading={"Master IB Math with The Revision Tool"}
                        displayText={"From algebra to calculus, The Revision Tool offers comprehensive practice for IB Math students. Our cutting-edge technology and expert guidance will help you achieve your full potential. Start practicing today!"}
                    />
                    <TestComponent 
                        subject={"Economics"} 
                        heading={"Excel in Economics with The Revision Tool"}
                        displayText={"Whether you're studying micro or macro economics, The Revision Tool has you covered. Our targeted practice and feedback will help you understand even the most complex economic concepts. Start practicing today!"}/>
                    
            </div>
        </div>

        <div className="flex flex-col  rounded-xl border-2 border-black bg-white px-10 py-10">
          <Image
            src={green_cube}
            className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
          ></Image>
          <span className="mt-1 text-base font-bold text-custom_black-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Excel in Economics with The Revision Tool
          </span>
          <span className="mt-6 text-xs text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
            Whether you&apos;re studying micro or macro economics, The Revision
            Tool has you covered. Our targeted practice and feedback will help
            you understand even the most complex economic concepts. Start
            practicing today!
          </span>
          <div className="mt-6 flex gap-4 ">
            <Link href="/economics">
              <button className="rounded-md bg-custom_blue-500 px-2 py-1 text-xs font-semibold text-white sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-10 xl:py-5 xl:text-base">
                Start Practicing
              </button>
            </Link>
            <button className="rounded-md border-2 border-black px-2 py-1 text-xs font-semibold sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-10 xl:py-5 xl:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default Start;
