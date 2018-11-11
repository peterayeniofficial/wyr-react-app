import { getInitialData } from "../utils/api";
import { getQuestion } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { hideLoading, showLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData.then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(getQuestion(questions));
      dispatch(hideLoading());
    });
  };
}
