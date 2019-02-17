import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { todoReducer } from '../reducers';

const reducers = combineReducers({
  todo: todoReducer
});

// logger for debug usage
// export const logger = store => next => action => {
//   // console.log('dispatching', action)
//   let result = next(action);
//   console.log('next state', store.getState())
//   return result;
// }

const store = createStore(
  reducers,
  // composeWithDevTools(applyMiddleware(logger, thunk))
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;