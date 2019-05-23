import { createStore } from 'redux';
import { CREATE_POST, DELETE_POST, createPost, deletePost } from './actions/postActions';

const initialState = [];

function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];

    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(createPost('title', 'body'));
console.log(store.getState());
store.dispatch(deletePost(0));
console.log(store.getState());


