import { Component } from "react";
import shortid from "shortid";
import TodoList from "./TodoList/TodoList";
import TodoEditor from "./TodoEditor/TodoEditor";
import TodoFilter from "./TodoFilter/TodoFilter";
import initialTodos from '../data/todos.json';


export class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 0,);
  }

  
  render() {
    const { todos, filter } = this.state;
    const totalTodosCount = todos.length;
    const completedTodosCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos(); 

    return (
      <>
        <div>
          <p>Total number: {totalTodosCount}</p>
          <p>Number of completed tasks: {completedTodosCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <TodoFilter value={filter} onChange={this.changeFilter} />
        
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted} />
    </>
  );
  }
}

