import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Sidebar, Segment, Menu } from 'semantic-ui-react';
import Modal from '../containers/Modal';
import Overlay from '../containers/overlay/Overlay';
import Header from '../containers/Header';
import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import './App.css';

const BASE = "aqv-app";

class App extends Component {
  static get propTypes() {
    return {
      children: PropTypes.node.isRequired
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState(({ sidebarVisible }) => {
      return {
        sidebarVisible: !sidebarVisible
      };
    });
  }

  render() {
    return (
      <div className={`${BASE}`}>
        <Modal />
        <Overlay />
        <Header toggleMenu={this.toggleMenu} />
        <div className={`${BASE}__main`}>
        <Sidebar.Pushable as={Segment} className={`${BASE}__pushable`}>
          <Sidebar as={Menu} animation='push' width='thin' visible={this.state.sidebarVisible} icon='labeled' vertical inverted>
            <Menu.Item name='home' className={`${BASE}__menuItem`}>
              <Link to="/" className={`${BASE}__menuItemLink`}>
                <Icon name='home' className={`${BASE}__menuItem`}/>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item name='user' className={`${BASE}__menuItem`}>
              <Link to="/account" className={`${BASE}__menuItemLink`}>
                <Icon name='user' className={`${BASE}__menuItem`}/>
                Account
              </Link>
            </Menu.Item>
            <Menu.Item name='setting' className={`${BASE}__menuItem`}>
              <Link to="/settings" className={`${BASE}__menuItemLink`}>
                <Icon name='setting' className={`${BASE}__menuItem`}/>
                Settings
              </Link>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}

export default App;
