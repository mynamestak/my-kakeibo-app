import React, {useState, useContext} from 'react';
import { IncomesContext } from '../IncomesContext';

const InputForm = ({incomeAmounts, setIncomeAmounts}) => {

    const [incomes, setIncomes] = useContext(IncomesContext);
    const [incomeInputText, setIncomeInputText] = useState('');
    const [incomeInputNum, setIncomeInputNum] = useState('');
    const [incomeCount, setIncomeCount] = useState(1);

    
    const incomeInputHandler = (e) => {
        setIncomeInputText(e.target.value);
    }
    const incomeInputNumHandler = (e) => {
        setIncomeInputNum(e.target.value);
    }

    const incomeSubmitHandler = (e) => {
        e.preventDefault();
        setIncomes([
            ...incomes, {incomeText: incomeInputText, incomeNum: incomeInputNum, id:incomeCount}
        ]);

        setIncomeAmounts([
            ...incomeAmounts, parseInt(incomeInputNum)
        ]);
        setIncomeCount((prevCount) => prevCount + 1);

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
