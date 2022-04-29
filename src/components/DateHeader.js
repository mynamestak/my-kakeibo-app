import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DateHeader = ({date, setDate}) => {


    const today = date;
    const year = today.getFullYear();
    const month = today.getMonth()+1;

    const setPrevMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth()-1;
        const day = date.getDate();
        setDate(new Date(year, month, day));
    }
    
    const setNextMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        const day = date.getDate();
        setDate(new Date(year, month, day));
    }
    
    

    return(
        <div>
            <Box sx={{display:'flex',
                justifyContent:'center',
                marginY:'16px'}}>
                <Button sx={{marginX:3}} variant='contained' onClick={setPrevMonth}>前月</Button>
                <Typography variant='h4' component='h2'>{year}年{month}月</Typography>
                <Button sx={{marginX:3}} variant='contained' onClick={setNextMonth}>次月</Button>
            </Box>
        </div>
    );
}

export default DateHeader;