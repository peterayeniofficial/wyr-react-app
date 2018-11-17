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
  const { question } = props;
  return (
    <Card>
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

// concept from class example
function mapStateToProps({ questions }, { id }) {
  const question = questions[id];
  return {
    question
  };
}

export default withRouter(connect(mapStateToProps)(Question));
