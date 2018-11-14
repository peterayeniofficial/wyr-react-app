import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
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
  const { question } = props;
  const {
    id,
    name,
    avatar,
    timestamp,
    optionOneText,
    optionTwoText
  } = question;
  return (
    <Card>
      <CardHeader>
        <Image avatar size="mini" src={avatar} />
        {name} Asks:
      </CardHeader>
      <CardBody>
        <CardTitle>Would You Rather</CardTitle>
        <CardText>
          {optionOneText} or {optionTwoText}
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
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  };
}

export default withRouter(connect(mapStateToProps)(Question));
