import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList.jsx';
import * as actions from '../actions';      // import all actions as one object 'actions'
import { getVisibleTodos } from '../reducers';

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
        const { todoClick, ...rest } = this.props;
        return (
            <TodoList
                { ...rest }
                onTodoClick={ todoClick }
            />
        );
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
    actions         // the actions object becomes a props
)(VisibleTodoList);

export default withRouter(VisibleTodoList);
