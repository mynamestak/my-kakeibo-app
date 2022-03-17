import React from 'react';

const ExpenseList = ({expenseText, setExpenses, expense, expenses, expenseNum, id, expenseAmounts, setExpenseAmounts}) => {
    const expenseDeleteHandler = () => {
        setExpenses(expenses.filter(el => el.id !== expense.id));
        setExpenseAmounts(expenseAmounts.filter(el => el !== Number(expenseNum)));        
    }
    return(
        <div key={id}>
            <li>{expenseText}に{expenseNum}支払いました。</li>
            <button onClick={expenseDeleteHandler}>削除</button>
        </div>
    );
}

export default ExpenseList;