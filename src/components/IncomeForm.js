import React, {useState, useContext} from 'react';
import { IncomesContext } from '../IncomesContext';


const InputForm = ({incomeAmounts, setIncomeAmounts}) => {

    const [incomes, setIncomes] = useContext(IncomesContext);
    const [incomeInputText, setIncomeInputText] = useState('');
    const [incomeInputNum, setIncomeInputNum] = useState('');
    const [incomeCount, setIncomeCount] = useState(1);
    const [incomeInputDay, setIncomeInputDay] = useState(0);
    const [incomeInputMonth, setIncomeInputMonth] = useState(0);

    const incomeInputHandler = (e) => {
        setIncomeInputText(e.target.value);
    }
    const incomeInputNumHandler = (e) => {
        setIncomeInputNum(e.target.value);
    }
    const IncomeInputDayHandler = (e) => {
        setIncomeInputDay(e.target.value);
    }
    const IncomeInputMonthHandler = (e) => {
        setIncomeInputMonth(e.target.value);
    }

    const incomeSubmitHandler = (e) => {
        e.preventDefault();
        setIncomes([
            ...incomes, {incomeText: incomeInputText, incomeNum: incomeInputNum, id:incomeCount, incomeMonth: Number(incomeInputMonth), incomeDay: incomeInputDay}
        ]);

        setIncomeAmounts([
            ...incomeAmounts, parseInt(incomeInputNum)
        ]);
        setIncomeCount((prevCount) => prevCount + 1);

        setIncomeInputText('');
        setIncomeInputNum('');
        setIncomeInputDay('');
    }
    
    return(
        <form onSubmit={incomeSubmitHandler}>
            <p>収入を入力してください。</p>
            <input 
                id="income-input"
                value={incomeInputText}
                onChange={incomeInputHandler}></input>
            <p>額を入力してください。</p>
            <input
                // num={incomeInputNum}
                value={incomeInputNum}
                onChange={incomeInputNumHandler}
                ></input>
            <p>日付を入力してください。</p>
            <select onChange={IncomeInputMonthHandler}>
                <option value={1}>1月</option>
                <option value={2}>2月</option>
                <option value={3}>3月</option>
                <option value={4}>4月</option>
                <option value={5}>5月</option>
                <option value={6}>6月</option>
                <option value={7}>7月</option>
                <option value={8}>8月</option>
                <option value={9}>9月</option>
                <option value={10}>10月</option>
                <option value={11}>11月</option>
                <option value={12}>12月</option>
                </select>
            <select onChange={IncomeInputDayHandler}>
                <option value={1}>1日</option>
                <option value={2}>2日</option>
                <option value={3}>3日</option>
                <option value={4}>4日</option>
                <option value={5}>5日</option>
                <option value={6}>6日</option>
                <option value={7}>7日</option>
                <option value={8}>8日</option>
                <option value={9}>9日</option>
                <option value={10}>10日</option>
                <option value={11}>11日</option>
                <option value={12}>12日</option>
                <option value={13}>13日</option>
                <option value={14}>14日</option>
                <option value={15}>15日</option>
                <option value={16}>16日</option>
                <option value={17}>17日</option>
                <option value={18}>18日</option>
                <option value={19}>19日</option>
                <option value={20}>20日</option>
                <option value={21}>21日</option>
                <option value={22}>22日</option>
                <option value={23}>23日</option>
                <option value={24}>24日</option>
                <option value={25}>25日</option>
                <option value={26}>26日</option>
                <option value={27}>27日</option>
                <option value={28}>28日</option>
                <option value={29}>29日</option>
                <option value={30}>30日</option>
                <option value={31}>31日</option>
            </select>
            <button>決定</button>
        </form>
);
}


export default InputForm;
