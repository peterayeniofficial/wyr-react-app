export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

// concept from class example

/* export function formatQuestion(question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    avatar: avatarURL,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    optionOneIsAnswered: optionOne.votes.includes(authedUser),
    optionTwoIsAnswered: optionTwo.votes.includes(authedUser),
    isAnswered:
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser),
    optionOneVotes: optionOne.votes.length,
    optionTwoVotes: optionTwo.votes.length
  };
} */
