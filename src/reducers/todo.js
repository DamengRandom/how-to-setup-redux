import {
  CREATE_TODO, READ_TODOS, DELETE_TODO, UPDATE_TODO,
} from '../constants';
const initialState = [];

export const todoReducer = (state=initialState, action) => {
  switch(action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case READ_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ?
          action.payload : todo)
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo =>
          todo.id !== action.payload)
      }
    default:
      return state;
  }
};
