import uuid from 'node-uuid';
import * as api from '../api';
import { getIsFetching } from '../reducers';

const requestTodos = (filter) => ({
    type: 'FETCH_TODOS_REQUEST',
    filter
});

const receiveTodos = (todos, filter) => ( {
    type: 'FETCH_TODOS_SUCCESS',
    todos,
    filter
});

const fetchTodos = (filter) => (dispatch, getState) => {
    if(getIsFetching(getState(), filter)) {
        // prevent multiple fetching for the same list
        // but allow parallel downloads from other list
        return Promise.resolve();
    }

    dispatch(requestTodos(filter));

    return api.fetchTodos(filter).then( todos => {
         dispatch(receiveTodos(todos, filter));
    });
};

const addTodo = (text) => ( {
    type: 'ADD_TODO',
    id: uuid.v4(),
    text
} );

const todoClick = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export {
    addTodo,
    todoClick,
    fetchTodos,
    requestTodos
};
