import { combineReducers } from 'redux';
import createList, * as fromList from './createList';
import byId, * as fromById from './byId';


const listByFilter = combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed'),
});

const todos = combineReducers({
    byId,
    listByFilter
});

export default todos;

export const getVisibleTodos = (state, filter) => {
    /*
        .filter is needed when
            - an ID is found in 'listByFilter'
            - the todo object is not found in 'byId'
    */
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map( id => fromById.getTodo(state.byId, id) ).filter( t => t );
}

export const getIsFetching = (state, filter) => {
    return fromList.getIsFetching(state.listByFilter[filter]);
}
