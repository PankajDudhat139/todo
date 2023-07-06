// Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Action creators
export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const toggleTodo = (todoId) => ({
    type: TOGGLE_TODO,
    payload: todoId,
});

export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId,
});
