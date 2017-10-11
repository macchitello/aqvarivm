import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from '../../components/Modal';

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
    config: state.get('modal')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
