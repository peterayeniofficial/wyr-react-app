import { GET_USERS } from "../actions/users";
import { ADD_QUESTION_ANSWER } from "../actions/questions";

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

    default:
      return state;
  }
}
