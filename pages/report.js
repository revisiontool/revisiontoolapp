import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { math_data } from "../static_data/MathData";
import { economics_data } from "../static_data/EconomicsData";
import getTotalLearningObjectivesDict from "../functions/totalLearningObjectives";
import ReportIntro from "../components/resultscomponents/reportIntro";
import LearningObjectivesGrid from "../components/resultscomponents/learningObjectivesGrid";
import LearningObjectiveBreakdown from "../components/resultscomponents/learningObjectiveBreakdown";
import ThankYou from "../components/resultscomponents/thankYou";
import OverallStatistics from "../components/resultscomponents/overallStatistics";
import QuestionRecap from "../components/resultscomponents/questionRecap";
import {
  economics_learning_objectives,
  math_learning_objectives,
} from "../static_data/learningObjectives";
import { Chip, Divider } from "@mui/material";
import { useRouter } from "next/router";
import ErrorDisplay from "../components/resultscomponents/errorDisplay";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { current } from "@reduxjs/toolkit";

// import { set } from "@auth0/nextjs-auth0/dist/session";

// When we first navigate to this page, it uses client-side navigation. But if the user tries to manually go to this page or reloads the page, useRouter won't fetch the queries
// useRouter only gets data on the client side, so we need getServerSideProps to get the page info server-side.

export const getServerSideProps = withPageAuthRequired({
  // returnTo
  getServerSideProps: async (ctx) => {
    const session = getSession(ctx.req, ctx.res);

    return {
      props: {},
    };
  },
});

const Report = ({}) => {
  const [report, setReport] = useState(null);
  const router = useRouter();
  const subject = router.query.subject;
  const state = useSelector((state) => state);
  const validSubjects = ["math", "economics"];

  // For Automatic Scrolling
  const resultsRef = useRef(null);
  const scrollToRef = () => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  useEffect(() => {
    if (!subject) return;

    let questionData;
    let learningObjectivesNames;

    switch (subject) {
      case "math":
        questionData = math_data;
        learningObjectivesNames = math_learning_objectives;
        break;
      case "economics":
        questionData = economics_data;
        learningObjectivesNames = economics_learning_objectives;
        break;
      default:
        break;
    }

    const answerRecord = state.subjects[subject]?.answer_record;
    if (
      answerRecord &&
      Object.keys(answerRecord).length === questionData.length
    ) {
      const initialReport = getReport(questionData, answerRecord);
      setReport(initialReport);
    }
  }, [subject]);

  if (!subject || !validSubjects.includes(subject)) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ErrorDisplay text={"This is an invalid subject URL!"} />
      </div>
    );
  }

  const answerRecord = state.subjects[subject]?.answer_record;
  const questionData = subject === "math" ? math_data : economics_data;

  if (
    !answerRecord ||
    Object.keys(answerRecord).length !== questionData.length
  ) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ErrorDisplay
          text={`You are not finished with the ${subject} Question Set!`}
        />
      </div>
    );
  }

  const learningObjectivesNames =
    subject === "math"
      ? math_learning_objectives
      : economics_learning_objectives;
  const title = subject === "math" ? "IBDP Maths" : "IBDP Economics";

  return report ? (
    <div className="flex flex-col gap-8 px-2 py-7 sm:px-10 ">
      <ReportIntro report={report} scrollFunction={scrollToRef}/>
      <div ref={resultsRef}>
      <OverallStatistics report={report} />
      </div>
      <div className="flex items-center">
        <LearningObjectivesGrid
          totalLearningObjectives={report.totalLearningObjectives}
          correctLearningObjectives={report.correctLearningObjectives}
          learningObjectivesNames={learningObjectivesNames}
        />
      </div>
      <Divider>
        <Chip label="QUESTIONS" />
      </Divider>
      <div className="mt-3">
        <QuestionRecap
          subject={subject}
          data={questionData}
          answerRecord={answerRecord}
          report={report}
        />
      </div>
      <Divider>
        <Chip label="END" />
      </Divider>
      <ThankYou />
    </div>
  ) : (
    <span>Loading Report...</span>
  );
};

export default Report;

const getReport = (questionData, answerRecord) => {
  var correctAnswers = 0;
  const totalQuestions = questionData.length; // Get total number of questions
  const totalAnswered = Object.keys(answerRecord).length; // Get number of questions answered (length of answerRecord);

  // Get total learning objectives from Planning & Answer
  const totalLearningObjectives = getTotalLearningObjectivesDict(questionData); 

  const correctPlanningLearningObjectives = {};
  const correctAnswerLearningObjectives = {};

  const correctPlanningScreen = {};
  const correctAnswerScreen = {};

  // Loop through all questions
  for (
    let questionIndex = 0;
    questionIndex < questionData.length;
    questionIndex++
  ) {
    // Get id of current question
    var questionId = questionData[questionIndex].id;

    // Skip unanwered questions
    if (!(questionId in answerRecord)) {
      continue;
    }
    var optionChosen = answerRecord[questionId]; // Gets the first answer of user
    // Check if answer is correct
    if (optionChosen == questionData[questionIndex].correct) {
      correctAnswers += 1;

      // Check whether it is a planning or answer screen
      if (questionData[questionIndex].planningScreen) {
        if (
          questionData[questionIndex].bigQuestionNo in correctPlanningScreen
        ) {
          correctPlanningScreen[questionData[questionIndex].bigQuestionNo] += 1;
        } else {
          correctPlanningScreen[questionData[questionIndex].bigQuestionNo] = 1;
        }
      } else {
        if (questionData[questionIndex].bigQuestionNo in correctAnswerScreen) {
          correctAnswerScreen[questionData[questionIndex].bigQuestionNo] += 1;
        } else {
          correctAnswerScreen[questionData[questionIndex].bigQuestionNo] = 1;
        }
      }
      // Add Learning Objective to correctLearningObjectives if not already present. If present, increment count
      for (
        let learningObjectiveIndex = 0;
        learningObjectiveIndex <
        questionData[questionIndex].learningObjectives.length;
        learningObjectiveIndex++
      ) {
        var learningObjective =
          questionData[questionIndex].learningObjectives[
            learningObjectiveIndex
          ];
        let currentDict = questionData[questionIndex].planningScreen === null ? correctAnswerLearningObjectives : correctPlanningLearningObjectives;
        if (learningObjective in currentDict) {
          currentDict[learningObjective] += 1;
        } else {
          currentDict[learningObjective] = 1;
        }
      }
    }
  }
  const correctLearningObjectives = {
    "planning" : correctPlanningLearningObjectives,
    "answer" : correctAnswerLearningObjectives,
  }; // Get number of correctly answered learning objectives


  return {
    correctAnswers,
    totalQuestions,
    totalAnswered,
    totalLearningObjectives,
    correctLearningObjectives,
    correctPlanningScreen,
    correctAnswerScreen,
  };
};
