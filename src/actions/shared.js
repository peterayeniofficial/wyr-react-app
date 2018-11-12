import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import {
  getQuestion,
  addQuestion,
  addQuestionAnswer
} from "../actions/questions";
import {
  receiveUsers,
  addUserQuestion,
  addUserQuestionAnswer
} from "../actions/users";
import { hideLoading, showLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(getQuestion(questions));
      dispatch(hideLoading());
    });
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
      .then(formatedQuestion => {
        dispatch(addQuestion(formatedQuestion));
        dispatch(addUserQuestion(authedUser, formatedQuestion.id));
      })
      .then(() => dispatch(hideLoading()));
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
      .then(() => {
        dispatch(addQuestionAnswer(authedUser, qid, answer));
        dispatch(addUserQuestionAnswer(authedUser, qid, answer));
      })
      .then(() => dispatch(hideLoading));
  };
}
