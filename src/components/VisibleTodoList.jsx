import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList.jsx';
import { todoClick } from '../actions/index';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'active':
        return todos.filter( t => !t.completed );
        case 'completed':
        return todos.filter( t => t.completed );
        default:
        return todos;
    }
}

const mapStateToProps = (state, { params }) => ({
    todos: getVisibleTodos(state.todos, params.filter)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch(todoClick(id));
    }
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default withRouter(VisibleTodoList);
