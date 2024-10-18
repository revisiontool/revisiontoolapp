import AB from "../../public/navpage-images/AB.svg";
import blue_cube from "../../public/navpage-images/blue_cube.svg";
import green_cube from "../../public/navpage-images/green_cube.svg";
import black_cube from "../../public/navpage-images/black_cube.svg";
import Image from "next/image";
import { Link } from "@mui/material";
function Done({ pageData }) {
  return (
    <div className="md:py-15 px-4 py-10 lg:py-20">
      <div className="mx-auto flex flex-col text-center">
        <span className=" text-xs md:text-base lg:text-sm xl:text-lg">
          Master Your Exam with The Revision Tool{" "}
        </span>
        <span className="mt-3 text-xl font-bold text-custom_black-500 sm:text-2xl md:text-4xl lg:text-3xl xl:text-5xl">
          Start{" "}
          <span className="text-custom_blue-500">Practicing for Exam</span>{" "}
          Success Now{" "}
        </span>
        <h1 className="mx-auto mt-3 max-w-lg text-xs text-custom_black-500 md:max-w-none md:text-base lg:text-sm xl:text-lg">
          Choose the topic you want to focus on and start practicing,
          you&apos;ll get step-by-step guidance and targeted practice to help
          you master even the most challenging topics. Simply select your
          curriculum, subject, and subtopic to get started.
        </h1>
      </div>

      <div className="mt-6 flex flex-col items-center gap-5 md:flex-row md:items-stretch">
        <div className="flex w-3/4 flex-col rounded-xl border-2 border-custom_blue-500 md:w-1/2">
          <div className="h-1/5 border-0 border-custom_blue-500 bg-custom_blue-100 md:border-b-2"></div>

          <div className="p-8 md:p-6 lg:p-8 xl:p-8">
            <h1 className="mt-1 text-base font-bold text-custom_black-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Congratulations on completing the {pageData.topic} question set!
            </h1>
            <h2 className="mt-6 ">
              Your hard work has paid off and we hope you feel proud of your
              accomplishment. Your Predicted Grade and Progress Report will help
              you understand your strengths and weaknesses and guide you in your
              future studies. Keep up the good work!
            </h2>

            <div className="mt-4 flex flex-row gap-3">
              <div className="flex w-1/2 flex-col rounded-xl bg-custom_grey-100 p-3 text-left">
                <span className="text-base font-semibold text-custom_black-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  {pageData.prevSessionScore}%
                </span>
                <span className="text-xs md:text-sm lg:text-base xl:text-lg">
                  previous practice session
                </span>
              </div>
              <div className="flex w-1/2 flex-col rounded-xl bg-custom_grey-100 p-3 text-left">
                <span className="text-base font-semibold text-custom_black-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  {pageData.answeredCorrectly}%
                </span>
                <span className="text-xs md:text-sm lg:text-base xl:text-lg">
                  answered correctly
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              {Object.keys(pageData.subtopics).length ? (
                Object.keys(pageData.subtopics).map((key, index) => (
                  <div
                    className={`rounded-xl p-2 ${
                      index % 4 === 0 || index % 4 === 1
                        ? "bg-custom_green-600 text-custom_green-400"
                        : "bg-red-200 text-red-600"
                    }`}
                    key={key}
                  >
                    <span className="text-xs font-bold lg:text-sm">
                      {pageData.subtopics[key]}%{" "}
                    </span>
                    {key}
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex flex-row">
                <Image src={black_cube} />
                <h1 className="text-xs md:text-sm lg:text-base">
                  {pageData.scoreComment}{" "}
                  {/* Overall, you did well in this question set, scoring 84%. */}
                </h1>
              </div>

              <div className="flex flex-row">
                <Image src={black_cube} />
                <h1 className="text-xs md:text-sm lg:text-base">
                  {pageData.timeSpentComment}{" "}
                  {/* On average, you spent 2 minutes and 30 seconds on each question. */}
                </h1>
              </div>

              <div className="flex flex-row">
                <Image src={black_cube} />
                <h1 className="text-xs md:text-sm lg:text-base">
                  {pageData.answeredCorrectlyComment}{" "}
                  {/* You answered 75% of the questions correctly on the first try. */}
                </h1>
              </div>
            </div>

            <button className="mt-4 rounded-md border-2 border-black px-2 py-1 text-xs font-semibold sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-10 xl:py-5 xl:text-base">
              Review Text
            </button>
          </div>
        </div>

        <div className="flex w-3/4 flex-col gap-5 md:w-1/2">
          <div className="flex flex-col  rounded-xl border-2 border-black bg-white px-10 py-10">
            <Image
              src={blue_cube}
              className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
            ></Image>
            <span className="mt-1 text-base font-bold text-custom_black-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Master IB Math with The Revision Tool
            </span>
            <span className="mt-6 text-xs text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
              From algebra to calculus, The Revision Tool offers comprehensive
              practice for IB Math students. Our cutting-edge technology and
              expert guidance will help you achieve your full potential. Start
              practicing today!
            </span>
            <div className="mt-6 flex gap-4 ">
              <Link href="/math">
                <button className="rounded-md bg-custom_blue-500 px-2 py-1 text-xs font-semibold text-white sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-10 xl:py-5 xl:text-base">
                  Start Practicing
                </button>
              </Link>
              <button className="rounded-md border-2 border-black px-2 py-1 text-xs font-semibold sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-10 xl:py-5 xl:text-base">
                Learn More
              </button>
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
              Whether you&apos;re studying micro or macro economics, The
              Revision Tool has you covered. Our targeted practice and feedback
              will help you understand even the most complex economic concepts.
              Start practicing today!
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
      </div>
    </div>
  );
}
export default Done;
