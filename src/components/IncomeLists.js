import React, {useState, useEffect, useContext} from 'react';
import IncomeList from './IncomeList';
import { IncomesContext } from '../IncomesContext';
// import { filteredIncomesContext } from '../IncomesContext';
import { DateContext } from '../DateContext';

const IncomeLists = ({incomeAmounts, setIncomeAmounts, date, setDate, filteredIncomes, setFilteredIncomes}) => {


    const [incomes, setIncomes] = useContext(IncomesContext);
    
    const selectedMonth = date.getMonth() + 1;

    const filterHandler = () => {
        setFilteredIncomes(incomes.filter(income => income.incomeMonth === selectedMonth));
    }

    useEffect(() => {
        filterHandler();
      }, [incomes, date]);
    
    return(
        <div>
            <ul>
                {incomes.map(income => (
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
                        incomeDay={income.incomeDay}
                        incomeMonth={income.incomeMonth}
                    />
                ))}
            </ul>
            <p>ここから下は{selectedMonth}月の収入リストです。</p>
            <ul>
                {filteredIncomes.map(income => (
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
                        incomeDay={income.incomeDay}
                        incomeMonth={income.incomeMonth}
                    />
                ))}
            </ul>
        </div>
    );
}

export default IncomeLists;