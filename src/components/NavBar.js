import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { unSetAuthUser } from "../actions/authUser";
import { Link } from "react-router-dom";
import { Container, Menu, Image } from "semantic-ui-react";

class NavBar extends Component {
  logout = e => {
    e.preventDefault();
    const { history, dispatch } = this.props;
    history.push("/");
    dispatch(unSetAuthUser());
  };
  render() {
    const { authedUser, imgUrl } = this.props;
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              Would You Rather?
            </Menu.Item>
            {authedUser ? (
              <Fragment>
                <Menu.Item as={Link} to="/">
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to="/add-question">
                  New Question
                </Menu.Item>
                <Menu.Item as={Link} to="/leader-board">
                  Leader Board
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item>
                    <Image
                      avatar
                      size="mini"
                      src="https://randomuser.me/api/portraits/women/62.jpg"
                    />
                    Hello, Peter
                  </Menu.Item>

                  <Menu.Item name="Logout" onClick={this.logout} />
                </Menu.Menu>
              </Fragment>
            ) : (
              <Fragment>
                <Menu.Item as={Link} to="/">
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to="/add-question">
                  New Question
                </Menu.Item>
                <Menu.Item as={Link} to="/leader-board">
                  Leader Board
                </Menu.Item>
              </Fragment>
            )}
          </Container>
        </Menu>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(NavBar));
