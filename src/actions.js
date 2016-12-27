import uuid from 'node-uuid';

const addTodo = (text) => ( {
    type: 'ADD_TODO',
    id: uuid.v4(),
    text
} );

const todoClick = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

const filterLinkClick = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export {
    addTodo,
    todoClick,
    filterLinkClick
};
