import { Component } from "react";
import css from 'components/TodoEditor/TodoEditor.module.css';

class TodoEditor extends Component {
    state = {
        message:''
    }

    handleChange = e => {
        this.setState({ message: e.currentTarget.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.onSubmit(this.state.message);
        this.setState({message:''});
    }

    render() {
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange}>
                </textarea>
                <button
                    type="submit"
                    className={css.button}>
                    Сreate
                </button>
            </form>
        );
    }
}

export default TodoEditor;