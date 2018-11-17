import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function saveNewQuestion(info) {
  return _saveQuestion(info);
}

export function saveNewQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
