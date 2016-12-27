import todo from './todo';

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
        return [
            ...state,
            todo( action.todo, action )
        ];
        case 'TOGGLE_TODO':
        return state.map( (t) => todo(t, action) );
        default:
        return state;
    }
};

export default todos;

export const getVisibleTodos = (state, filter) => {
    switch(filter) {
        case 'active':
        return state.filter( t => !t.completed );
        case 'completed':
        return state.filter( t => t.completed );
        default:
        return state;
    }
}
