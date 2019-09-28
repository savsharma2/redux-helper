import React from 'react';
import './style.css';
export default ({ counter, increment, decrement, clear }) => {
  return [
    <div id='counter'>{counter}</div>,
    <div className='button_group'>
      <button id='subtract' onClick={decrement}>
        - 10
      </button>
      <button id='reset' onClick={clear}>
        Reset
      </button>
      <button id='add' onClick={increment}>
        + 10
      </button>
    </div>
  ];
};
