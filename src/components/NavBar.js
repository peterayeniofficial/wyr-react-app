import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              Would You Rather?
            </Menu.Item>
            <Menu.Item as={Link} to="/">
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/add-question">
              New Question
            </Menu.Item>
            <Menu.Item as={Link} to="/leader-board">
              Leader Board
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
