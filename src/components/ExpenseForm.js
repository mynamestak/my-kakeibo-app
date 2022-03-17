import React, {useState} from 'react';

const ExpenseForm = ({expenses, setExpenses, expenseAmounts, setExpenseAmounts}) => {

    const [expenseInputText, setExpenseInputText] = useState('');
    const [expenseInputNum, setExpenseInputNum] = useState('');

    
    const expenseInputHandler = (e) => {
        setExpenseInputText(e.target.value);
    }
    const expenseInputNumHandler = (e) => {
        setExpenseInputNum(e.target.value);
    }

    const expenseSubmitHandler = (e) => {
        e.preventDefault();
        setExpenses([
            ...expenses, {expenseText: expenseInputText, expenseNum: expenseInputNum, id: Math.random()*1000}
        ]);
        setExpenseAmounts([
            ...expenseAmounts, parseInt(expenseInputNum)
        ]);
        setExpenseInputText('');
        setExpenseInputNum('');

    }


    return(
        <form>
            <p>****************************************</p>
            <p>支出を入力してください。</p>
            <input 
                id="income-input"
                value={expenseInputText}
                onChange={expenseInputHandler}></input>
            <p>額を入力してください。</p>
            <input
                num={expenseInputNum}
                onChange={expenseInputNumHandler}
                ></input>
                <button onClick={expenseSubmitHandler}>決定</button>
        </form>

    );
}

export default ExpenseForm;