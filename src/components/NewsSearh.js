import React, { useState } from 'react';
import { TextField } from '@mui/material';

const NewsSearch = ({newsText, setNewsText}) => {

    const [newsTextInput, setNewsTextInput ] = useState('Apple');

    const newsTextHandler = (e) => {
        setNewsTextInput(e.target.value);
        setNewsText(e.target.value);
    }





    return(
        <form>
            <p>Find your favorite news</p>
            <TextField onChange={newsTextHandler} value={newsTextInput}/>
        </form>
    );
}

export default NewsSearch;