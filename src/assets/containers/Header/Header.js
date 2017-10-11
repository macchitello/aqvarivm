import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';

import {
  displayModal
} from '../../modules/modal/actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    displayModal
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.getIn(['user', 'isLoggedIn'])
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
