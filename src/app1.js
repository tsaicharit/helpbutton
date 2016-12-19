import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Router, Route, browserHistory, hashHistory, Link, IndexRoute } from 'react-router';

import NavBarComponent from '../src/components/navBarComponent';
import RequestComponent from '../src/components/requestsComponent';
import AllDataComponent from '../src/components/allDataComponent';

import reducers from '../src/reducers/reducers';

class HomeApplication extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
        <NavBarComponent />
        {this.props.children}
      </div>
    )
  };
};

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={HomeApplication}>
        <IndexRoute component={RequestComponent} />
        <Route path='/requests' component={RequestComponent} />
        <Route path='/allData' component={AllDataComponent} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app1')
);