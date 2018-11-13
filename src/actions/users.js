export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTION = "ADD_USERS_QUESTION";
export const ADD_USER_QUESTION_ANSWER = "ADD_USERS_QUESTION_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function addUserQuestion(qid, authedUser) {
  return {
    type: ADD_USER_QUESTION,
    qid,
    authedUser
  };
}
