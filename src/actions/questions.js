import { saveNewQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

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

// action creators for saving new question

export function addNewQuestion(author, optionOneText, optionTwoText, id) {
  return {
    type: ADD_NEW_QUESTION,
    author,
    optionOneText,
    optionTwoText,
    id
  };
}
// with support from mentors
/* export function handleAddNewQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState;
    dispatch(showLoading());

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(question => dispatch(addNewQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}
 */

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
