import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../redux/selectors';
import { toggleTodo, deleteTodo } from '../redux/actions';
import TodoItem from './TodoItem';
import { Container, Grid, List, Typography } from '@mui/material';

const TodoList = () => {
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();

    const handleToggle = (todoId) => {
        dispatch(toggleTodo(todoId));
    };

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    };


    return (
        <>
            <Container maxWidth="lg">
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" style={{ textAlign: 'center' }}>
                    Todo List
                </Typography>
                <List>
                    <Grid container spacing={2}>
                        {todos.map((todo) => (
                            <Grid style={{ margin: '0 0 20px 0' }} item xs={12} sm={6} md={4} lg={3} key={todo.id}>
                                <TodoItem
                                    todo={todo}
                                    onToggle={handleToggle}
                                    onDelete={handleDelete}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </List>
            </Container>
        </>
    );
};

export default TodoList;
