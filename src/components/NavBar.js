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
    const { user, authedUser } = this.props;
    const { name, avatarURL, id } = user;
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
                <Menu.Item as={Link} to="/add">
                  New Question
                </Menu.Item>
                <Menu.Item as={Link} to="/leader">
                  Leader Board
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item>
                    welcome:
                    <Image avatar size="mini" src={avatarURL} />
                    {name}
                  </Menu.Item>

                  <Menu.Item name="Logout" onClick={this.logout} />
                </Menu.Menu>
              </Fragment>
            ) : (
              <Fragment>
                <Menu.Item as={Link} to="/">
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to="/add">
                  New Question
                </Menu.Item>
                <Menu.Item as={Link} to="/leader">
                  Leader Board
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item as={Link} to="/">
                    Sign In
                  </Menu.Item>
                </Menu.Menu>
              </Fragment>
            )}
          </Container>
        </Menu>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  const user = { ...users[authedUser] };
  return {
    user,
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(NavBar));
