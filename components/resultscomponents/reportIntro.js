import React from 'react'
import writing_image from "../../public/navpage-images/writing_image.png";
import Image from "next/image";
import Link from 'next/link';

const ReportIntro = ({ title, report, scrollFunction}) => {
  const getGradeFromPercentage = (percentage) => {
    
    switch (true) { // Use 'true' as the condition
      case percentage <= 14:
        return 1;
      case percentage <= 19:
        return 2;
      case percentage <= 34:
        return 3;
      case percentage <= 49:
        return 4;
      case percentage <= 66:
        return 5;
      case percentage <= 79:
        return 6;
      default: // percentage >= 80
        return 7;
    }}
  return (
    <div className="grid grid-cols-1   md:grid-cols-2 md:gap-10 ">
        <div className="flex flex-col items-center gap-8 py-12 text-center md:items-start md:text-left">
          <span className="font-semibold">
            Predicted Grade & Progress Report
          </span>
          <span className="text-xl font-bold text-custom_black-500 sm:text-2xl md:text-4xl lg:text-3xl xl:text-5xl">
            <span className="text-custom_green-400">Congratulations</span> on
            completing the{" "}
            <span className="text-custom_green-400">{title}</span>
            {title} question set!
          </span>
          <span className="text-xs text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
            We are excited to share your predicted grade and progress report
            with you. This report is based on your performance on the question
            set and will provide key statistics about your performance.
          </span>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col rounded-xl bg-gray-100 p-4">
              <span className="text-xl font-bold text-custom_green-400 sm:text-2xl md:text-4xl lg:text-3xl xl:text-5xl">
                {getGradeFromPercentage(report.correctAnswers / report.totalQuestions * 100)} / 7
              </span>
              <span className="text-xs py-2 text-custom_black-500 md:text-sm lg:text-base">
                Estimated IB Grade
              </span>
            </div>
            <div className="flex flex-col rounded-xl bg-gray-100 p-4">
              <span className="text-xl font-bold text-custom_black-500 sm:text-2xl md:text-4xl lg:text-3xl xl:text-5xl">
                {report.correctAnswers} / {report.totalQuestions}
              </span>
              <span className="text-xs py-2 text-custom_black-500 md:text-sm lg:text-base">
                Correct Answers
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <Link href='/navigation'>
            <button className="rounded-lg bg-custom_blue-500 px-4 py-2 text-xs text-white sm:px-6 sm:py-3 md:px-12 md:py-4  md:text-sm lg:text-base xl:text-lg">
              Back to Home
            </button>
            </Link>
            <button onClick={scrollFunction} className="rounded-lg border-2 border-custom_black-500 px-4 py-2 text-xs text-custom_black-500 sm:px-6 sm:py-3 md:px-12 md:py-4 md:text-sm lg:text-base xl:text-lg">
              View Results
            </button>
          </div>
        </div>
        <div className="flex justify-center overflow-hidden md:justify-end">
          <Image src={writing_image} className="border-2 object-cover " />
        </div>
      </div>
  )
}

export default ReportIntro