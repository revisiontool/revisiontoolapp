import React, { useEffect, useRef, useState } from "react";
import { store } from "../../redux/store";
import {
  CHANGE_ANSWER_SCREEN,
  CHANGE_PLANNING_SCREEN,
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  RESET_SCREENS,
  UPDATE_ANSWER_RECORD,
} from "../../redux/types";
import Image from "next/image";
import { useSelector } from "react-redux";
import CongratsModal from "./congratsScreen";
// Work to do:
// Two buttons: Previous Question

// Display Red Button
// Display Green Button
const QuestionBox = ({
  subject,
  current_question,
  isReportUse = false,
  isFinalQuestion = false,
}) => {
  // Below state keeps track of the selected option

  const state = useSelector((state) => state);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const answerRecord = state.subjects[`${subject}`].answer_record;

  const [showCongrats, setShowCongrats] = useState(false);
  const [visited, setVisited] = useState(new Set());

  // Display Answer & Planning Screen the first time a button is pressed
  const [answered, setAnswered] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  useEffect(() => {
    const currentBigQuestionNo = current_question.bigQuestionNo;

    if (!visited.has(currentBigQuestionNo) && currentBigQuestionNo !== 1) {
      setShowCongrats(true);
    }

    setVisited((prevVisited) => new Set(prevVisited).add(currentBigQuestionNo));
  }, [current_question]);

  useEffect(() => {
    if (Object.keys(answerRecord).length === 0) {
      setVisited(new Set());
    }
  }, [answerRecord]);

  useEffect(() => {
    if (current_question.id in answerRecord) {
      if (
        (selectedChoice && selectedChoice == current_question.correct) ||
        answerRecord[current_question.id][
          answerRecord[current_question.id].length - 1
        ] == current_question.correct
      ) {
        setAnsweredCorrectly(true);
      }
      // If the question was answered correctly, don't allow to select, and show correct answer + previous answers
    } else {
      setSelectedChoice(false);
      setAnswered(false);
      setAnsweredCorrectly(false);
    }
  }, [answerRecord, current_question]);

  const goToNextQuestion = () => {
    store.dispatch({ type: NEXT_QUESTION, payload: { _subject: subject } });
    setSelectedChoice(null);
  };

  const submitQuestion = () => {
    if (selectedChoice) {
      store.dispatch({
        type: UPDATE_ANSWER_RECORD,
        payload: {
          _id: current_question.id,
          _ans: selectedChoice,
          _subject: subject,
        },
      });

      // Only Update the Answer Screen and Planning Screen if the question was answered correctly
      if (current_question.correct == selectedChoice) {
        store.dispatch({
          type: CHANGE_ANSWER_SCREEN,
          payload: {
            _subject: subject,
            _update: current_question.answerScreen,
            _bigQuestionNo: current_question.bigQuestionNo,
          },
        });

        store.dispatch({
          type: CHANGE_PLANNING_SCREEN,
          payload: {
            _subject: subject,
            _update: current_question.planningScreen,
            _bigQuestionNo: current_question.bigQuestionNo,
          },
        });
      }
    }
  };

  return (
    <div className="rounded-xl border-custom_blue-500 bg-custom_blue-100 p-5">
      {/* Congrats Popup */}
      <CongratsModal
        subject={subject}
        isFinalQuestion={isFinalQuestion}
        open={showCongrats && !isReportUse}
        handleClose={() => {
          setShowCongrats(false);
        }}
        bigQuestionNo={current_question.bigQuestionNo}
      />
      {/* Question Box Component */}
      <div className="flex flex-col">
        <div className="flex flex-row gap-3">
          <div className="my-auto rounded-lg">
            {/* Displaying marks of the current question */}
            <span className="my-auto inline-flex rounded-lg bg-custom_blue-100">
              <span className="p-1 text-xs text-custom_blue-500">
                {current_question.sub_marks == 0
                  ? "0"
                  : current_question.sub_marks}{" "}
                marks
              </span>
            </span>
          </div>
            <span className="my-auto inline-flex rounded-lg bg-custom_green-600">
              <span className="p-1 text-xs text-custom_green-400">
                {current_question.planningScreen ? "Deconstruction & Mapping" : "Crafting the perfect response"}
              </span>
            </span>

          {/* Rendering all the tags in the question for display */}
          {/* {current_question.tags.map((tag, index) => {
            // alternating between green and purple based on the index
            var bgColor =
              index % 2 == 0 ? "bg-custom_green-600" : "bg-custom_blue-100";
            var textColor =
              index % 2 == 0 ? "text-custom_green-400" : "text-custom_blue-500";

            return (
              // <div className="rounded-lg my-auto bg-custom_blue-100">
              // <span className="p-2 text-xs text-custom_blue-500"></span>
              <div key={index} className={`my-auto rounded-lg ${bgColor}`}>
                <span className={`p-2 text-xs ${textColor}`}>{tag}</span>
              </div>
            );
          })} */}
        </div>
        {/* Displaying the current question on the box. */}
        <h1 className="text-xs  text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
          {current_question.boxDisplay}
        </h1>
        {/* Displaying the current question on the question. */}
        <h1 className="text-base font-bold text-custom_black-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {current_question.boxQuestion}
        </h1>

        {/* Displaying the different answer options */}
        <div className={`mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2`}>
          {current_question.options.map((option, index) => (
            <button
              key={index}
              className={`${
                index === 2 && current_question.options.length == 3
                  ? "sm:col-span-2"
                  : ""
              } bg-white p-4 text-left ${
                // IF not allowed to select, display all the correct and wrong answer
                answeredCorrectly && option.value == current_question.correct // Previously Chose Correctly or Allowed to Select?
                  ? "bg-green-100"
                  : answered &&
                    answerRecord[current_question.id] &&
                    answerRecord[current_question.id].includes(option.value) // Previously Chose Wrong?
                  ? "bg-custom_red-500 bg-opacity-80"
                  : selectedChoice === option.value // Selected?
                  ? "bg-custom_blue-500 text-white"
                  : "bg-white "
              } text-xs lg:text-sm xl:text-base`}
              onClick={() => {
                // If question is either unanswered or answered wrong, allow to select
                // If answered correcly, don't allow to select
                if (!answeredCorrectly) {
                  if (selectedChoice == option.value) setSelectedChoice(null);
                  else setSelectedChoice(option.value);
                }
                setAnswered(true);
              }}
            >
              <h1 className=" text-base font-bold">{option.value}.</h1>
              {current_question.type == "image" ? (
                <Image
                  src={option.optionText}
                  alt="Failed to show image"
                  width={240}
                  height={200}
                />
              ) : (
                <>
                  <div className=" h-auto w-10/12 object-scale-down">
                    <span className="object-scale-down text-sm">
                      {/* <MathJax /> */}
                      {option.optionText}
                    </span>
                  </div>
                </>
              )}
            </button>
          ))}
        </div>
        {current_question.planningScreen ? (
          <h1 className="mt-2 text-xs">
            This Question is Linked to Form Answer to Structure of the Response
            and doesn&apos;t affect your final mark
          </h1>
        ) : null}

        {/* Hide buttons if not allowed to select */}
        {isReportUse ? null : (
          <div className="mt-4 flex gap-4 ">
            <button
              onClick={() => {
                store.dispatch({
                  type: PREVIOUS_QUESTION,
                  payload: { _subject: subject },
                });
                setSelectedChoice(null);
              }}
              className="w-1/2 rounded-md border-2 bg-white px-2 py-1 text-xs font-bold text-custom_black-500 sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-1 xl:py-1 xl:text-base"
            >
              Previous Question
            </button>
            <button
              onClick={
                !answeredCorrectly
                  ? submitQuestion
                  : isFinalQuestion
                  ? () => {
                      setShowCongrats(true);
                    }
                  : goToNextQuestion
              }
              className={`w-1/2 rounded-md bg-custom_blue-500 px-2 py-1 text-xs font-semibold text-white sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-10 xl:py-5 xl:text-base ${
                selectedChoice || answeredCorrectly ? "" : "opacity-50"
              }`}
            >
              {!answeredCorrectly ? "Submit Question" : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionBox;
