import { combineReducers } from 'redux';

const todoCache = false;

const byId = (state = {}, action) => {
    switch(action.type) {
        case 'RECEIVE_TODOS':
        const nextState = (todoCache) ? { ...state } : {} ;
        action.todos.forEach( (todo) => {
            nextState[todo.id] = todo;
        })
        return nextState;
        default:
        return state;
    }
};

const allIds = (state = [], action) => {
    if(action.filter !== 'all') {
        return state;
    }
    switch(action.type) {
        case 'RECEIVE_TODOS':
        return action.todos.map( todo => todo.id );
        default:
        return state;
    }
};

const activeIds = (state = [], action) => {
    if(action.filter !== 'active') {
        return state;
    }
    switch(action.type) {
        case 'RECEIVE_TODOS':
        return action.todos.map( todo => todo.id );
        default:
        return state;
    }
};

const completedIds = (state = [], action) => {
    if(action.filter !== 'completed') {
        return state;
    }
    switch(action.type) {
        case 'RECEIVE_TODOS':
        return action.todos.map( todo => todo.id );
        default:
        return state;
    }
};

const idsByFilter = combineReducers({
    all: allIds,
    active: activeIds,
    completed: completedIds,
});

const todos = combineReducers({
    byId,
    idsByFilter
});

export default todos;

export const getVisibleTodos = (state, filter) => {
    /*
        .filter is needed when
            - an ID is found in 'idsByFilter'
            - the todo object is not found in 'byId'
    */
    return state.idsByFilter[filter].map( id => state.byId[id] ).filter( t => t );
}
