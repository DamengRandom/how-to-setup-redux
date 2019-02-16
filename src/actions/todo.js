import uuid from 'uuid';
import {
  CREATE_TODO,
  READ_TODOS,
  UPDATE_TODO,
  DELETE_TODO
} from '../constants';
import { saveTodo, fetchTodos, removeTodo, reformTodo } from '../apis/todo';

const createTodoAction = (todo) => ({
  type: CREATE_TODO,
  payload: todo
});

const readTodosAction = (todos) => ({
  type: READ_TODOS,
  payload: todos
});

const updateTodoAction = (updates) => ({
  type: UPDATE_TODO,
  payload: updates
});

const deleteTodoAction = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const createTodo = (name) => {
  const todo = {
    id: uuid(),
    name,
    isComplete: false
  }
  return dispatch =>
    saveTodo(todo).then(res => dispatch(createTodoAction(res)));
};

export const readTodos = () => {
  return dispatch =>
    fetchTodos().then(res => dispatch(readTodosAction(res)));
};

export const updateTodo = (id) => {
  return (dispatch, getState) => {
    const { todos }= getState().todo;
    const todo = todos.find(todo => todo.id === id);
    const toggled = { ...todo, isComplete: !todo.isComplete }
    reformTodo(toggled).then(res => dispatch(updateTodoAction(res)));
  }
}

export const deleteTodo = (id) => {
  return dispatch =>
    removeTodo(id).then(() => dispatch(deleteTodoAction(id)));
}
