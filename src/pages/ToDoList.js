import React from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

const ToDo = () => {
    return (
        <div className='main-content'>
            <AddTodoForm />
            <TodoList />
        </div>
    );
};

export default ToDo;
