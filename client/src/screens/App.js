/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { Container } from 'reactstrap';
import { SignInContainer } from './signin';
import Home from './home';
import NotFound from './notFound';

const MENU_ITEMS = [
  {
    title: 'Home', route: '/home', component: Home, exact: true, mainMenu: true,
  },
];

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    currentUser: PropTypes.object,
  };

  checkAuth(ComponentToRender) {
    const { isLoggedIn } = this.props;

    return props => (isLoggedIn ? <ComponentToRender {...props} />
      : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location },
        }}
        />
      ));
  }

  renderRoutes() {
    return (
      <div style={{ paddingTop: 20 }}>
        <Switch>
          <Route style={{ paddingTop: 20 }} path="/login" component={SignInContainer} />
          {
          MENU_ITEMS.map(screen => (
            <Route
              path={screen.route}
              key={screen.route}
              exact={screen.exact}
              render={this.checkAuth(screen.component)}
            />
          ))
          }
          <Route exact path="/*" component={NotFound} />
        </Switch>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <Container>
          {this.renderRoutes()}
        </Container>
      </Router>
    );
  }
}

export default App;
