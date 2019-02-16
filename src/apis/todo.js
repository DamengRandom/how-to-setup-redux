import axios from 'axios';

const baseURL = `http://localhost:23766/todos`;

export const saveTodo = (todo) => {
  return axios.post(baseURL, todo)
    .then(res => res.data);
}

export const fetchTodos = () => {
  return axios.get(baseURL)
    .then(res => res.data);
}

export const reformTodo = (updates) => {
  return axios.put(`${baseURL}/${updates.id}`, updates)
    .then(res => res.data);
}

export const removeTodo = (id) => {
  return axios.delete(`${baseURL}/${id}`);
}
