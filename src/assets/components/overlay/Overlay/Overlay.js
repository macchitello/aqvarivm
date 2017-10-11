import PropTypes from 'prop-types';
import React from 'react';
import './Overlay.css';

const Overlay = ({
  isVisible,
  navigationPanelVisibility,
  onDismiss
}) => {
  let classNavigationPanelOpen = '';
  if (navigationPanelVisibility) {
    classNavigationPanelOpen = 'mb-container-overlay--visible--navigation-panel-open';
  }
  return (
    <div className={`mb-container-overlay ${isVisible ? 'mb-container-overlay--visible' : ''} ${classNavigationPanelOpen}`}>
      <div
        role="button"
        className="mb-overlay"
        onClick={onDismiss}
      />
    </div>
  );
};


Overlay.propTypes = {
  onDismiss: PropTypes.func,
  navigationPanelVisibility: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
};

export default Overlay;
