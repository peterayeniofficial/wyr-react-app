import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Image } from "semantic-ui-react";

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
            <Menu.Menu position="right">
              <Menu.Item>
                <Image
                  avatar
                  size="mini"
                  src="https://randomuser.me/api/portraits/women/62.jpg"
                />
                Hello, Peter
              </Menu.Item>

              <Menu.Item name="Logout" />
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
