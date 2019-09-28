import { connect } from 'react-redux';
import { counter } from './action-reducer-selector';
const { actions: counterActions, selectors } = counter;

import Counter from '../counter';


const { getCounter } = selectors;
export default connect(
  state => {
    return {
      counter: getCounter(state)
    };
  },
  counterActions
)(Counter);
