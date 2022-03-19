import React, {useState} from 'react';
import IncomeList from './IncomeList';

const IncomeLists = ({incomes, setIncomes, incomeAmounts, setIncomeAmounts}) => {


    return(
        <div>
            <ul>
                {incomes.map((income, index) => (
                    <IncomeList 
                        income={income}
                        incomes={incomes}
                        incomeText={income.incomeText}
                        key={income.id}
                        id={income.id}
                        incomeNum={income.incomeNum}
                        setIncomes={setIncomes}
                        incomeAmounts={incomeAmounts}
                        setIncomeAmounts={setIncomeAmounts}
                        index={index}
                    />
                ))}
            </ul>
        </div>
    );
}

export default IncomeLists;