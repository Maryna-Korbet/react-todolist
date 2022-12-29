import css from 'components/TodoList/TodoList.module.css';
// import classNames from 'classnames';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
    <ul className ={css.list}>
        {todos.map(({ id, text, completed }) => (
            <li key={id} className={css.item}>

                <input
                    type="checkbox"
                    className={css.checkbox}
                    checked={completed}
                    onChange={()=> onToggleCompleted(id)}
                />

                <p className={css.text}>{text}</p>
                
                <button
                    type="button"
                    className={css.button}
                    onClick={() => onDeleteTodo(id)}
                >delete</button>
                
            </li>
        ))}
    </ul>
)

export default TodoList;

