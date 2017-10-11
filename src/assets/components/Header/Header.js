import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './Header.css';

const BASE = "aqv-header";

class Header extends Component {
  static get propTypes() {
    return {
      toggleMenu: PropTypes.func.isRequired,
      isLoggedIn: PropTypes.bool.isRequired,
      displayModal: PropTypes.func.isRequired
    }
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={BASE}>
        <div className={`${BASE}__headerText`}>
          <button className={`${BASE}__toggleMenu`} onClick={this.props.toggleMenu}>
            <Icon name='list layout' />
          </button>
          <h1>aqvarivm</h1>
          <button className={`${BASE}__newPostTrigger`} onClick={() => {
            this.props.displayModal({
              show: true,
              section: 'new-post'
            });
          }}>
            <Icon name='plus' />
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
