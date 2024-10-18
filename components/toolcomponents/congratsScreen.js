import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton"; // Importing IconButton for a more appropriate close button
import CloseIcon from "@mui/icons-material/Close"; // Importing Close icon for the close button
import PlanningScreen from "./planningScreen";
import AnswerScreen from "./answerScreen";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { ECONOMICS, MATH } from "../../redux/reducers/reducers";
import { economics_data } from "../../static_data/EconomicsData";
import { math_data } from "../../static_data/MathData";
import math_im1 from "../../public/math_questions/q1.png"
import math_im2 from "../../public/math_questions/q2.png"
import math_im3 from "../../public/math_questions/q3.png"
import math_im4 from "../../public/math_questions/q4.png"
import math_im5 from "../../public/math_questions/q5.png"
import econ_im1 from "../../public/econ_questions/q1.png"
import econ_im2 from "../../public/econ_questions/q2.png"
import econ_im3 from "../../public/econ_questions/q3.png"
import econ_im4 from "../../public/econ_questions/q4.png"
import econ_im5 from "../../public/econ_questions/q5.png"

import Image from "next/image";

// Styles for the Modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: "90%",
  maxHeight: "80vh", // Maximum height for the modal
  overflow: "auto" // Enables scrolling for overflow content
};

const CongratsModal = ({ open, handleClose, subject, isFinalQuestion, bigQuestionNo }) => {
  const state = useSelector((state) => state);
  const router = useRouter(); // instantiate the hook

  const handleResultsClick = () => {
    // When the "See your Results" button is clicked,
    // navigate to '/report' with the 'subject' as a query parameter
    router.push({
      pathname: "/report",
      query: { subject: subject },
    });
  };

  // calculate planning score and answer score
  
  let curr = state.subjects[`${subject}`].current_question;

  let image_stuff;

  let address = "";
  if (subject == MATH ) {
    if (math_data[curr].bigQuestionNo == 2) {
      image_stuff = math_im1
    }
    if (math_data[curr].bigQuestionNo == 3) {
      image_stuff = math_im2
    }
    if (math_data[curr].bigQuestionNo == 4) {
      image_stuff = math_im3
    }
    if (math_data[curr].bigQuestionNo == 5) {
      image_stuff = math_im4
    }
    if (math_data[curr].bigQuestionNo == 6) {
      image_stuff = math_im5
    }
  }
  
  if (subject == ECONOMICS ) {
    if (economics_data[curr].bigQuestionNo == 2) {
      image_stuff = econ_im1
    }
    if (economics_data[curr].bigQuestionNo == 3) {
      image_stuff = econ_im2
    }
    if (economics_data[curr].bigQuestionNo == 4) {
      image_stuff = econ_im3
    }
    if (economics_data[curr].bigQuestionNo == 5) {
      image_stuff = econ_im4
    }
    if (economics_data[curr].bigQuestionNo == 6) {
      image_stuff = econ_im5
    }
  }



  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 0, top: 0, p: 1, m: 3, bgcolor: "#ff0000"}}
          >
            <CloseIcon />
          </IconButton>
          <div className="flex flex-col items-center gap-3">
            <div className="text-2xl">🎉 🎉</div>
            {isFinalQuestion ? (
              <span className="text-xl font-bold text-custom_black-500 sm:text-2xl md:text-4xl lg:text-3xl xl:text-3xl ">
                <span className="text-custom_green-400">Congratulations</span>{" "}
                on completing the{" "}
                <span className="text-custom_green-400">IBDP {subject} </span>
                question set!
              </span>
            ) : (
              <span className="text-xl font-bold text-custom_black-500 sm:text-2xl md:text-4xl lg:text-3xl xl:text-3xl ">
                You have finished the question {bigQuestionNo - 1}!
              </span>
            )}

            <div className="flex flex-col items-center p-4">
            {/* <img src={`${address}`} alt="Description of the image" class="rounded-lg shadow-md"/> */}
              <Image src={image_stuff} alt='graphics for display' className="w-8/12"/>
              <span>Review answers</span>
              <div className="justify-content space-around flex flex-row gap-4 w-full">
                <div className="flex w-1/2">
                  <PlanningScreen
                    subject={subject}
                    attention={0}
                    heading={"PLANNING SCREEN"}
                    content_list={state.subjects[subject].planning_screen[bigQuestionNo - 1]}
                  />
                </div>
                <div className="flex w-1/2">
                  <AnswerScreen
                    subject={subject}
                    attention={0}
                    heading={"ANSWER SCREEN"}
                    content_list={state.subjects[subject].answer_screen[bigQuestionNo - 1]}
                  />
                </div>
              </div>
            
            </div>
          </div>
          {isFinalQuestion ? (
            <div className="mt-2 flex justify-center">
              <button
                onClick={handleResultsClick}
                className="rounded-md bg-custom_blue-500 px-2 py-1 text-xs font-semibold text-white sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-2 xl:py-2 xl:text-base"
              >
                Finish test and see results!
              </button>
            </div>
          ) : 
            <div className="mt-2 flex justify-center">
              <button
                onClick={handleClose}
                className="rounded-md bg-custom_blue-500 px-2 py-1 text-xs font-semibold text-white sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-2 xl:py-2 xl:text-base">
                Close
              </button>
            </div>
          
        }
          
        </Box>
      </Modal>
    </div>
  );
};

export default CongratsModal;
