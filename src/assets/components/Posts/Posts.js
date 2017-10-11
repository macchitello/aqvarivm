import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Posts.css';

const BASE = "aqv-posts";

class Posts extends Component {
  static get propTypes() {
    return {
      children: PropTypes.node.isRequired
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={`${BASE}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Posts;
