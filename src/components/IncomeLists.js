import React, {useState} from 'react';
import IncomeList from './IncomeList';

const IncomeLists = ({incomes, setIncomes, incomeAmounts, setDecreNum, setIncomeAmounts, decreNum}) => {


    return(
        <div>
            <ul>
                {incomes.map(income => (
                    <IncomeList 
                        income={income}
                        incomes={incomes}
                        incomeText={income.incomeText}
                        id={income.id}
                        incomeNum={income.incomeNum}
                        setIncomes={setIncomes}
                        incomeOrder={income.incomeOrder}
                        incomeAmounts={incomeAmounts}
                        setDecreNum={setDecreNum}
                        setIncomeAmounts={setIncomeAmounts}
                        decreNum={decreNum}
                    />
                ))}
            </ul>
        </div>
    );
}

export default IncomeLists;