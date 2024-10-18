import {
    data,
    economics_data,
  } from "../../static_data/EconomicsData";
  import { math_data } from "../../static_data/MathData";
  import {
    PREVIOUS_QUESTION,
    NEXT_QUESTION,
    CHANGE_MARKS,
    CHANGE_ANSWER_SCREEN,
    CHANGE_PLANNING_SCREEN,
    CHANGE_NAVBAR,
    UPDATE_ANSWER_RECORD,
    GO_TO_QUESTION,
    RESET_TEST,
    RESET_SCREENS
  } from "../types";
  
  export const ANSWER_SCREEN = 2;
  export const PLANNING_SCREEN = 1;

  export const MATH = "math"
  export const ECONOMICS = "economics"
  
  // Initial State
  const initialState = {
    subjects: {
      math: {
        current_question: 0,
        question_to_answer: 0, // This will keep track of latest unanswered question
        marks_scored: 0,
        questions_answered: 0,
        total_marks: 0,
        answer_record: {},
        planning_screen: {},
        answer_screen: {},
        attention: 0,
        saved_planning_screen: {},
        saved_answer_screen: {},
        // Add More
      },
      economics: {
        current_question: 0,
        question_to_answer: 0, // This will keep track of latest un-answered question
        marks_scored: 0,
        questions_answered: 0,
        total_marks: 0,
        answer_record: {},
        planning_screen: {},
        answer_screen: {},
        attention: 0,
        saved_planning_screen: {},
        saved_answer_screen: {},
        // Add More
      },
    },
    navbar: false,
    counter: 0,
  };
  
  // Following Reducer is the main reducer.p maintaining access to the state
  // Different Actions will be used to call different helper functions
  // that will return a modified copy of the state for the reducer to return
  
  export const userReducer = (state = initialState, action) => {

    switch (action.type) {
      case RESET_TEST:
        return resetTest(
            state,
            action.payload["_subject"]
        )
        
      // Previous Question
      case PREVIOUS_QUESTION:
        const current_subject_prev = action.payload["_subject"];
        const current_question_prev =
          state.subjects[current_subject_prev].current_question;
        const decrementedQuestion =
          current_question_prev > 0 ? current_question_prev - 1 : 0;
  
        return changeCurrentQuestion(
          state,
          decrementedQuestion,
          current_subject_prev
        );
  // 
      // Next Question
      case NEXT_QUESTION:
        const current_subject_next = action.payload["_subject"];
        const current_question_next =
          state.subjects[current_subject_next].current_question;
        let questionSize;
  
        switch (current_subject_next) {
          case "math":
            questionSize = math_data.length;
            break;
          case "economics":
            questionSize = economics_data.length;
            break;
          default:
            questionSize = 0;
        }
  
        const incrementedQuestionForNext =
          current_question_next < questionSize
            ? current_question_next + 1
            : questionSize;
  
        return changeCurrentQuestion(
          state,
          incrementedQuestionForNext,
          current_subject_next
        );
  
      // Go to Question
      case GO_TO_QUESTION:
        return changeCurrentQuestion(
          state,
          action.payload["_question"],
          action.payload["_subject"]
        );
      case CHANGE_MARKS:
        return changeMarks(state, action.payload, action.payload["_subject"]);
      case CHANGE_ANSWER_SCREEN:
        return changeAnswerScreen(
          state,
          action.payload["_update"],
          action.payload["_subject"],
          action.payload["_bigQuestionNo"],
        );
      case CHANGE_PLANNING_SCREEN:
        return changePlanningScreen(
          state,
          action.payload["_update"],
          action.payload["_subject"],
          action.payload["_bigQuestionNo"],
        );
      case UPDATE_ANSWER_RECORD:
        return updateAnswerRecord(
          state,
          action.payload["_id"],
          action.payload["_ans"],
          action.payload["_subject"],
        );
      case CHANGE_NAVBAR:
        return {
          ...state,
          navbar: action.payload,
        };
        
      default:
        return state;
    }
  };
  


function resetTest(state, subject) {

    let state_copy = JSON.parse(JSON.stringify(state));

    // Resetting the state
    state_copy.subjects[`${subject}`] = initialState.subjects[`${subject}`]

    return state_copy

}

function updateAnswerRecord(state, question_id, answer, subject) {
    // get answers
    let state_copy = JSON.parse(JSON.stringify(state));

    if (question_id in state_copy.subjects[`${subject}`].answer_record) {
      state_copy.subjects[`${subject}`].answer_record[question_id].push(answer);
      return state_copy;
    }

    state_copy.subjects[`${subject}`].answer_record[question_id] = [answer];
  
    return state_copy;
  }
  
  function changeCurrentQuestion(state, questionToVisit, subject) {
    
    var size;
    // console.log(questionToVisit, subject)
    if (subject === "math")
      size = math_data.length;
    else 
      size = economics_data.length;
    
    // console.log(size)
    var state_copy = JSON.parse(JSON.stringify(state));

    questionToVisit = Math.min(questionToVisit, size - 1)
    
    state_copy.subjects[`${subject}`].current_question = questionToVisit;
    var curr = state_copy.subjects[`${subject}`].question_to_answer;
    // question_to_answer helps 
    state_copy.subjects[`${subject}`].question_to_answer = Math.max(curr, questionToVisit)
    
    return state_copy;
  }

  // Helper function for changing marks in the state for a specific subject
  function changeMarks(state, marks, subject) {
    var state_copy = JSON.parse(JSON.stringify(state));
    let current_marks = state_copy.subjects[`${subject}`].marks_scored;
  
    state_copy.subjects[`${subject}`].marks_scored =
      current_marks + marks <= 100 ? current_marks + marks : 100;
  
    return state_copy;
  }
  
  // Helper function for updating answer screen in the state for a specific subject
  
  function changeAnswerScreen(state, text_update, subject, big_question_number) {
    var state_copy = JSON.parse(JSON.stringify(state));

    if (!(big_question_number in state_copy.subjects[`${subject}`].answer_screen)){
      state_copy.subjects[`${subject}`].answer_screen[big_question_number] = [];
    }
      state_copy.subjects[`${subject}`].answer_screen[big_question_number].push(text_update);
  
    return state_copy;
  }
  
  // Helper function for updating answer screen in the state for a specific subject
  function changePlanningScreen(state, text_update, subject, big_question_number) {
    var state_copy = JSON.parse(JSON.stringify(state));
    if (!(big_question_number in state_copy.subjects[`${subject}`].planning_screen)){
      state_copy.subjects[`${subject}`].planning_screen[big_question_number] = [];
    }
    state_copy.subjects[`${subject}`].planning_screen[big_question_number].push(text_update);

  
    return state_copy;
  }

  