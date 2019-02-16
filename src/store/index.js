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

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
