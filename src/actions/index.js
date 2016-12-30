import { getIsFetching } from '../reducers';
import * as api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';

export const fetchTodos = (filter) => (dispatch, getState) => {
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
                response: normalize(response, schema.arrayOfTodos),
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

export const addTodo = (text) => ( dispatch, getState ) => {
    return api.addTodo(text).then( response => {
        dispatch({
            type: 'ADD_TODO_SUCCESS',
            response: normalize(response, schema.todo)
        });
    } );
}

export const todoClick = (id) => ( dispatch, getState) => {
    return api.toggleTodo(id).then( response => {
        dispatch({
            type: 'TOGGLE_TODO_SUCCESS',
            response: normalize(response, schema.todo)
        })
    } );
};
