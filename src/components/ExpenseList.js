import React from 'react';

const ExpenseList = ({expenseText, setExpenses, expense, expenses, expenseNum}) => {
    const expenseDeleteHandler = () => {
        setExpenses(expenses.filter(el => el.id !== expense.id))
    }
    return(
        <div>
            <li>{expenseText}</li>
            <li>{expenseNum}</li>
            <button onClick={expenseDeleteHandler}>削除</button>
        </div>
    );
}

export default ExpenseList;