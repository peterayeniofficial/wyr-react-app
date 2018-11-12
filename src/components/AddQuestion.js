import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { addQuestion } from "../actions/questions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  handleOptionOneChange = e => {
    this.setState({
      optionOne: e.target.value
    });
  };

  handleOptionTwoChange = e => {
    this.setState({
      optionTwo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { history, dispatch } = this.props;

    dispatch(addQuestion(optionOne, optionTwo));
    history.push("/");
  };

  render() {
    const { optionOne, optionTwo } = this.state;
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

export default connect()(AddQuestion);
