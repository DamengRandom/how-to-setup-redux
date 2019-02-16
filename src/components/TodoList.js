import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { readTodos, updateTodo, deleteTodo } from '../actions';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.readTodos();
  }
  handleSubmit = () => {
    return this.props.todos.map((todo, index) =>
      <TodoListItem key={`${todo.id}-${index}`}
        todo={todo}
        toggleTodo={this.props.updateTodo}
        destroyTodo={this.props.deleteTodo} />)
  }
  render() {
    return (
      <div>
        { this.props.todos && this.props.todos.length > 0 ?
          this.handleSubmit() : <p>No data yet ..</p> }
      </div>
    );
  }
}

const mapStateToProops = (state) => {
  return {
    todos: state.todo.todos
  }
}

const mapDispatchToProps = {readTodos, updateTodo, deleteTodo};

export default connect(
  mapStateToProops,
  mapDispatchToProps
)(TodoList);
