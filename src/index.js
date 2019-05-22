import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case: 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);