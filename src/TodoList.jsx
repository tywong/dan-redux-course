import React from 'react';
import Todo from './Todo.jsx';

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        { todos.map( (todo) => <Todo onClick={ () => onTodoClick(todo.id) } key={todo.id} {...todo} />) }
    </ul>
);

export default TodoList;
