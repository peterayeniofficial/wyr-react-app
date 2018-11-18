import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestionAnswer } from "../actions/questions";
import { formatDate } from "../utils/helpers";
import { Grid } from "semantic-ui-react";
import { Image, Icon } from "semantic-ui-react";
import {
  Card,
  CardText,
  CardBody,
  Row,
  Col,
  Progress,
  Button,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  CardTitle
} from "reactstrap";

class PollDetails extends Component {
  state = {
    selectedOption: ""
  };

  questionSelection = event => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveQuestionAnswer(this.state.selectedOption);
  };
  render() {
    const { question, authedUser, users } = this.props;
    const { selectedOption } = this.state;
    const { timestamp, optionOne, optionTwo } = question;

    if (!question && this.props.redirect) {
      return <Redirect to="/404" />;
    }

    const optionOneIsAnswered = question.optionOne.votes.includes(authedUser);
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const isAnswered =
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser);
    const check = <Icon size="small" color="teal" name="check circle" />;
    const percentageOptionOne = (
      (optionOneVotes / (optionOneVotes + optionTwoVotes)) *
      100
    ).toFixed(2);

    const percentageOptionTwo = (
      (optionTwoVotes / (optionOneVotes + optionTwoVotes)) *
      100
    ).toFixed(2);

    return (
      <div>
        {" "}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 40px;
      }
    `}</style>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Card>
              <CardHeader>
                <CardText>Asked by: {users[question.author].name}</CardText>
                <div>{formatDate(timestamp)}</div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card>
                      <CardBody>
                        <Image
                          avatar
                          size="mini"
                          src={users[question.author].avatarURL}
                        />
                        <CardText>{users[question.author].name}</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="8">
                    <Card>
                      {isAnswered ? (
                        <CardBody>
                          <Card>
                            <CardBody>
                              <CardTitle>Results</CardTitle>
                              <CardText>
                                {" "}
                                {optionOne.text}{" "}
                                {optionOneIsAnswered ? check : null}
                              </CardText>
                              <Progress value={percentageOptionOne}>
                                ({optionOneVotes} vote(s) |{" "}
                                {percentageOptionOne}
                                %)
                              </Progress>
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardBody>
                              <CardText>
                                {optionTwo.text}{" "}
                                {!optionOneIsAnswered ? check : null}
                              </CardText>
                              <Progress value={percentageOptionTwo}>
                                ({optionTwoVotes} vote(s) |{" "}
                                {percentageOptionTwo}
                                %)
                              </Progress>
                            </CardBody>
                          </Card>
                        </CardBody>
                      ) : (
                        <CardBody>
                          <CardText>Would you rather</CardText>
                          <Form onSubmit={this.handleSubmit}>
                            <FormGroup tag="fieldset">
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="radio1"
                                    value="optionOne"
                                    onChange={this.questionSelection}
                                  />{" "}
                                  {optionOne.text}
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="radio1"
                                    value="optionTwo"
                                    onChange={this.questionSelection}
                                  />{" "}
                                  {optionTwo.text}
                                </Label>
                              </FormGroup>
                            </FormGroup>
                            <Button disabled={selectedOption === ""}>
                              Submit
                            </Button>
                          </Form>
                        </CardBody>
                      )}
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

// from class example concept
function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id] || null;
  // implementing redirect if invalid id is provided that is not
  //included in the database
  const arrQuestion = Object.values(questions).map(a => a.id);
  const noRedirect = arrQuestion.includes(id);
  const redirect = !noRedirect;

  return {
    authedUser,
    question,
    users,
    noRedirect,
    redirect
  };
}

function mapDispatchToProps(dispatch, props) {
  const { id } = props.match.params;
  return {
    saveQuestionAnswer: answer => {
      dispatch(handleAddQuestionAnswer(id, answer));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollDetails);
