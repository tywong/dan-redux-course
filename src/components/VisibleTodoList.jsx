import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList.jsx';
import * as actions from '../actions';      // import all actions as one object 'actions'
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers';
import FetchError from './FetchError';

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
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter);
    }

    render() {
        const { todoClick, isFetching, todos, errorMessage } = this.props;

        if(isFetching && todos.length === 0) {      // todos.length != 0 if there is a cache
            return (<p> Loading ...</p>);
        }

        if(errorMessage && todos.length === 0) {    // error and no cached data
            return (
                <FetchError
                    message={ errorMessage }
                    onRetry={
                        () => { this.fetchData(); }
                    }/>
            );
        }

        return (
            <TodoList
                todos={ todos }
                onTodoClick={ todoClick }
            />
        );
    }
}

const mapStateToProps = (state, { params }) => {
    const filter = params.filter || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter,
    }
};

VisibleTodoList = connect(
    mapStateToProps,
    actions         // the actions object becomes a props
)(VisibleTodoList);

export default withRouter(VisibleTodoList);
