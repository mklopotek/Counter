import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          Hello World!
      </div>
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
