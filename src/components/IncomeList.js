import React, {useState} from 'react';

const IncomeList = ({income, incomes, incomeText, setIncomes, incomeNum, incomeOrder, incomeAmounts, setIncomeAmounts, setDecreNum, decreNum, id}) => {
    const incomeDeleteHandler = () => {
        setIncomes(incomes.filter(el => el.id !== income.id));
        // setDecreNum(incomeAmounts.slice(incomeOrder, incomeOrder + 1));
        setIncomeAmounts(incomeAmounts.filter(el => el !== Number(incomeNum)));
    }


    return(
        <div key={id}>
            <li>{incomeText}が{incomeNum}でした。</li>
            {/* <li>{incomeOrder}</li> */}
            {/* <li>記入日：</li> */}
            <button onClick={incomeDeleteHandler}>削除</button>
        </div>
    );
}

export default IncomeList;