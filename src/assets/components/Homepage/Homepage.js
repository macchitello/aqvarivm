import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Map as ImmutableMap } from 'immutable';
import Posts from '../Posts';
import Post from '../Post';
import './Homepage.css';

const BASE = "aqv-homepage";

class Homepage extends Component {
  static get propTypes() {
    return {
      posts: PropTypes.instanceOf(ImmutableMap),
      users: PropTypes.instanceOf(ImmutableMap),
      fetchPosts: PropTypes.func.isRequired,
      fetchUsers: PropTypes.func.isRequired
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className={BASE}>
        <Posts>
            {
              this.props.posts.map((item, i) => (
                <Post
                  item={item}
                  id={item.id}
                  index={i}
                  key={item.id}
                  users={this.props.users}
                />
              )).toArray()
            }
          </Posts>
      </div>
    );
  }
}

export default Homepage;
