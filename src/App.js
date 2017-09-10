import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BASE = "max-app";

class App extends Component {
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

        </div>
      </div>
    );
  }
}

export default App;
