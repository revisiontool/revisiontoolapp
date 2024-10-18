import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const LearningObjectivesGrid = ({
  totalLearningObjectives,
  correctLearningObjectives,
  learningObjectivesNames,
}) => {
  const planningLearningObjectives = totalLearningObjectives["planning"];
  const answerLearningObjectives = totalLearningObjectives["answer"];
  const correctPlanningLearningObjectives = correctLearningObjectives["planning"];
  const correctAnswerLearningObjectives = correctLearningObjectives["answer"];
  
  const allLearningObjectives = new Set();

  // Add keys from planning and answer learning objectives to the Set
  Object.keys(planningLearningObjectives).forEach(key => allLearningObjectives.add(key));
  Object.keys(answerLearningObjectives).forEach(key => allLearningObjectives.add(key));

  const getColor = (value) => {
    console.log(value);
    if (value >= 75) return "green-500";
    if (value >= 25) return "yellow-300";
    return "red-500";
  };

  const calculatePercentage = (correct, total) => {
    return total ? ((correct / total) * 100).toFixed(2) : 0;
  };

  const rows = Array.from(allLearningObjectives).map((key, index) => {
    const correctAnswer = correctAnswerLearningObjectives[key] || 0;
    const totalAnswer = answerLearningObjectives[key] || 0;
    const correctPlanning = correctPlanningLearningObjectives[key] || 0;
    const totalPlanning = planningLearningObjectives[key] || 0;

    return {
      id: index,
      objective: key,
      objectiveName: learningObjectivesNames[key],
      answerScore: `${correctAnswer}/${totalAnswer}`,
      answerPercentage: calculatePercentage(correctAnswer, totalAnswer),
      planningScore: `${correctPlanning}/${totalPlanning}`,
      planningPercentage: calculatePercentage(correctPlanning, totalPlanning),
    };
  });

 

  const columns = [
    { field: "objective", headerName: "Key", width: 100 },
    { field: "objectiveName", headerName: "Learning Objective", width: 800 },
    {
      field: "answerScreen",
      headerName: "Marks Scored",
      width: 200,
      renderCell: (params) => {
        const percentage = params.row.answerPercentage; // use the percentage value from the row
        return (
          <div className={`text-${getColor(percentage)}`}>{params.row.answerScore} - {percentage}%</div>
        );
      },
    },
    {
      field: "planningScreen",
      headerName: "Non-mark related score",
      width: 200,
      renderCell: (params) => {
        const percentage = params.row.planningPercentage; // use the percentage value from the row
        return (
          <div className={`text-${getColor(percentage)}`}>{params.row.planningScore} - {percentage}%</div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col gap-5 ">
      <span className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <span className="text-custom_green-400">Find</span> your strong and weak areas
      </span>
      <div className="">
      <DataGrid
        rows={rows}
        columns={columns}
        pagination={false}
        rowsPerPageOptions={[]}
      />
      </div>
    </div>
  );
};

export default LearningObjectivesGrid;
