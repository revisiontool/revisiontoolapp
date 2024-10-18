import React from "react";
import Popup from "../popups/popup";
import ResultsPopup from "../popups/resultsPopup";

function TryAgain({
    repeatQuestionFunction,
    nextQuestionFunction,
    isLastQuestion = false,
    subject
}) {
    const sadFace = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 18.5C12.6217 18.5 14.6566 17.6571 16.1569 16.1569C17.6571 14.6566 18.5 12.6217 18.5 10.5C18.5 8.37827 17.6571 6.34344 16.1569 4.84315C14.6566 3.34285 12.6217 2.5 10.5 2.5C8.37827 2.5 6.34344 3.34285 4.84315 4.84315C3.34285 6.34344 2.5 8.37827 2.5 10.5C2.5 12.6217 3.34285 14.6566 4.84315 16.1569C6.34344 17.6571 8.37827 18.5 10.5 18.5Z"
                stroke="#D62424"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"
                fill="#D62424"
            />
            <path
                d="M13 9C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9Z"
                fill="#D62424"
            />
            <path
                d="M7.5 13.5C8.103 12.167 9.103 11.5 10.5 11.5C11.897 11.5 12.897 12.167 13.5 13.5"
                stroke="#D62424"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );

    return (
        <div className="mt-2 rounded-lg bg-custom_red-500 bg-opacity-25 p-5">
            <div className=" my-36 flex flex-col items-center justify-center gap-6 ">
                <h3 className="flex flex-row gap-2">
                    {sadFace}
                    <span className="font-light text-custom_red-500">
                        WRONG ANSWER
                    </span>
                </h3>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl font-semibold text-custom_black-500">
                        Oops, that&apos;s not quite right.
                    </h4>
                    <p className="text-base font-light text-custom_black-500">
                        {isLastQuestion
                            ? "You can try again or see your results now!"
                            : "Don't worry, you can try again to improve your score!"}
                    </p>
                </div>
                <div className="flex w-3/6 flex-row items-center justify-center gap-4">
                    
                    {isLastQuestion ? (
                        <Popup
                            buttonText="See Results"
                            buttonStyle="rounded-md border-0 bg-custom_red-500 px-7 py-2 text-sm font-bold text-white"
                        >
                            <ResultsPopup subject={subject}/>
                        </Popup>
                    ) : (
                        <button
                            onClick={nextQuestionFunction}
                            className="rounded-md border-0 bg-custom_red-500 px-7 py-2 text-sm font-bold text-white"
                        >
                            {isLastQuestion ? "See Results" : "Move On"}
                        </button>
                    )}
            
                </div>
            </div>
        </div>
    );
}

export default TryAgain;
