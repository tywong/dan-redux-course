import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList.jsx';
import { todoClick, receiveTodos } from '../actions';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

class VisibleTodoList extends React.Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if(this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const {filter, receiveTodos} = this.props;
        fetchTodos(filter).then( todos => {
            receiveTodos(todos, filter)
        });
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

VisibleTodoList = connect(
    mapStateToProps,
    {
        onTodoClick: todoClick,
        receiveTodos
    }
)(VisibleTodoList);

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick: (id) => {
//         dispatch(todoClick(id));
//     },
//     receiveTodos: (todos, filter) => {
//         dispatch(receiveTodos(todos, filter));
//     }
// });
//
// VisibleTodoList = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(VisibleTodoList);

export default withRouter(VisibleTodoList);
