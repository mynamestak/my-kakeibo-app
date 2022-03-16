import React from 'react';
import ExpenseList from './ExpenseList';

const ExpenseLists = ({expenses, setExpenses}) => {
    return(
        <ul>
            {expenses.map(expense => (
                <ExpenseList 
                    expense={expense}
                    expenses={expenses}
                    expenseText={expense.expenseText}
                    key={expense.id}
                    setExpenses={setExpenses}
                    expenseNum={expense.expenseNum}
                />
            ))}
        </ul>
    );
}

export default ExpenseLists;