import { createStore } from 'redux';

const initialState = {
  beer: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_BEER':
      return { beer: action.payload };
    case 'REMOVE_BEER':
      return { beer: null };
    case 'ADD_SWANDWICH':
      return { sandwich: action.payload };
    case 'REMOVE_SANDWICH':
      return { sandwich: null };
    case 'ADD_CHIPS':
      return { chips: action.payload };
    case 'REMOVE_CHIPS':
      return { chips: null };

    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_BEER',
  payload: 'Pale Ale'
});
console.log('added drink', store.getState());

store.dispatch({
  type: 'REMOVE_BEER',
  payload: 'Pale Ale'
});
console.log('removed drink', store.getState());
store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Salt and Vinegar'
});
console.log('add chips', store.getState());
store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: 'Salt and Vinegar'
});
console.log('remove chips', store.getState());
store.dispatch({
  type: 'ADD_SWANDWICH',
  payload: 'PBJ'
});
console.log('add sandwich', store.getState());
store.dispatch({
  type: 'REMOVE_SANDWICH',
  payload: 'SPBJ'
});
console.log('remove sandwich', store.getState());
