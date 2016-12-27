import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList.jsx';
import { todoClick } from '../actions';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { params }) => ({
    todos: getVisibleTodos(state, params.filter)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch(todoClick(id));
    }
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps  // I don't know to use the shorthand:
                        // { onTodoClick: todoClick }
)(TodoList);

export default withRouter(VisibleTodoList);
