import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state.name);
    setTimeout(() => {
      this.setState({
        name: ''
      });
    }, 100);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            name="name"
            onChange={(event) => this.setState({
              name: event.target.value
            })}
            value={this.state.name} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  }
}

const mapDispatchToProps = {createTodo};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
