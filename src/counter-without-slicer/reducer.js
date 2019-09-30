import { INCREMENT, DECREMENT, CLEAR } from './action';

const INITIAL_STATE = 10;

export const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 10;
    case DECREMENT:
      return state -10;
    case CLEAR:
      return 10;
    default:
      return state;
  }
};
