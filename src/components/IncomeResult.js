import React, {useState, useContext, useEffect} from 'react';
import { IncomesContext } from '../IncomesContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const IncomeResult = ({date, incomeAmounts, setIncomeAmounts, incomeResult, setIncomeResult, filteredIncomes}) => {


    const filteredIncomeAmounts = filteredIncomes.map(filteredIncomes => Number(filteredIncomes.incomeNum));
    incomeResult = filteredIncomeAmounts.reduce((acc, cur) => acc += cur, 0);

    const month = date.getMonth() +1;
    
  
    return(
        <Box fixed sx={{backgroundColor:'lightslategray'}}>
            <Typography sx={{color: 'white'}}>{month}月残高</Typography>
            <Typography　variant='h3' componen='h3' sx={{color: 'white'}}>{incomeResult}円</Typography>
        </Box>
    );
}

export default IncomeResult; 