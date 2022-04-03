import React, { useState } from 'react';
import IncomeForm from '../components/IncomeForm';
import IncomeLists from '../components/IncomeLists';
import IncomeResult from '../components/IncomeResult';
// import ExpenseForm from '../components/ExpenseForm';
// import ExpenseLists from '../components/ExpenseLists';
// import ExpenseResult from '../components/ExpenseResult';
// import Balance from '../components/Balance';
import DateHeader from '../components/DateHeader';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// しょうすけの例文
// import Todo from './components/Todo';

const Home = () => {



  const [date, setDate] = useState(new Date()); 
  const [filteredIncomes, setFilteredIncomes] = useState([]);
  const [datePickerValue, setDatePickerValue] = useState(null);


  // 収入合計するためのstate
  const [incomeResult, setIncomeResult] = useState(0);
  const [incomeAmounts, setIncomeAmounts] = useState([0]);

  // 支出
  // const [expenses, setExpenses] = useState([]);

  // 支出合計するためのstate
  // const [expenseAmounts, setExpenseAmounts] = useState([0]);
  // const [ expenseResult, setExpenseResult ] = useState(0);


  return (
    <div className="App">
              <DateHeader  date={date} setDate={setDate}/>
              <IncomeResult 
                date={date}
                incomeResult={incomeResult}
                setIncomeResult={setIncomeResult}
                setIncomeAmounts={setIncomeAmounts}
                incomeAmounts={incomeAmounts} 
                filteredIncomes={filteredIncomes}
              />
                <IncomeForm 
                  date={date}
                  datePickerValue={datePickerValue}
                  setDatePickerValue={setDatePickerValue}
                  incomeAmounts={incomeAmounts}
                  setIncomeAmounts={setIncomeAmounts}
                />
                <IncomeLists 
                  incomeAmounts={incomeAmounts}
                  setIncomeAmounts={setIncomeAmounts}
                  date={date} 
                  setDate={setDate}
                  filteredIncomes={filteredIncomes}
                  setFilteredIncomes={setFilteredIncomes}
                />



        
      {/* <ExpenseForm
        setExpenses={setExpenses}
        expenses={expenses}
        expenseAmounts={expenseAmounts}
        setExpenseAmounts={setExpenseAmounts}/>
      <ExpenseLists 
        expenses={expenses}
        setExpenses={setExpenses}
        expenseAmounts={expenseAmounts}
        setExpenseAmounts={setExpenseAmounts}
        />
      <ExpenseResult 
        expenseAmounts={expenseAmounts} 
        expenseResult={expenseResult}
        setExpenseResult={setExpenseResult}
        />
      */}

      {/* <Balance incomeAmounts={incomeAmounts} expenseAmounts={expenseAmounts}/>  */}

      {/* <Todo/> */}
    </div>
  );
}

export default Home;