import { createSlice } from '../helpers/redux';

/**
 * This variable contains all info we donot have to write manually 
 * action, reducers or selectors
 * Action Names: 'counter/increment', 'counter/decrement', 'counter/clear'
 * reducers would use immer so you would nothave to write 
 *    reducers as well and it would not mutate the state.
 * will create a selector method name getCounter to access the state
 */
export const counter = createSlice({
  slice: 'counter',
  initialState: 10,
  reducers: {
    increment: state => state + 10,
    decrement: state => state - 10,
    clear: () => 10
  }
});
