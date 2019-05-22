import { createStore } from 'redux';
import { ADD_BEER, REMOVE_BEER, ADD_SWANDWICH, REMOVE_SANDWICH, ADD_CHIPS, REMOVE_CHIPS, addBeer, removeBeer, addSandwich, removeSandwich, addChips, removeChips } from './actions/lunchActions';
const initialState = {
  beer: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_BEER':
      return { ...state, beer: action.payload };
    case 'ADD_SWANDWICH':
      return { ...state, sandwich: action.payload };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'REMOVE_CHIPS':
      return { chips: null };
    case 'REMOVE_BEER':
      return { beer: null };

    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addBeer('ipa'));
console.log('added drink', store.getState());
store.dispatch(removeBeer('ipa'));
console.log('removed drink', store.getState());
store.dispatch(addChips('salt and vingar'));
console.log('add chips', store.getState());
store.dispatch(addChips('bbq'));
console.log('add chips', store.getState());
store.dispatch(removeChips('bbq'));
console.log('remove chips', store.getState());
store.dispatch(addSandwich('pbj'));
console.log('add sandwich', store.getState());
store.dispatch(removeSandwich('pbj'));
console.log('remove sandwich', store.getState());
