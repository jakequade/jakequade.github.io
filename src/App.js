import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path={`/`}
          render={routerProps => (
            <div>
              <p>Hi there</p>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
