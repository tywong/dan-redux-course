import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import todoAppReducer from './reducers/index';

const middlewares = [promise, createLogger()];

const configureStore = () => {
    const store = createStore(
        todoAppReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...middlewares),
    );
    return store;
};

export default configureStore;
