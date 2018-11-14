export const GET_USERS = "GET_USERS";
export const ADD_NEW_USER_QUESTION = "ADD_NEW_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}
export function addNewUserQuestion(authedUser, qid) {
  return {
    type: ADD_NEW_USER_QUESTION,
    authedUser,
    qid
  };
}
