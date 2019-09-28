export const INCREMENT = 'counter/increment-manual';
export const DECREMENT = 'counter/decrement-manual';
export const CLEAR = 'counter/clear-manual';

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const clear = () => {
  return {
    type: CLEAR
  };
};
