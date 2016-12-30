const byId = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_TODOS_SUCCESS':
        case 'ADD_TODO_SUCCESS':
        case 'TOGGLE_TODO_SUCCESS':
            return {
                ...state,
                ...action.response.entities.todo
            }
        default:
            return state;
    }
};

export default byId;

export const getTodo = (state, id) => state[id];
