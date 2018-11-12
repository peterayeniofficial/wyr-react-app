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

export function addQuestionAnswer(qid, authedUser, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    qid,
    authedUser,
    answer
  };
}
