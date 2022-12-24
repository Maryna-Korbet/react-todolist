import css from 'components/TodoList/TodoList.module.css';

const TodoList = ({ todos,  onDeleteTodo }) => (
    <ul className ={css.list}>
        {todos.map(({id, text}) => (
            <li key={id} className ={css.item}>
                <p className ={css.text}>{text}</p>
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