import { Component } from "react";
import TodoList from "./TodoList/TodoList";
import initialTodos from '../data/todos.json';

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id!==todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({todos}) => ({
      todos: todos.map(todo =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
        ),
    }));
  };


  render() {
    const { todos } = this.state;
    const totalTodosCount = todos.length;
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 0,);

    return (
      <>
        <div>
          <p>Total number: {totalTodosCount}</p>
          <p>Number of completed tasks: {completedTodosCount}</p>
        </div>
        
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted} />
    </>
  );
  }
}

