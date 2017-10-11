import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './assets/containers/App';
import Homepage from './assets/containers/Homepage';
import configureStore, { history } from './assets/configureStore';
import registerServiceWorker from './assets/registerServiceWorker';

const store = configureStore();

const Application = () => {
  registerServiceWorker();
  console.log('INIT APP!');

  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('aqvarivm')
  );
}

Application();
