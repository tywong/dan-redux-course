import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList.jsx';
import { todoClick } from '../actions';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

class VisibleTodoList extends React.Component {
    componentDidMount() {
        fetchTodos(this.props.filter).then( todos => {
            console.log(todos);
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.filter !== prevProps.filter) {
            fetchTodos(this.props.filter).then( todos => {
                console.log(todos);
            });
        }
    }

    render() {
        return ( <TodoList { ...this.props } /> );
    }
}

const mapStateToProps = (state, { params }) => {
    const filter = params.filter || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        filter
    }
};

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch(todoClick(id));
    }
});

VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps  // I don't know to use the shorthand:
                        // { onTodoClick: todoClick }
)(VisibleTodoList);

export default withRouter(VisibleTodoList);
