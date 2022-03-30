import React, { useEffect, useContext} from 'react';
import IncomeList from './IncomeList';
import { IncomesContext } from '../IncomesContext';
import { Box, Typography } from '@material-ui/core';

const IncomeLists = ({incomeAmounts, setIncomeAmounts, date, filteredIncomes, setFilteredIncomes}) => {


    const [incomes, setIncomes] = useContext(IncomesContext);
    
    const selectedMonth = date.getMonth() + 1;

    const filterHandler = () => {
        setFilteredIncomes(incomes.filter(income => income.incomeMonth === selectedMonth));
    }

    useEffect(() => {
        filterHandler();
      }, [incomes, date]);
    
    return(
        <Box sx={{marginTop:16}}>
            {/* 登録したすべての収入表示 */}
            {/* <ul>
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
            </ul> */}
            <Typography varient='h3' component='h3'>{selectedMonth}月収入リスト</Typography>
            <Box>
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
            </Box>
        </Box>
    );
}

export default IncomeLists;