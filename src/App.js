import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BASE = "max-app";

class App extends Component {
  render() {
    return (
      <div className={`${BASE}`}>
        <div className={`${BASE}__header`}>
          <div className={`${BASE}__containerHelmMenu`}>
            Ciao
            <div className={`${BASE}__helmOptions`}>
              <div className={`${BASE}__helmPhotos`}></div>
              <div className={`${BASE}__helmContacts`}></div>
            </div>
          </div>
        </div>
        <div className={`${BASE}__main`}></div>

      </div>
    );
  }
}

export default App;
