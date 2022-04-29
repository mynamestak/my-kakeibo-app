import React from 'react';
import { Paper } from '@mui/material';

const NewsList = ({ title, desc, url }) => {

    return(
        <Paper>
            <a href={url}>
                <h1>{title}</h1>
            </a>
        </Paper>
    );
}

export default NewsList;