import './App.css';
import React, {useEffect, useState} from 'react';
import IncomeForm from './components/IncomeForm';
import IncomeLists from './components/IncomeLists';
import IncomeResult from './components/IncomeResult';
import ExpenseForm from './components/ExpenseForm';
import ExpenseLists from './components/ExpenseLists';
import ExpenseResult from './components/ExpenseResult';
import Balance from './components/Balance';
import DateHeader from './components/DateHeader';

import Todo from './components/Todo';

function App() {

  // 収入
  const [incomes, setIncomes] = useState([]);

  // 収入合計するためのstate
  const [incomeResult, setIncomeResult] = useState(0);
  const [incomeAmounts, setIncomeAmounts] = useState([0]);

  // 支出
  const [expenses, setExpenses] = useState([]);

  // 支出合計するためのstate
  const [expenseAmounts, setExpenseAmounts] = useState([0]);
  const [ expenseResult, setExpenseResult ] = useState(0);



  return (
    <div className="App">
      {/* <DateHeader 
        /> */}
      <IncomeForm 
        incomes={incomes}
        setIncomes={setIncomes}
        incomeAmounts={incomeAmounts}
        setIncomeAmounts={setIncomeAmounts}
        />
      <IncomeLists 
        incomes={incomes} 
        setIncomes={setIncomes}
        incomeAmounts={incomeAmounts}
        setIncomeAmounts={setIncomeAmounts}
        />
      <IncomeResult 
        incomes={incomes}
        incomeResult={incomeResult}
        setIncomeResult={setIncomeResult}
        incomeAmounts={incomeAmounts} 
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

      <Balance incomeAmounts={incomeAmounts} expenseAmounts={expenseAmounts}/> 

      {/* <Todo/> */}
    </div>
  );
}

export default App;
