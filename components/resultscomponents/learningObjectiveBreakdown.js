import React from 'react'

const LearningObjectiveBreakdown = ({ report }) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-2 p-2 sm:gap-10 sm:p-10 md:grid-cols-2 md:gap-40 lg:gap-52 xl:gap-60">
        <div className="flex flex-col gap-2 md:gap-4">
          <span className="text-xs font-semibold md:text-base">Tagline</span>
          <span className="text-lg font-bold text-custom_black-500 sm:text-2xl md:text-4xl lg:text-3xl xl:text-5xl">
            Detailed Breakdown of{" "}
            <span className="text-custom_blue-500">Learning Objectives</span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:gap-10 ">
          <div className="flex flex-col ">
            <span className="text-xs font-bold text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
              Detailed Breakdown of Learning Objectives
            </span>
            <span className="text-xs text-custom_black-500 md:text-sm lg:text-base">
              Your best performing subtopic was Market Failure, where you scored
              {/* {learningObjectiveInfo.bestLearningObjective}. */}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
              Detailed Breakdown of Learning Objectives
            </span>
            <span className="text-xs text-custom_black-500 md:text-sm lg:text-base">
              Your weakest subtopic was International Trade, where you scored
              72%..
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
              Time Spent on Each Question
            </span>
            <span className="text-xs text-custom_black-500 md:text-sm lg:text-base">
              On average, you spent 2 minutes and 30 seconds on each question.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
              Detailed Breakdown of Learning Objectives
            </span>
            <span className="text-xs text-custom_black-500 md:text-sm lg:text-base">
              You answered{" "}
              {((report.correctAnswers / report.totalAnswered) * 100).toFixed(2)}% of the
              questions correctly on the first try.
            </span>
          </div>
        </div>
      </div>
  )
}

export default LearningObjectiveBreakdown