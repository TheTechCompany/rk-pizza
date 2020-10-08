import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import OrderView from './views/order-view';
import LandingView from './views/landing-view';

import configureStore from './configureStore'
import './App.css';

const store = configureStore();

function App() {

  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Route path="/" exact component={LandingView} />
        <Route path="/pizza" component={OrderView} />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
