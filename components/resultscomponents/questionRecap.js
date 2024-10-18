import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import QuestionBox from "../toolcomponents/questionBox";
import { QuestionNav } from "../toolcomponents/navbar";
import { Button } from "@mui/material";
import getTotalScreens from "../../functions/totalScreens";

const QuestionRecap = ({ subject, data, report }) => {
  const [currentOpenDialog, setCurrentOpenDialog] = useState(null);

  const [filteredData, setFilteredData] = useState([]);
  const [current_question_index, set_current_question_index] = useState(0);
  const [bigQuestionNoToIndex, setBigQuestionNoToIndex] = useState({});

  // Contains amount of correctly answered planning and answer screen questions in each big question number
  const [planningMap, setPlanningMap] = useState({});
  const [answerMap, setAnswerMap] = useState({});
  const [totalPlanningScreen, setTotalPlanningScreen] = useState({});
  const [totalAnswerScreen, setTotalAnswerScreen] = useState({});

  // Effect to create the hashmap only once at the start
  useEffect(() => {
    // Init maps
    const bigQuestionMap = {};
   
    data.forEach((question, index) => {
      if (bigQuestionMap[question.bigQuestionNo] === undefined) {
        bigQuestionMap[question.bigQuestionNo] = index;
      }
    });
    setBigQuestionNoToIndex(bigQuestionMap);

    const totalScreens = getTotalScreens(data);
    setTotalPlanningScreen(totalScreens["planning"]);
    setTotalAnswerScreen(totalScreens["answer"]);
  }, []);

  const getColor = (value) => {
    if (value >= 65) return "green-500";
    if (value >= 25) return "yellow-300";
    return "red-500";
  };
  
  // Modified rows with percentage calculation
  const rows = Object.keys(bigQuestionNoToIndex).map((bigQuestionNo, index) => {
    const correctPlanning = report.correctPlanningScreen[bigQuestionNo] || 0;
    const totalPlanning = totalPlanningScreen[bigQuestionNo] || 0;
    const planningPercentage = totalPlanning ? ((correctPlanning / totalPlanning) * 100).toFixed(2) : 0;
  
    const correctAnswer = report.correctAnswerScreen[bigQuestionNo] || 0;
    const totalAnswer = totalAnswerScreen[bigQuestionNo] || 0;
    const answerPercentage = totalAnswer ? ((correctAnswer / totalAnswer) * 100).toFixed(2) : 0;
  
    return {
      id: index,
      bigQuestionNo,
      question: data[bigQuestionNoToIndex[bigQuestionNo]].headQuestion,
      planning: `${correctPlanning} / ${totalPlanning}`,
      answer: `${correctAnswer} / ${totalAnswer}`,
      planningPercentage,
      answerPercentage,
    };
  });
  
  // Modified columns with renderCell for color coding
  const columns = [
    { field: "bigQuestionNo", headerName: "Number", width: 150 },
    { field: "question", headerName: "Question", width: 800 },
    { 
      field: "planning", 
      headerName: "Non-Mark Related Score (Planning)", 
      width: 250,
      renderCell: (params) => {
        const percentage = params.row.planningPercentage;
        return (
          <div className={`text-${getColor(percentage)}`}>
            {params.value} - {percentage}%
          </div>
        );
      },
    },
    { 
      field: "answer", 
      headerName: "Marks Scored (Answer)", 
      width: 250,
      renderCell: (params) => {
        const percentage = params.row.answerPercentage;
        return (
          <div className={`text-${getColor(percentage)}`}>
            {params.value} - {percentage}%
          </div>
        );
      },
    },
  ];
  

  // Grid Functions
  const handleRowClick = (param) => {
    const bigQuestionNo = param.row.bigQuestionNo;
    setCurrentOpenDialog(bigQuestionNo);
    // Filters all questions to only questions with specific big question number
    const newFilteredData = data.filter(
      (question) => String(question.bigQuestionNo) === String(bigQuestionNo)
    );
    setFilteredData(newFilteredData);
    set_current_question_index(bigQuestionNoToIndex[bigQuestionNo]);
  };

  // Popup Functions
  const handlePageChange = (event, value) => {
    const adjustedIndex = filteredData[value - 1];
    set_current_question_index(data.indexOf(adjustedIndex));
  };

  const handleClose = () => {
    setCurrentOpenDialog(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <span className="text-custom_green-400">Revisit</span> your previous
        attempt
      </span>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          onRowClick={handleRowClick}
        />
      </div>
      {currentOpenDialog !== null && (
        <Dialog
          open={true}
          onClose={handleClose}
          scroll="paper"
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>{`Question ${currentOpenDialog}`}</DialogTitle>
          <DialogContent>
            <QuestionBox
              subject={subject}
              current_question={data[current_question_index]}
              isReportUse={true}
            />
          </DialogContent>
          <DialogActions
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "sticky",
              bottom: 0,
              background: "#fff",
            }}
          >
            <div></div>{" "}
            {/* Empty div to keep space between and center the nav */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <QuestionNav
                current_question={data[current_question_index]}
                data={filteredData}
                handlePageChange={handlePageChange}
              />
            </div>
            <Button variant="contained" onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default QuestionRecap;
