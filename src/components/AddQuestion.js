import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

// with insight from the class room

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  handleOptionOneChange = e => {
    e.preventDefault();
    this.setState({
      optionOne: e.target.value
    });
  };

  handleOptionTwoChange = e => {
    e.preventDefault();
    this.setState({
      optionTwo: e.target.value
    });
  };
  // with insight from the class room
  handleSubmit = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { history, dispatch, authedUser } = this.props;
    dispatch(handleAddQuestion(authedUser, optionOne, optionTwo));
    history.push("/");
  };

  render() {
    const { optionOne, optionTwo } = this.state;
    const { authedUser } = this.props;
    if (authedUser === null) {
      return (
        <Redirect
          to={{ pathname: "/sign-in", state: { redirectUrl: "/add" } }}
        />
      );
    }
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 40px;
      }
    `}</style>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="exampleSelect">Whould you Rather</Label>
                <Input
                  type="text"
                  name="optionOne"
                  value={optionOne}
                  placeholder="Enter option one text here"
                  onChange={this.handleOptionOneChange}
                />
                <br />
                <p>Or</p>
                <Input
                  type="text"
                  name="optionTwo"
                  value={optionTwo}
                  placeholder="Enter option two text here"
                  onChange={this.handleOptionTwoChange}
                />
              </FormGroup>
              <Button
                outline
                color="info"
                block
                disabled={optionOne === "" || optionTwo === ""}
              >
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(AddQuestion);
