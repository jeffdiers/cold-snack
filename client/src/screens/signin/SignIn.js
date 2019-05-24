/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Redirect } from 'react-router-dom';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';

class SignIn extends Component {
    static propTypes = {
      isLoggedIn: PropTypes.bool.isRequired,
      errorMessage: PropTypes.object,
      authenticateUser: PropTypes.func.isRequired,
    };

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
      };
    }

    authenticateUser = () => {
      const { authenticateUser } = this.props;
      const { email, password } = this.state;
      console.log(email, password)
      return authenticateUser(email, password);
    };

    render() {
      const { isLoggedIn, errorMessage } = this.props;
      const { email, password } = this.state;

      if (isLoggedIn) {
        return <Redirect to="/" />;
      }

      return (
        <div className="form-signin-wrapper">
          <Row>
            <Col sm={{
              size: 6, push: 2, pull: 2, offset: 1,
            }}
            >
              <Form>

                {errorMessage
                  ? (
                    <div style={{ color: 'red' }}>
                      {errorMessage}
                      {' '}
                    </div>
                  )
                  : null
                            }
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input
                    value={email}
                    type="email"
                    placeholder="Enter Email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    value={password}
                    type="password"
                    placeholder="Enter Password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </FormGroup>
              </Form>
              <Button color="primary" onClick={this.authenticateUser}>
                            Signin
              </Button>
            </Col>
          </Row>
        </div>
      );
    }
}

export default SignIn;
