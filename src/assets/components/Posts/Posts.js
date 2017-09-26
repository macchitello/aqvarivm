// TO FINISH
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Sidebar, Segment, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Posts.css';

const BASE = "aqv-posts";

class Posts extends Component {
  static get propTypes() {
    return {
      posts: PropTypes.instanceOf(Array).isRequired
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: [],
      visibleItem: 0
    };
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
            <Card.Header>
              {`First Name: ${user.firstName}`}
            </Card.Header>
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

      </div>
    );
  }
}

export default Posts;
