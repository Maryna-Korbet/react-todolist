import css from 'components/TodoList/TodoList.module.css';

const TodoList = ({ todos }) => (
    <ul className ={css.container}>
        {todos.map(({id, text}) => (
            <li key={id} className ={css.item}>
                <p className ={css.text}>{text}</p>
                <button type="button" className={css.button}>delete</button>
            </li>
        ))}
    </ul>
)

export default TodoList;