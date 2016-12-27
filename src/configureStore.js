import { createStore } from 'redux';

import todoAppReducer from './reducers/index';
import { loadState, saveState } from './localState';
import throttle from 'lodash/throttle';


const configureStore = () => {
    const store = createStore(
        todoAppReducer,
        loadState(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


    store.subscribe(
        throttle( () => {
            saveState( { todos: store.getState().todos } )
        }, 1000)
    );

    return store;
};

export default configureStore;
