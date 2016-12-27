import { createStore } from 'redux';
import todoAppReducer from './reducers/index';

const logger = (store) => (next) => (action) => {
    const nextState = next(action);

    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    console.log('%c next state', 'color: green', nextState);
    console.groupEnd(action.type);

    return nextState;
};

const promise = (store) => (next) => (action) => {
    if(typeof action.then === 'function') {
        return action.then( next );
    }
    else {
        return next(action);
    }
};

const middlewares = [promise, logger];
const wrapDisptachWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach( (middleware) => {
        store.dispatch = middleware(store)(store.dispatch)
    });
};

const configureStore = () => {
    const store = createStore(
        todoAppReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    wrapDisptachWithMiddlewares(store, middlewares);
    return store;
};

export default configureStore;
