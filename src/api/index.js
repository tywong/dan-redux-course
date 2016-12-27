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

const fetchTodos = (type) => {
    switch(type) {
        case 'all':
        return fakeDB;
        case 'active':
        return fakeDB.filter( t => !t.completed );
        case 'completed':
        return fakeDB.filter( t => t.completed );
        default:
        return fakeDB;
    }
}

export {
    fetchTodos
}
