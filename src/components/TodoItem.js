import React from 'react';
import { Card, CardActions, CardContent, Checkbox, FormControlLabel, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, onToggle, onDelete }) => {
    const { id, title, text, completed } = todo;

    const handleToggle = () => {
        onToggle(id);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (

        <li>
            <Card className={completed ? 'success' : ''}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <FormControlLabel checked={completed}
                            onChange={handleToggle} control={<Checkbox />} label={title} />
                        <div className={completed ? 'status' : 'status'}>
                            {text}
                        </div>
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton color="secondary" onClick={handleDelete} aria-label="Example"><DeleteIcon /></IconButton>
                </CardActions>
            </Card>
        </li>
    );
};

export default TodoItem;
