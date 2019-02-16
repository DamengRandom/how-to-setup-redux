import React from 'react';

const TodoListItem = ({ todo, toggleTodo, destroyTodo }) => {
  return (
    <div>
      <input type="checkbox"
        checked={todo.isComplete}
        onChange={() => toggleTodo(todo.id)} />
      <span>{todo.name}</span>
      <button type="button"
        onClick={() => destroyTodo(todo.id)}>X</button>
    </div>
  );
}

export default TodoListItem;
