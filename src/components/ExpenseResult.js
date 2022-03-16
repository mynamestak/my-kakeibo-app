import React from 'react';

const ExpenseResult = ({expenseAmounts}) => {

    const reducer = (sum,currentValue) => sum + currentValue
    const expenseResult = expenseAmounts.reduce(reducer);


    return(
        <div>
            <p>あなたの支出は{expenseResult}です。</p>
        </div>
    );
}

export default ExpenseResult;