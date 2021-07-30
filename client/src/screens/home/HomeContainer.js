import { connect } from 'react-redux';
import { userSignOut } from '../../actions/logout';
import Home from './Home';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  userSignOut: () => dispatch(userSignOut()),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
