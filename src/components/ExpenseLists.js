import React from 'react';
import ExpenseList from './ExpenseList';

const ExpenseLists = ({expenses, setExpenses, expenseAmounts, setExpenseAmounts}) => {
    return(
        <ul>
            {expenses.map(expense => (
                <ExpenseList 
                    expense={expense}
                    expenses={expenses}
                    expenseText={expense.expenseText}
                    id={expense.id}
                    setExpenses={setExpenses}
                    expenseNum={expense.expenseNum}
                    expenseAmounts={expenseAmounts}
                    setExpenseAmounts={setExpenseAmounts}
                />
            ))}
        </ul>
    );
}

export default ExpenseLists;