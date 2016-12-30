import uuid from 'node-uuid';
import * as api from '../api';

const requestTodos = (filter) => ({
    type: 'REQUEST_TODOS',
    filter
});

const receiveTodos = (todos, filter) => ( {
    type: 'RECEIVE_TODOS',
    todos,
    filter
});

const fetchTodos = (filter) => {
    return api.fetchTodos(filter).then( todos => {
        return receiveTodos(todos, filter);
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
