import React, { Component } from "react";
import { setAuthUser } from "../actions/authUser";
import { connect } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    authId: "",
    toDashboard: false
  };

  onChange = authId => {
    this.setState({
      authId
    });
  };

  // get this to work with insight from the reviewer
  onUserLogin = () => {
    const { authId } = this.state;
    if (authId) {
      this.props.dispatch(setAuthUser(authId));
      this.setState({ toDashboard: true });
    }
  };

  render() {
    const { authId } = this.state;
    const { users } = this.props;

    if (this.state.toDashboard === true) {
      if (this.props.location.state === undefined) {
        return <Redirect to={"/"} />;
      } else if (this.props.location.state.redirectUrl[0] === "q") {
        return <Redirect to={this.props.location.state.redirectUrl} />;
      } else {
        return <Redirect to={this.props.location.state.redirectUrl} />;
      }
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
            <Form>
              <FormGroup>
                <Label for="userSelect">Select User</Label>

                <Input
                  type="select"
                  name="select"
                  value={authId}
                  onChange={e => this.onChange(e.target.value)}
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  {Object.keys(users).map(user => (
                    <option key={user} value={user}>
                      {users[user].name}
                    </option>
                  ))}
                  }
                </Input>
              </FormGroup>
              <Button
                outline
                color="info"
                block
                onClick={this.onUserLogin}
                disabled={!authId}
              >
                Sign In
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  };
}

export default connect(mapStateToProps)(SignIn);
