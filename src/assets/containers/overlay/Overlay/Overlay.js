import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Overlay from '../../../components/overlay/Overlay';

import {
  closeOverlay
} from '../../../modules/overlay/actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onDismiss: closeOverlay
  }, dispatch);
}

function mapStateToProps(state) {
  const overlayVisibility = state.getIn(['overlay', 'visible']);

  const isVisible = overlayVisibility;

  return {
    isVisible
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
