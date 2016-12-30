import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import todoAppReducer from './reducers/index';

const thunk = (store) => (next) => (action) => {
    return typeof action === 'function' ?
        action(store.dispatch) : next(action);
}

const middlewares = [thunk, createLogger()];

const configureStore = () => {
    const store = createStore(
        todoAppReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...middlewares),
    );
    return store;
};

export default configureStore;
