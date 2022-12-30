import { Component } from "react";
import shortid from "shortid";
import TodoList from "./TodoList/TodoList";
import TodoEditor from "./TodoEditor/TodoEditor";
import initialTodos from '../data/todos.json';

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  addTodo = text => {
    const newTodo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({todos}) => ({
      todos: [...todos, newTodo],
    })
    );
  }

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

        <TodoEditor onSubmit={this.addTodo} />
        
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted} />
    </>
  );
  }
}

