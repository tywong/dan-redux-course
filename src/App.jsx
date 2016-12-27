import React from 'react';

import VisibleTodoList from './VisibleTodoList.jsx';
import AddTodo from './AddTodo.jsx';
import Footer from './Footer.jsx';

const App = ( {params} ) => (
    <div>
        <AddTodo />
        <VisibleTodoList filter={ params.filter }/>
        <Footer />
    </div>
);

export default App;
