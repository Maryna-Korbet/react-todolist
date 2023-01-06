import css from 'components/TodoList/TodoList.module.css';
import Todo from 'components/Todo/Todo';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
    <ul className ={css.list}>
        {todos.map(({ id, text, completed }) => (
            <li key={id} className={css.item}>
                <Todo 
                text={text}
                completed={completed}
                onToggleCompleted={() => onToggleCompleted(id)}
                onDeleteTodo={() => onDeleteTodo(id)}
                />
            </li>
        ))}
    </ul>
)

export default TodoList;

