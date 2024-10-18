import React, { useState } from "react";

import HeadDisplay from "./headDisplay";
import QuestionBox from "./questionBox";
import { useSelector } from "react-redux";
import PlanningScreen from "./planningScreen";
import { ANSWER_SCREEN, PLANNING_SCREEN } from "../../redux/reducers/reducers";
import AnswerScreen from "./answerScreen";
import { NavBar } from "./navbar";

import { store } from "../../redux/store";
import { RESET_TEST } from "../../redux/types";
import { MATH } from "../../redux/reducers/reducers";
import Link from "next/link";
import { Button } from "@mui/material";

// TO DO:
// Save User's Answers ans and Submitted Questions

const MainQuestionTool = ({ subject, data }) => {
  const state = useSelector((state) => state);

  let curr = state.subjects[`${subject}`].current_question;
  let current_question = data[curr];

  let answerRecord = state.subjects[subject].answer_record;
  var prevAnswers = [];

  if (current_question.id in answerRecord)
    prevAnswers = answerRecord[current_question.id];

  let subject_name = subject === MATH ? "Mathematics" : "Economics";
  let topic_name =
    subject === MATH ? "Sequences and Series" : "Monetory Policy";

  // Screen attention goes to type of question.
  let screen_attention = current_question.planningScreen
    ? PLANNING_SCREEN
    : ANSWER_SCREEN;

   
  return (
    <div>
      <Link href="/navigation">
        <div className="mx-2 mt-1 inline-flex items-center justify-center  rounded-md bg-indigo-500 p-2">
          <div className="text-base font-bold text-white"> Home</div>
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-4 px-10 py-8 md:grid-cols-2">
        <div className="">
          <HeadDisplay current_question={current_question} />
          <div
            className="mt-3 sm:overflow-scroll"
            style={{ maxHeight: "480px" }}
          >
            <QuestionBox
              subject={subject}
              current_question={current_question}
              prevAnswers={prevAnswers}
              isFinalQuestion={data[data.length - 1] === current_question}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <PlanningScreen
            heading="PLANNING SCREEN"
            content_list={
              state.subjects[subject].planning_screen[
                current_question.bigQuestionNo
              ] === undefined
                ? []
                : state.subjects[subject].planning_screen[
                    current_question.bigQuestionNo
                  ]
            }
            attention={screen_attention}
          />
          <AnswerScreen
            heading="ANSWER SCREEN"
            content_list={
              state.subjects[subject].answer_screen[
                current_question.bigQuestionNo
              ] || []
            }
            attention={screen_attention}
          />
        </div>
      </div>
      <NavBar
        subject={`${subject}`}
        subject_name={`${subject_name.toUpperCase()}`}
        topic_name={topic_name}
        current_question={current_question}
        data={data}
        current_question_index={state.subjects[subject].current_question}
      />
    </div>
  );
};

export default MainQuestionTool;
// {
//   "1": [
//       {
//           "heading": "STRUCTURE OF THE ESSAY RESPONSE",
//           "question": "What is the ideal structure for your essay response/10 marker?",
//           "answer": "Definition of key terms, explanation of how monetary policy works and how these measures can help overcome a recessionary gap, including a diagram with explanation."
//       },
//       null,
//       null,
//       null,
//       null,
//       null,
//       {
//           "heading": "PARAGRAPH 3",
//           "question": "What kind of diagram can be used to explain the use of monetary policy to overcome a recessionary gap?",
//           "answer": "An AD/AS diagram"
//       },
//       null
//   ]
// }
