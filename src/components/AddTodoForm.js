import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, Grid, Stack } from '@mui/material';

const AddTodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const [todoTitle, setTodoTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [textError, setTextError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      const newTodo = {
        id: Date.now(),
        title: todoTitle,
        text: todoText,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTodoText('');
      setTodoTitle('');
    }
  };

  const validateFields = () => {
    let isValid = true;
    setTitleError('');
    setTextError('');

    if (todoTitle.trim() === '') {
      setTitleError('Title is required');
      isValid = false;
    }

    if (todoText.trim() === '') {
      setTextError('Description is required');
      isValid = false;
    }

    return isValid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ maxWidth: 290 }} style={{ margin: 'auto' }}>
        <CardContent>
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                type="text"
                size="small"
                className="w-100"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
                error={!!titleError}
                helperText={titleError}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                type="text"
                size="small"
                className="w-100"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                error={!!textError}
                helperText={textError}
              />
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" type="submit">
                Add Todo
              </Button>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </form>
  );
};

export default AddTodoForm;
