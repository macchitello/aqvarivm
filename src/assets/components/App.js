import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Card, Icon, Image, Sidebar, Segment, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import './App.css';

const BASE = "max-app";

class App extends Component {
  static get propTypes() {
    return {
      section: PropTypes.string.isRequired
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      sidebarVisible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    const URL = 'http://143.239.97.138:8080/Aqvarium/ws/postService/getAll';
    const OPTIONS = { method: 'GET' };

    fetch(URL, OPTIONS)
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.ok) {
          if (json instanceof Array) {
            this.setState({
              posts: json
            });
            return;
          }
          return;
        }
        const errorMessage = json.errorMessage ? json.errorMessage : 'Unexpected error';
        Promise.reject(errorMessage);
      })
      .catch(err => Promise.reject(err));
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
        <div className={`${BASE}__header`}>
          <div className={`${BASE}__headerText`}>
            <button className={`${BASE}__toggleMenu`} onClick={this.toggleMenu}>
              <Icon name='list layout' />
            </button>
            <h1>aqvarivm</h1>
          </div>
        </div>
        <div className={`${BASE}__main`}>
        <Sidebar.Pushable as={Segment} className={`${BASE}__pushable`}>
          <Sidebar as={Menu} animation='push' width='thin' visible={this.state.sidebarVisible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='user'>
              <Icon name='user' />
              Account
            </Menu.Item>
            <Menu.Item name='setting'>
              <Icon name='setting' />
              Settings
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher className={`${BASE}__pusher`}>
            {
              !this.state.posts.length
              ? null
              : this.state.posts.map(item => (
                <Card className={`${BASE}__card`} key={item.id}>
                  <Image
                    src="/static_assets/acquario.jpg"
                    href="#"
                  />
                  <Card.Content>
                    <Card.Header>
                      {item.title}
                    </Card.Header>
                    <Card.Meta>
                      <span className='date'>
                        {item.dtIns}
                      </span>
                    </Card.Meta>
                    <Card.Description>
                      {`Pic: ${item.pic}`}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='unhide' />
                      View more
                    </a>
                  </Card.Content>
                </Card>
              ))
            }
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}

export default App;
