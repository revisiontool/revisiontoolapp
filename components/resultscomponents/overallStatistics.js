import React from 'react'

const OverallStatistics = ({ report }) => {
  return (
    <div className="flex flex-col gap-8 bg-gray-100 p-2 text-center sm:p-10 md:bg-white md:text-start">
        <span className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Overall <span className="text-custom_green-400">Perfomance</span>{" "}
          Statistics
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold text-custom_black-500 sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl">
              <span className="text-custom_green-400">{report.totalAnswered}</span>
            </span>
            <span className="text-xs text-custom_black-500 md:text-sm lg:text-base">
              Number of Questions Answered
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold text-custom_black-500 sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl">
              <span className="text-custom_green-400">{report.correctAnswers}</span>
            </span>
            <span className="text-xs text-custom_black-500 md:text-sm lg:text-base">
              Number of Questions Answered Correctly
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold text-custom_black-500 sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl">
              <span className="text-custom_green-400">{report.totalAnswered - report.correctAnswers}</span>
            </span>
            <span className="text-xs text-custom_black-500 md:text-sm lg:text-base">
              Number of Questions Answered Incorrectly
            </span>
          </div>
        </div>
      </div>
  )
}

export default OverallStatistics