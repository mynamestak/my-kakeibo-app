import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Balance = ({date, filteredIncomeItems, filteredExpenseItems }) => {



    const month = date.getMonth() +1;

    //下のコードは打ち込んだ金額全ての残高を表示
    // const incomeReducer = (sum,currentValue) => sum + currentValue
    // const incomeResult = incomeAmounts.reduce(incomeReducer);

    // const expenseReducer = (sum,currentValue) => sum + currentValue
    // const expenseResult = expenseAmounts.reduce(expenseReducer);
    // const balance = incomeResult - expenseResult;


      const incomeTotal = filteredIncomeItems.reduce((sum, element) => {
        return sum + Number(element.itemNum);
      }, 0);

      const expenseTotal = filteredExpenseItems.reduce((sum, element) => {
        return sum + Number(element.itemNum);
      }, 0);
      
  
    return(
        <Box fixed sx={{backgroundColor:'lightslategray'}}>
            <Typography sx={{color: 'white'}}>{month}月残高</Typography>
            <Typography　variant='h3' componen='h3' sx={{color: 'white'}}>{incomeTotal - expenseTotal}円</Typography>
        </Box>
    );
}

export default Balance; 