import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'reactstrap';

class Home extends Component {
  static propTypes = {
    userSignOut: PropTypes.func.isRequired,
  };

  userSignOut = () => {
    const { userSignOut } = this.props;
    return userSignOut();
  }

  render() {
    return (
      <div className="page-content-wrapper">
        <h2>
          This is Home screen
          <br />
          <Button onClick={this.userSignOut}>Sign out</Button>
        </h2>
      </div>
    );
  }
}

export default Home;
