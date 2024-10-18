import React from "react";
import Popup from "../popups/popup";
import ResultsPopup from "../popups/resultsPopup";

function CorrectAnswer({ nextQuestionFunction, isLastQuestion = false, subject }) {
    const tick = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
        >
            <path
                d="M14.1938 1.07763C14.1856 0.916488 14.1137 0.765201 13.994 0.657032L13.9946 0.65764C13.9353 0.603944 13.8661 0.56245 13.7908 0.53553C13.7155 0.508609 13.6356 0.496789 13.5558 0.500745C13.4759 0.504702 13.3976 0.524356 13.3253 0.558587C13.2531 0.592818 13.1883 0.640953 13.1346 0.700242L5.84534 8.75635L1.83464 4.92822C1.71793 4.81669 1.56171 4.75608 1.40032 4.75973C1.23893 4.76338 1.0856 4.831 0.974068 4.9477C0.862532 5.0644 0.801924 5.22063 0.805576 5.38201C0.809228 5.5434 0.876842 5.69673 0.993543 5.80826L5.45705 10.0685L5.90864 10.5L6.32858 10.0369L14.0378 1.51638C14.1459 1.39659 14.202 1.23878 14.1938 1.07763Z"
                fill="#4F9D69"
            />
        </svg>
    );

    return (
        <div className="mt-2 rounded-lg bg-custom_green-400 bg-opacity-20 p-5">
            <div className=" my-36 flex flex-col items-center justify-center gap-6 ">
                <h3 className="flex flex-row items-baseline gap-2 text-custom_green-400">
                    {tick}
                    <span className="font-light">CORRECT ANSWER</span>
                </h3>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl font-semibold text-custom_black-500">
                        {isLastQuestion
                            ? "You have reached the end of the question set!"
                            : "Great job! You got it right."}
                    </h4>
                    <p className="text-base font-light text-custom_black-500">
                        {isLastQuestion
                            ? "It's time to see your results!"
                            : "Keep up the good work!"}
                    </p>
                </div>
                <div className="flex w-3/6 flex-row items-center justify-center gap-4">
                    {/* <button className='text-sm border-2 border-black text-custom_black-500 font-bold bg-transparent py-2 px-7 rounded-md'>Try Again</button> */}
                    {isLastQuestion ? (
                        <Popup
                            buttonText="See Results"
                            buttonStyle="w-full rounded-md border-0 bg-custom_green-400 px-7 py-2 text-sm font-bold text-white"
                        >
                            <ResultsPopup subject={subject} />
                        </Popup>
                    ) : (
                        <button
                            onClick={nextQuestionFunction}
                            className="w-full rounded-md border-0 bg-custom_green-400 px-7 py-2 text-sm font-bold text-white"
                        >
                            {isLastQuestion ? "See Report" : "Next Question"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CorrectAnswer;
