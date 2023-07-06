import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-main'>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div" style={{ textAlign: 'center' }}>
                Welcome To ToDo List
            </Typography>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" style={{ textAlign: 'center' }}>
                <Link className='default-btn' to="/todo">Go to Todo List</Link>
            </Typography>
        </div>
    );
};

export default Home;