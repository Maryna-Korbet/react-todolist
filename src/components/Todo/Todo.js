import css from "components/Todo/Todo.module.css";

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => (
    <>
        <input
            type="checkbox"
            className={css.checkbox}
            checked={completed}
            onChange={onToggleCompleted}
        />
            <p className={css.text}>{text}</p>
            <button
                type="button"
                className={css.button}
                onClick={onDeleteTodo}
            >delete</button>
    </>
);

export default Todo;