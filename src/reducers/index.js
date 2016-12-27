import { combineReducers } from 'redux';
import createList, * as fromList from './createList';
import byId, * as fromById from './byId';


const idsByFilter = combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed'),
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
    const ids = fromList.getIds(state.idsByFilter[filter]);
    return ids.map( id => fromById.getTodo(state.byId, id) ).filter( t => t );
}
