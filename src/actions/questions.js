import { _saveQuestion } from "../utils/_DATA";
import { saveNewQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { addNewUserQuestion } from "./users";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

// get questions from state action creators
export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

export function addNewQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  };
}
// with support from mentors
export function handleAddNewQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState;
    dispatch(showLoading());

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(formatedPoll => {
        dispatch(addNewQuestion(formatedPoll));
        dispatch(addNewUserQuestion(authedUser, formatedPoll.id));
      })
      .then(() => dispatch(hideLoading()));
  };
}

// action creators for saving Answer
export function addQuestionAnswer(authedUser, qid, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}
// with support from mentors

export function handleAddQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveNewQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => {
        dispatch(addQuestionAnswer(authedUser, qid, answer));
      })
      .then(() => dispatch(hideLoading()));
  };
}
