import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTION = "ADD_USERS_QUESTION";
export const ADD_USER_QUESTION_ANSWER = "ADD_USERS_QUESTION_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function addUserQuestion(qid, authedUser) {
  return {
    type: ADD_USER_QUESTION,
    qid,
    authedUser
  };
}

export function handleAddUserQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(info => dispatch(addUserQuestion(info)))
      .then(() => dispatch(hideLoading()));
  };
}

export function addUserQuestionAnswer(qid, authedUser, answer) {
  return {
    type: ADD_USER_QUESTION_ANSWER,
    qid,
    authedUser,
    answer
  };
}

export function handleAddUserQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestionAnswer({
      qid,
      authedUser,
      answer
    })
      .then(info => {
        dispatch(addUserQuestionAnswer(info));
      })
      .then(() => dispatch(hideLoading));
  };
}
