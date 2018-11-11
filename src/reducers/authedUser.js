import { SET_AUTH_USER, UN_SET_AUTH_USER } from "../actions/authUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.id;
    case UN_SET_AUTH_USER:
      return null;
    default:
      return state;
  }
}
