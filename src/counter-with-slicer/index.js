import { connect } from 'react-redux';
import { counter } from './action-reducer-selector';
import Counter from '../counter';

const { actions: counterActions, selectors } = counter;



const { getCounter } = selectors;
export default connect(
  state => {
    return {
      counter: getCounter(state)
    };
  },
  counterActions
)(Counter);
