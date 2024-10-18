import Link from "next/link"; // Import the Link component
import blue_cube from "../../public/navpage-images/blue_cube.svg";
import Image from "next/image";

function TestComponent({ subject, heading, displayText }) {
  return (
    <div className="flex flex-col rounded-xl border-2 border-black bg-white px-10 py-10">
      <Image
        src={blue_cube}
        className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
      ></Image>
      <span className="mt-1 text-base font-bold text-custom_black-500 sm:text-lg md:text-2xl">
        {heading}
      </span>
      <span className="mt-6 text-xs text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
        {displayText}
      </span>
      <div className="mt-6 flex gap-4 ">
        <Link href={`/${subject}`}>
          <button className="rounded-md bg-custom_blue-500 px-2 py-1 text-xs font-semibold text-white sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-10 xl:py-5 xl:text-base">
            Start Practicing
          </button>
        </Link>
        {/* <Link href=""> */}
        <button className="rounded-md border-2 border-black px-2 py-1 text-xs font-semibold sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-10 xl:py-5 xl:text-base">
          Learn More
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default TestComponent;
