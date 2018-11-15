import React from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardText,
  Button
} from "reactstrap";
import { withRouter } from "react-router-dom";

const Question = props => {
  const questionDetails = (e, id) => {
    e.preventDefault();
    props.history.push(`/questions/${id}`);
  };
  const { question, users } = props;
  const { id, timestamp, optionOne, optionTwo } = question;
  return (
    <Card>
      <CardHeader>
        <Image avatar size="mini" src={users[question.author].avatarURL} />
        {users[question.author].name} Asks:
      </CardHeader>
      <CardBody>
        <CardTitle>Would You Rather</CardTitle>
        <CardText>
          {optionOne.text} or {optionTwo.text}
        </CardText>
        <Button
          outline
          color="info"
          block
          onClick={e => questionDetails(e, question.id)}
        >
          View Poll
        </Button>
      </CardBody>
    </Card>
  );
};

// concept from class example
function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question,
    users
  };
}

export default withRouter(connect(mapStateToProps)(Question));
