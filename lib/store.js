import { createStore } from 'redux';
function reducer(state = { fsNavigation: false }, action) {
  //logic goes here
  if (action.type === 'FS_NAVIGATION') {
    return {
      fsNavigation: action.payload,
    };
  }
  return state;
}
const store = createStore(reducer);
export default store;
