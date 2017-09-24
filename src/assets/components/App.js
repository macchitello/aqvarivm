import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
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
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.section);
  }

  render() {
    return (
      <div className={`${BASE}`}>
        <div className={`${BASE}__header`}>
          <div className={`${BASE}__headerText`}>
            aqvarivm
          </div>
          <div className={`${BASE}__headerNavigation`}>
            <div className={`${BASE}__navigationItem ${BASE}__navigationItem--gallery`}>
              <i className="fa fa-anchor" aria-hidden="true"></i>
            </div>
            <div className={`${BASE}__navigationItem ${BASE}__navigationItem--contacts`}>
              <i className="fa fa-commenting" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className={`${BASE}__main`}>
        {/*<Card>
          <Image src="" />
          <Card.Content>
            <Card.Header>
              The Aqvarivm
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Posted in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac vestibulum leo.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='unhide' />
              View more
            </a>
          </Card.Content>
        </Card>*/}
        </div>
      </div>
    );
  }
}

export default App;
