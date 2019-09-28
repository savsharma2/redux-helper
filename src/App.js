import React, { Component } from 'react';
import CounterWithSlicer from './counter-with-slicer';
import CounterWithoutSlicer from './counter-without-slicer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Counter with slicer</h1>
        <CounterWithSlicer></CounterWithSlicer>
        <h1>Counter without slicer</h1>
        <CounterWithoutSlicer></CounterWithoutSlicer>
      </div>
    );
  }
}

export default App;
