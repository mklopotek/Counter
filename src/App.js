import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Counter from './Counter'
import Dashboard from './Dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path={'/'} exact component={Dashboard} />
            <Route path={'/counter'} component ={() => <Counter />} />
          </div>
        </Router>


      </div>

    );
  }
}

export default App;
