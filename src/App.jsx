import React from 'react';

import VisibleTodoList from './VisibleTodoList.jsx';
import AddTodo from './AddTodo.jsx';
import Footer from './Footer.jsx';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;
