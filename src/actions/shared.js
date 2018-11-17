import { _saveQuestion } from "../utils/_DATA";
import { getInitialData } from "../utils/api";
import { getQuestions, addNewQuestion } from "../actions/questions";
import { getUsers, addNewUserQuestion } from "../actions/users";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleAddQuestion(authedUser, optionOne, optionTwo) {
  const question = {
    author: authedUser,
    optionOne,
    optionTwo
  };
  return (dispatch, getState) => {
    // with concept from -> https://github.com/xavierartot/would-you-rather/blob/master/src/reducers/questions.js
    // thunk pattern with redux-thunk
    _saveQuestion(question).then((questions, users) => {
      // question reducer
      dispatch(addNewQuestion(authedUser, optionOne, optionTwo, questions.id));
      // users reducer
      dispatch(addNewUserQuestion(authedUser, questions.id));
    });
  };
}
