import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <Image avatar size="mini" src={user.avatarURL} />
        Hello, {user.name}
      </Fragment>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser];
  return {
    user
  };
}

export default connect(mapStateToProps)(User);
