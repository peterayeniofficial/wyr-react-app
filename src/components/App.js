import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import LeaderBoard from "./LeaderBoard";
import AddQuestion from "./AddQuestion";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Container>
            <Route path="/" exact Component={Dashboard} />
            <Route path="/add-question" Component={AddQuestion} />
            <Route path="/leader-board" Component={LeaderBoard} />
          </Container>
        </Fragment>
      </Router>
    );
  }
}

export default App;
