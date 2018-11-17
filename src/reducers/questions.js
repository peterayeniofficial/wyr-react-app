import {
  GET_QUESTIONS,
  ADD_NEW_QUESTION,
  ADD_QUESTION_ANSWER
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_NEW_QUESTION:
      const { author, optionOneText, optionTwoText, id } = action;
      return {
        ...state,
        [id]: {
          id,
          author,
          timestamp: Date.now(),
          optionOne: {
            votes: [],
            text: optionOneText
          },
          optionTwo: {
            votes: [],
            text: optionTwoText
          }
        }
      };
    case ADD_QUESTION_ANSWER:
      const question = { ...state[action.qid] };
      return {
        ...state,
        [action.qid]: {
          ...question,
          [action.answer]: {
            ...question[action.answer],
            votes: question[action.answer].votes.concat([action.authedUser])
          }
        }
      };

    default:
      return state;
  }
}
