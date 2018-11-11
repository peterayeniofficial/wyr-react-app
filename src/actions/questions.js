import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

export function getQuestion(questions) {
  return {
    type: RECEIVE_QUESTION,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function addQuestionAnswer(qid, authedUser, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    qid,
    authedUser,
    answer
  };
}

export function handleAddQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestionAnswer({
      qid,
      authedUser,
      answer
    })
      .then(info => {
        dispatch(addQuestionAnswer(info));
      })
      .then(() => dispatch(hideLoading));
  };
}
