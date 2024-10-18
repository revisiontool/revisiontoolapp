import React, { useEffect, useState } from "react";
import BookIcon from "../../public/vectors/book.svg";
import playIcon from "../../public/vectors/play.svg";
import Image from "next/image";
import { store } from "../../redux/store";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import CustomSnackbar from "./snackBar";
import { RESET_TEST } from "../../redux/types";

/*
    Navbar to allow users to visit different parts of the test.
    Pagination will not allow user to go to questions which are next.
    For example, if user has answered questions 1 - 10, and is on question 11, 
    then user can not go forward to question 15.
*/
const NavBar = ({
  subject,
  subject_name,
  topic_name,
  current_question,
  data,
  current_question_index,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const state = useSelector((state) => state);

  // Function to check the screen size and update the state
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint (768 in this case) as needed
  };

  const handlePageChange = (event, value) => {
    // Dispatch an action based on the selected page
    /* 
            Add a check to see if question number is in the record or not.
            It will show a snack bar if question to be accessed is not answered already.
        */
    console.log(
      data[value - 1]["_id"] in state.subjects[subject].answer_record
    );
    console.log(state.subjects[subject].current_question);

    if (
      value - 1 > state.subjects[subject].question_to_answer &&
      !(data[value - 1]["_id"] in state.subjects[subject].answer_record)
    ) {
      setOpenSnackbar(true);
      return;
    }

    store.dispatch({
      type: "GO_TO_QUESTION",
      payload: { _subject: subject, _question: value - 1 },
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  // Add event listener on component mount

  // Below is utilizing checkScreenSize() function
  // to keep navbar responsive.
  useEffect(() => {
    checkScreenSize(); // Check initial screen size
    window.addEventListener("resize", checkScreenSize); // Add event listener for resizing

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-y-3 bg-custom_grey-100 px-3 py-4 sm:grid-cols-2 sm:px-4 md:grid-cols-3 md:px-8">
      <CustomSnackbar
        open={openSnackbar}
        message={
          "You can't answer new questions until you've addressed the current one!"
        }
        handleClose={handleCloseSnackbar}
      />
      <div className="inline-flex items-center gap-3 md:justify-start lg:gap-6 ">
        <div className="inline-flex flex-col items-start justify-start gap-2">
          <div className="text-neutral-700 hidden text-xs font-normal uppercase lg:text-sm sm3:block">
            {" "}
            {subject_name}
          </div>
          <div className="text-neutral-700 text-xl font-bold leading-7 lg:text-2xl">
            {topic_name}
          </div>
        </div>
        <div className="hidden items-center justify-center rounded-md bg-indigo-100 p-3 lg:p-5 sm3:flex">
          {" "}
          <Image src={BookIcon} />
        </div>
      </div>
      {isSmallScreen ? (
        <>
          <StartButtonAndReset subject={subject} />
          <QuestionNav
            current_question={current_question}
            data={data}
            current_question_index={current_question_index}
            handlePageChange={handlePageChange}
          />
        </>
      ) : (
        <>
          <QuestionNav
            current_question={current_question}
            data={data}
            current_question_index={current_question_index}
            handlePageChange={handlePageChange}
          />
          <StartButtonAndReset subject={subject} />
        </>
      )}
    </div>
  );
};

const QuestionNav = ({ current_question, data, handlePageChange }) => {
  const currentPage =
    data.findIndex((question) => question === current_question) + 1;

  return (
    <div className="m-auto">
      <Stack spacing={2}>
        <Pagination
          count={data.length}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

const StartButtonAndReset = ({ subject }) => {
  return (
    <div className="flex items-center justify-start gap-2 sm:justify-end lg:gap-5 ">
      <div className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-3 lg:px-10">
        <div className="text-base font-bold text-white">Start</div>
        <Image src={playIcon} />
      </div>

      <button
        className="border-neutral-700 inline-flex h-12 w-28 items-center justify-center gap-2 rounded-md border px-6 py-3"
        onClick={() => {
          store.dispatch({
            type: RESET_TEST,
            payload: { _subject: subject.toLowerCase() },
          });
        }}
      >
        RESET
      </button>
    </div>
  );
};

export { NavBar, QuestionNav };
