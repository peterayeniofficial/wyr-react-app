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
import NotFound from "./NotFound";
import PollDetails from "./PollDetails";

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
          <NavBar />
          <Container>
            <Switch>
              {notAuthenticated ? (
                <Route path="/" exact component={SignIn} />
              ) : (
                <Fragment>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/add" exact component={AddQuestion} />
                  <Route path="/questions/:id" component={PollDetails} />
                  <Route path="/leader" exact component={LeaderBoard} />
                </Fragment>
              )}
              <Route component={NotFound} />
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
