import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Question from "./Question";

class Dashboard extends Component {
  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;

    const panes = [
      {
        menuItem: "Unanswered",
        render: () => (
          <Tab.Pane attached={false}>
            <Row>
              {unansweredQuestions.map(qid => (
                <Col key={qid}>
                  <Question id={qid} />
                </Col>
              ))}
            </Row>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Answered",
        render: () => (
          <Tab.Pane attached={false}>
            <Row>
              {answeredQuestions.map(qid => (
                <Col key={qid}>
                  <Question id={qid} />
                </Col>
              ))}
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

        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  const answeredQuestions = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unansweredQuestions = Object.keys(questions)
    .filter(id => !answeredQuestions.includes(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return {
    authedUser,
    answeredQuestions,
    unansweredQuestions
  };
}

export default connect(mapStateToProps)(Dashboard);
