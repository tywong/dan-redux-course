import uuid from 'node-uuid';
import * as api from '../api';
import { getIsFetching } from '../reducers';

const fetchTodos = (filter) => (dispatch, getState) => {
    if(getIsFetching(getState(), filter)) {
        // prevent multiple fetching for the same list
        // but allow parallel downloads from other list
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter
    });

    return api.fetchTodos(filter).then(
        response => {
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                response,
                filter
            });
        },
        error => {
            dispatch({
                type: 'FETCH_TODOS_FAILURE',
                message: error.message,
                filter
            })
        }
    )
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
};
