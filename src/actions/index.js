import uuid from 'node-uuid';

const receiveTodos = (todos, filter) => ( {
    type: 'RECEIVE_TODOS',
    todos,
    filter
})

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
    receiveTodos
};
