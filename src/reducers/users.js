import { GET_USERS } from "../actions/users";
import { ADD_QUESTION_ANSWER } from "../actions/questions";
import { ADD_NEW_USER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_QUESTION_ANSWER:
      const user = state[action.authedUser];
      return {
        ...state,
        [action.authedUser]: {
          ...user,
          answers: {
            ...user.answers,
            [action.qid]: action.answer
          }
        }
      };
    case ADD_NEW_USER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.qid])
        }
      };

    default:
      return state;
  }
}
