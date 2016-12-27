import { createStore } from 'redux';
import todoAppReducer from './reducers/index';

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;

    return (action) => {
        const nextState = rawDispatch(action);

        console.group(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        console.log('%c next state', 'color: green', nextState);
        console.groupEnd(action.type);

        return nextState;
    }
}

const configureStore = () => {
    const store = createStore(
        todoAppReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    store.dispatch = addLoggingToDispatch(store);

    return store;
};

export default configureStore;
