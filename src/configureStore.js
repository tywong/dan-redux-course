import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import todoAppReducer from './reducers/index';


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
