import { Component } from "react";
import TodoList from "./TodoList/TodoList";
import initialTodos from '../data/todos.json';

export class App extends Component {
  state = {
    todos:initialTodos,
  };

  render() {
    const { todos } = this.state;

    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
        <TodoList todos={todos} />
    </div>
  );
  }
}

