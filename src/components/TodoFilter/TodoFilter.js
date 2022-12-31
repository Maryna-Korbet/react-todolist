import css from 'components/TodoFilter/TodoFilter.module.css';

const TodoFilter = ({ value, onChange }) => (
    <label>
        Filter by name
        <input type="text" className={css.input} value={value} onChange={onChange} />
    </label >
);

export default TodoFilter;

