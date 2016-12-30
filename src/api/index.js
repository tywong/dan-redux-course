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

const fetchTodos = (type) => {
    return delay(1000)
    .then(
        () => {
            if(Math.random() > 0.5)
                throw new Error('WUAR');

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
    );
}

export {
    fetchTodos
}
