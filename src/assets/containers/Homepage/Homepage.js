import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Homepage from '../../components/Homepage';

import {
  fetchPosts,
  fetchUsers
} from '../../modules/application/actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPosts,
    fetchUsers
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    posts: state.getIn(['application', 'posts']),
    users: state.getIn(['application', 'users']),
    isLoggedIn: state.getIn(['user', 'isLoggedIn'])
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));
