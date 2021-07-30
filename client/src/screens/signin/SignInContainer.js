import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/login';
import SignIn from './SignIn';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: (email, password) => dispatch(authenticateUser(email, password)),
});

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
