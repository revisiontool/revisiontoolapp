import React from "react";
import AB from "../../public/navpage-images/AB.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { MATH } from "../../redux/reducers/reducers";
import { math_data, math_data_size } from "../../static_data/MathData";
import {
  econ_data_size,
  economics_data,
} from "../../static_data/EconomicsData";
import { RESET_TEST } from "../../redux/types";
import { useRouter } from "next/router";
import { store } from "../../redux/store";

function ContinueTestComponent({ subject }) {
  const state = useSelector((state) => state);
  const router = useRouter();

  let total_questions = subject === MATH ? math_data_size : econ_data_size;
  const questionData = subject === MATH ? math_data : economics_data;

  let answer_record = state.subjects[`${subject}`].answer_record;
  let progress = Math.floor(
    (Object.keys(answer_record).length / total_questions) * 100
  );
  let answered = Object.keys(answer_record).length;
  let correct_answers = 0;

  for (let i = 0; i < answered; i++) {
    let id = questionData[i].id;
    if (questionData[i].correct == answer_record[id]) {
      correct_answers++;
    }
  }

  const done = questionData.length == answered;

  return (
    <div className="flex w-3/4 flex-col rounded-xl border-2 border-custom_blue-500 md:w-1/2">
      <div className="h-1/2 border-b-2 border-custom_blue-500 bg-custom_blue-100">
        <Image
          src={AB}
          className="m-auto w-60 sm:w-64 md:w-72 lg:w-80 xl:w-auto"
        />
      </div>

      <div className="h-1/2 p-10">
        <h1 className="mt-1 text-base font-bold text-custom_black-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {subject.toUpperCase()}
        </h1>
        <h2 className="mt-6 text-xs text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
          {done
            ? "Welcome back! Restart the practice session and improve your performance!"
            : " Welcome back! Pick up where you left off in your previous practice session to keep working towards exam success."}
        </h2>
        <div className="mt-4 flex w-5/6 flex-row justify-between">
          <div className="flex flex-col text-left">
            <span className="text-base font-bold text-custom_black-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              {progress} %
            </span>
            <span className="text-xs md:text-sm lg:text-base xl:text-lg">
              Test Completed
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-bold text-custom_black-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              {`${correct_answers}`} / {`${answered}`}
            </span>
            <span className="text-xs md:text-sm lg:text-base xl:text-lg">
              Answered Correctly
            </span>
          </div>
        </div>
        <div className="mt-6 flex flex-row gap-4">
          {done ? null : (
            <button
              onClick={() => {
                router.push(`/${subject}`);
              }}
              className="rounded-md bg-custom_blue-500 px-2 py-1 text-xs font-semibold text-white sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-10 xl:py-5 xl:text-base"
            >
              Continue Practicing
            </button>
          )}

          <button
            className="rounded-md border-2 border-black px-2 py-1 text-xs font-semibold sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-10 xl:py-5 xl:text-base"
            onClick={() => {
              store.dispatch({
                type: RESET_TEST,
                payload: { _subject: subject.toLowerCase() },
              });
              router.push(`/${subject}`);
            }}
          >
            Restart Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContinueTestComponent;
