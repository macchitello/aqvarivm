import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      users: [],
      sidebarVisible: false,
      visibleItem: 0
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
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

  handleUserClick(id) {
    const URL = 'http://143.239.97.138:8080/Aqvarium/ws/userService/getAll';
    const OPTIONS = { method: 'GET' };

    fetch(URL, OPTIONS)
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.ok) {
          if (json instanceof Array) {
            this.setState({
              users: json,
              visibleItem: id === this.state.visibleItem ? 0 : id
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

  renderUserInfo(idUser) {
    return this.state.users.map(user => {
      if (user.idUser === idUser) {
        return (
          <Card.Content extra key={user.idUser}>
            <Card.Meta>
              {`First Name: ${user.firstName}`}
            </Card.Meta>
            <Card.Meta>
              {`Last Name: ${user.lastName}`}
            </Card.Meta>
            <Card.Meta>
              {`Email: ${user.email}`}
            </Card.Meta>
            <Card.Description>
              {`Contact: 083/${Math.ceil((Math.random() * 34623) * 342)}`}
            </Card.Description>
          </Card.Content>
        );
      }
      return null;
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
          <Sidebar.Pusher className={`${BASE}__pusher`}>
            {
              !this.state.posts.length
              ? null
              : this.state.posts.map((item, i) => (
                <Card className={`${BASE}__card`} key={item.id}>
                  <Image
                    src={`/static_assets/acquario${i}.jpg`}
                    href="#"
                  />
                  <Card.Content>
                    <Image
                      className={`${BASE}__userImage`}
                      onClick={() => this.handleUserClick(item.id)}
                      floated='right'
                      size='mini'
                      src={`/static_assets/user${item.idUser}.jpg`}
                    />
                    <Card.Header>
                      {item.title}
                    </Card.Header>
                    <Card.Meta>
                      <span className='date'>
                        {item.dtIns}
                      </span>
                    </Card.Meta>
                    <Card.Description>
                      {item.body}
                    </Card.Description>
                  </Card.Content>
                  {
                    this.state.visibleItem !== 0 && this.state.visibleItem === item.id
                    ? this.renderUserInfo(item.idUser)
                    : null
                  }
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
