import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import App from '../../components/App';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
