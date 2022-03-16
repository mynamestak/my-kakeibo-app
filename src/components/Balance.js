import React from 'react';

const Balance = ({expenseAmounts, incomeAmounts}) => {

    const incomeReducer = (sum,currentValue) => sum + currentValue
    const incomeResult = incomeAmounts.reduce(incomeReducer);

    const expenseReducer = (sum,currentValue) => sum + currentValue
    const expenseResult = expenseAmounts.reduce(expenseReducer);


    return(
        <div>
            <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
            <p>今月の収支は以下です</p>
            <p>{incomeResult - expenseResult}</p>
        </div>
    );
}

export default Balance;