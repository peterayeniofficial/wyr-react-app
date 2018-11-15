import { saveNewQuestionAnswer, saveNewQuestion } from "../utils/api";
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

export function addNewQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  };
}
// with support from mentors
export function handleAddNewQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState;
    dispatch(showLoading());

    return saveNewQuestion({
      optionOneText: question.optionOne,
      optionTwoText: question.optionTwo,
      author: authedUser
    })
      .then(question => dispatch(addNewQuestion(question)))
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

export function handleAddQuestionAnswer(info) {
  return dispatch => {
    dispatch(addQuestionAnswer(info));

    return saveNewQuestionAnswer(info).catch(e => {
      console.warn("Error in handleAddQuestionAnswer", e);
      dispatch(addQuestionAnswer(info));
      alert("Error saving answer");
    });
  };
}
