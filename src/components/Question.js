import React from "react";
import { connect } from "react-redux";
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
  return (
    <Card>
      <CardHeader>Question</CardHeader>
      <CardBody>
        <CardTitle>Would You Rather</CardTitle>
        <CardText>
          {question.optionOne.text} or {question.optionTwo.text}
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

function mapStateToProps({ questions }, { id }) {
  return {
    question: questions[id]
  };
}

export default withRouter(connect(mapStateToProps)(Question));
