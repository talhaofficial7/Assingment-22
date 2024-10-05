import { createStore } from 'redux';
import productReducer from './reducers';  // Import the reducer

const store = createStore(
  productReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // Enable Redux DevTools
);

export default store;
