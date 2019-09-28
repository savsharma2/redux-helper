import { connect } from 'react-redux';

import { getCounter } from './selector';
import { increment, decrement, clear } from './action';

import Counter from '../counter';

export default connect(
  state => {
    return {
      counter: getCounter(state)
    };
  },
  { increment, decrement, clear }
)(Counter);
