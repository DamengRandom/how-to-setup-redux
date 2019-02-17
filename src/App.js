import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TodoForm />
          <Route path="/:filter?"
            render={({ match }) => (
              <TodoList filter={match.params.filter} />
            )} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
