import { connect } from 'react-redux';
import TodoList from './TodoList.jsx';
import { todoClick } from './actions';


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

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, ownProps.filter)
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

export default VisibleTodoList;
