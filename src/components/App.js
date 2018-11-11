import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Container } from "semantic-ui-react";
import LoadingBar from "react-redux-loading";

import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import LeaderBoard from "./LeaderBoard";
import AddQuestion from "./AddQuestion";
import SignIn from "./SignIn";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { notAuthenticated } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Container>
            <NavBar />

            <Switch>
              {notAuthenticated ? (
                <Route path="/" exact Component={SignIn} />
              ) : (
                <Fragment>
                  <Route path="/" exact Component={Dashboard} />
                  <Route path="/add-question" Component={AddQuestion} />
                  <Route path="/leader-board" Component={LeaderBoard} />
                </Fragment>
              )}
            </Switch>
          </Container>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    notAuthenticated: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
