export const ADD_BEER = 'ADD_BEER';
export const REMOVE_BEER = 'REMOVE_BEER';
export const ADD_SANDWICH = 'ADD_SANDWICH';
export const REMOVE_SANDWICH = 'REMOVE_SANDWICH';
export const ADD_CHIPS = 'ADD_CHIPS';
export const REMOVE_CHIPS = 'REMOVE_CHIPS';

export const addBeer = beer => ({
  type: ADD_BEER,
  payload: beer
});
export const removeBeer = beer => ({
  type: REMOVE_BEER,
  payload: beer
});
export const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});
export const removeSandwich = sandwich => ({
  type: REMOVE_SANDWICH,
  payload: sandwich
});
export const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});
export const removeChips = chips => ({
  type: REMOVE_CHIPS,
  payload: chips
});


