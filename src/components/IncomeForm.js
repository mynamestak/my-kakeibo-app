import React, {useState} from 'react';

const InputForm = ({incomeInputText, setIncomeInputText, incomes, setIncomes, incomeInputNum, setIncomeInputNum, incomeAmounts, setIncomeAmounts, incomeCount, setIncomeCount}) => {

    const incomeInputHandler = (e) => {
        setIncomeInputText(e.target.value);
    }
    const incomeInputNumHandler = (e) => {
        setIncomeInputNum(e.target.value);
    }

    const incomeSubmitHandler = (e) => {
        e.preventDefault();
        setIncomeCount((prevCount) => prevCount + 1);
        setIncomes([
            ...incomes, {incomeText: incomeInputText, incomeNum: incomeInputNum, incomeOrder: incomeCount, id:Math.random()*1000}
        ]);

        setIncomeAmounts([
            ...incomeAmounts, parseInt(incomeInputNum)
        ]);

        setIncomeInputText('');
        setIncomeInputNum('');
    }
    
    return(
        <form>
            <p>収入を入力してください。</p>
            <input 
                id="income-input"
                value={incomeInputText}
                onChange={incomeInputHandler}></input>
            <p>額を入力してください。</p>
            <input
                num={incomeInputNum}
                onChange={incomeInputNumHandler}
                ></input>
            <button onClick={incomeSubmitHandler}>決定</button>
        </form>
);
}


export default InputForm;
