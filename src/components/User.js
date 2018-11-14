import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

class User extends PureComponent {
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

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  };
}
export default connect(mapStateToProps)(User);
