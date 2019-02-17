import React from 'react';
import { connect } from 'react-redux';
import { readTodos, updateTodo, deleteTodo } from '../actions';
import { getVisibleTodos } from '../selectors';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.readTodos();
    // setTimeout(() => {
    //   console.log('getState: ', this.props.todos);
    // }, 100);
    
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

const mapStateToProops = (state, ownProps) => {
  console.log(ownProps);
  return {
    todos: getVisibleTodos(state.todo.todos, ownProps.filter) 
  }
}

const mapDispatchToProps = {readTodos, updateTodo, deleteTodo};

export default connect(
  mapStateToProops,
  mapDispatchToProps
)(TodoList);
