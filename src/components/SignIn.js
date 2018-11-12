import React, { Component } from "react";
import { setAuthUser } from "../actions/authUser";
import { connect } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class SignIn extends Component {
  state = {
    authId: ""
  };

  onChange = authId => {
    this.setState({
      authId
    });
  };

  onUserLogin = authId => {
    if (authId) {
      this.props.dispatch(setAuthUser(authId));
    }
  };

  render() {
    const { authId } = this.state;
    const { users } = this.props;
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

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(SignIn);
