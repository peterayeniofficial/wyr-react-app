import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, Row, Col, Badge, Button, CardText } from "reactstrap";
import { Image, Grid } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class LeaderBoard extends Component {
  render() {
    const { topUser, authedUser } = this.props;
    if (authedUser === null) {
      return (
        <Redirect
          to={{ pathname: "/sign-in", state: { redirectUrl: "/leader" } }}
        />
      );
    }
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
            <Card>
              {topUser.map((user, index) => (
                <CardBody key={user.id}>
                  <Row>
                    <Col>
                      <Card>
                        <CardBody>
                          <Image avatar size="mini" src={user.imgUrl} />
                          <CardText>{user.name}</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <CardBody>
                          <Badge color="success" style={{ fontSize: "34px" }}>
                            {index + 1}
                          </Badge>
                          <Button color="primary" outline block>
                            <Badge color="primary">{user.answered}</Badge>
                          </Button>
                          <Button color="primary" outline block>
                            <Badge color="secondary">{user.created}</Badge>
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              ))}
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
// with insight from the class room

function mapStateToProps({ users, authedUser }) {
  const topUser = Object.keys(users)
    .map(id => ({
      id,
      created: users[id].questions.length,
      answered: Object.keys(users[id].answers).length,
      name: users[id].name,
      imgUrl: users[id].avatarURL
    }))
    .sort((a, b) => b.created + b.answered - (a.created + a.answered));
  return {
    topUser,
    authedUser
  };
}

export default connect(mapStateToProps)(LeaderBoard);
