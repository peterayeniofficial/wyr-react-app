import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Question from "./Question";
import { Grid } from "semantic-ui-react";

class Dashboard extends Component {
  render() {
    const { allQuestions } = this.props;

    const panes = [
      {
        menuItem: "Unanswered",
        render: () => (
          <Tab.Pane attached={false}>
            <Row>
              <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                  {allQuestions.map(qid => (
                    <Col key={qid}>
                      <Question id={qid} />
                    </Col>
                  ))}
                </Grid.Column>
              </Grid>
            </Row>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Answered",
        render: () => (
          <Tab.Pane attached={false}>
            <Row>
              <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                  {allQuestions.map(qid => (
                    <Col key={qid}>
                      <Question id={qid} />
                      <br />
                    </Col>
                  ))}
                </Grid.Column>
              </Grid>
            </Row>
          </Tab.Pane>
        )
      }
    ];

    return (
      <div>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 40px;
      }
    `}</style>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

// Use Semantic UI and Reactrap for UI

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  const allQuestions = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  return {
    authedUser,
    allQuestions
  };
}

export default connect(mapStateToProps)(Dashboard);
