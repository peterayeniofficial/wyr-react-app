export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

export function getQuestion(questions) {
  return {
    type: RECEIVE_QUESTION,
    questions
  };
}
