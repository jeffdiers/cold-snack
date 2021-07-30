/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { Container } from 'reactstrap';
import { SignInContainer } from './signin';
import HomeContainer from './home';
import NotFound from './notFound';
import Admin from './admin';

const MENU_ITEMS = [
  {
    title: 'Home', route: '/home', component: HomeContainer, exact: true, mainMenu: true,
  },
  {
    title: 'Admin', route: '/admin', component: Admin, exact: true, mainMenu: true,
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

  checkRole() {
    const { currentUser } = this.props;

    return currentUser.role === 'admin' && <Admin />;
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
          {/* <Route exact path="/admin" render={this.checkRole()} /> */}
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
