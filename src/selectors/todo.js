export const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'active':
      return todos.filter(todo => !todo.isComplete);
    case 'done':
      return todos.filter(todo => todo.isComplete);
    default:
      return todos;
  }
}
