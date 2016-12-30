import uuid from 'node-uuid';

const fakeDB = [
    {
        id: uuid.v4(),
        text: 'Hello world',
        completed: false
    },
    {
        id: uuid.v4(),
        text: 'Learn React',
        completed: true
    },
    {
        id: uuid.v4(),
        text: 'Redux rocks',
        completed: false
    }
];

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (type) => {
    return delay(1000)
    .then( () => {
        switch(type) {
            case 'all':
            return fakeDB;
            case 'active':
            return fakeDB.filter( t => !t.completed );
            case 'completed':
            return fakeDB.filter( t => t.completed );
            default:
            throw new Error(`Unknown filter type: ${type}`);
        }
    } );
}

export const addTodo = (text) => {
    return delay(1000)
    .then( () => {
        const todo = {
            id: uuid.v4(),
            completed: false,
            text
        };
        fakeDB.push(todo);
        return todo;
    } );
}

export const toggleTodo = (id) => {
    return delay(1000)
    .then( () => {
        const todo = fakeDB.find( (t) => t.id === id);
        todo.completed = !todo.completed;
        return todo;
    } );
}
