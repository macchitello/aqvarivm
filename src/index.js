import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './assets/containers/App';
import App from './assets/components/App';
import App from './assets/containers/App';
import configureStore, { history } from './assets/configureStore';
import registerServiceWorker from './assets/registerServiceWorker';

// Async Routers (For code splitting):
const Application = () => {
  const store = configureStore();
  registerServiceWorker();

  console.log('INIT APP!');

  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('aqvarivm')
  );
}

Application();
