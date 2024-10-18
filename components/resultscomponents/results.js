import React, { useEffect, useState } from "react";
import { math_data } from "../../static_data/MathData";
import { economics_data } from "../../static_data/EconomicsData";
import { useSelector } from "react-redux";
import getTotalLearningObjectivesDict from "../../functions/totalLearningObjectives";
import LearningObjectivesGrid from "./learningObjectivesGrid";
import QuestionRecap from "./questionRecap";
import ReportIntro from "./reportIntro";
import OverallStatistics from "./overallStatistics";
import LearningObjectiveBreakdown from "./learningObjectiveBreakdown";
import ThankYou from "./thankYou";

const Results = ({ subject }) => {
  // get answer record
  const state = useSelector((state) => state);
  const answerRecord = state.subjects[subject].answer_record;
  // const answerRecord = {
  //   "451ab010-8626-4b23109j132jif": ['A', 'B'],
  //   "451ab010-8626-4bd5-aaahvscasju2": ['A'],
  //   "451ab010-8626-4bd5-aad9-7e42c312d2ba": ['A'],
  //   "451ab010-8626-4bd5-aad9-7e42dc312c122ba": ['A'],
  //   "451ab010-8626-4bd5-aad9-7e42dc31232dasw": ['A'],
  //   "451ab010-8626-4bd5-aad9-7e314134njd": ['A'],
  //   "451ab010-8626-4bd5-aad9-7e423214fd": ['A'],
  //   "451ab010-8626-4bd5-aad9-7e426900a2ba": ['A'],
  //   "451ab010-8626-4bd5-aad9-7e42643214123": ['A'],
  //   "451ab010-8626-4bd5-aad9-7enkjnfd": ['D'],
  //   "451ab010-8626-4bd5-aad21jk1hc1uhp": ['A'],
  //   "451ab010-8626-4bd5-aad98u0912h": ['A'],
  //   "451ab010-8626-4bd5-aafalsjkcajss ": ['A'],
  //   "451ab010-8626-4bd5-aaj1421kjbi": ['A'],
  //   "451ab010-8626-4bd5-ajfjn13jbfj1": ['A'],
  //   "451ab010-8626-4fasjbhyul9": ['D']
  // };
  const [report, setReport] = useState(null); // State to hold the report
  const [learningObjectiveInfo, setLearningObjectiveInfo] = useState(null); // State to hold the best and worst learning objectives

  // Get subject question set
  switch (subject) {
    case "math":
      var questionData = math_data;
      break;
    case "economics":
      var questionData = economics_data;
      break;
  }

  const getReport = () => {
    var correctAnswers = 0;
    const totalQuestions = questionData.length; // Get total number of questions
    const totalAnswered = Object.keys(answerRecord).length; // Get number of questions answered (length of answerRecord);

    // {learningObjective: No. of correctAnswers}
    const totalLearningObjectives = getTotalLearningObjectivesDict(questionData); // Get total number of learning objectives
    const correctLearningObjectives = {}; // Get number of correctly answered learning objectives

    // Loop through all questions
    for (let questionIndex = 0; questionIndex < questionData.length; questionIndex++) {
      // Get id of current question
      var questionId = questionData[questionIndex]._id;

      // Skip unanwered questions
      if (!(questionId in answerRecord)) {
        continue;
      }
      var optionChosen = answerRecord[questionId][0];   // Gets the first answer of user


      // Check if answer is correct
      if (optionChosen == questionData[questionIndex].correct) {
        correctAnswers += 1;

        // Add Learning Objective to correctLearningObjectives if not already present. If present, increment count
        for (let learningObjectiveIndex = 0; learningObjectiveIndex < questionData[questionIndex].learningObjectives.length; learningObjectiveIndex++) {
          var learningObjective =
            questionData[questionIndex].learningObjectives[
              learningObjectiveIndex
            ];

          if (learningObjective in correctLearningObjectives) {
            correctLearningObjectives[learningObjective] += 1;
          }
          else {
            correctLearningObjectives[learningObjective] = 1;
          }
        }
      }

    }
    
    return {
        correctAnswers,
        totalQuestions,
        totalAnswered,
        totalLearningObjectives,
        correctLearningObjectives
    };
  };

  useEffect(() => {
    const initialReport = getReport(); // Call getReport when the page is built
    // setLearningObjectiveInfo(initialLearningObjectiveInfo);
    setReport(initialReport);  // Update the state with the report
  }, []);

  var title = "IBDP Economics ";
  if (subject == "math") {
    title = "IBDP Maths";
  }
  

  return (
    // shows loading screen if report is not ready
    report ? (
        <div className="">
      <ReportIntro report={report} title={title}/>
      <div className="flex items-center">
          <LearningObjectivesGrid totalLearningObjectives={report.totalLearningObjectives} correctLearningObjectives={report.correctLearningObjectives}/>
      </div>
      <OverallStatistics report={report}/>
      {/* <QuestionRecap subject={subject}/> */}
      <LearningObjectiveBreakdown report={report}/>

      <div className="mt-4 bg-custom_blue-100 px-16 py-20 sm:px-32 sm:py-52 md:mt-0">
        <div className="mx-auto flex flex-col items-center gap-6 text-center">
          <span className="text-xl font-bold text-custom_black-500 sm:text-2xl md:text-4xl lg:text-3xl xl:text-5xl">
            Thank you for using our{" "}
            <span className="text-custom_blue-500">revision tool</span>
          </span>
          <span className="w-11/12 text-xs text-custom_black-500 md:w-10/12 md:text-sm lg:text-base xl:text-lg ">
            We recommend that you focus on reviewing the learning objectives
            where you struggled and practicing more questions of the type you
            struggled with. Feel free to review the questions you got wrong with
            your tutor/teacher for further guidance.
          </span>
        </div>
      </div>

      <ThankYou />
    </div>
    ) : <span>Loading Report...</span>
    
  );
};

export default Results;
