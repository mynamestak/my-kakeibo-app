import './App.css';
import React, {useEffect, useState, useContext} from 'react';
import IncomeForm from './components/IncomeForm';
import IncomeLists from './components/IncomeLists';
import IncomeResult from './components/IncomeResult';
import ExpenseForm from './components/ExpenseForm';
import ExpenseLists from './components/ExpenseLists';
import ExpenseResult from './components/ExpenseResult';
import Balance from './components/Balance';
import DateHeader from './components/DateHeader';
import { IncomesProvider } from './IncomesContext';


// しょうすけの例文
import Todo from './components/Todo';

function App() {


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
        <IncomesProvider>
          <IncomeForm 
            incomeAmounts={incomeAmounts}
            setIncomeAmounts={setIncomeAmounts}
            />

          <IncomeLists 
            incomeAmounts={incomeAmounts}
            setIncomeAmounts={setIncomeAmounts}
            />
        </IncomesProvider>
          <IncomeResult 
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

      {/* <Balance incomeAmounts={incomeAmounts} expenseAmounts={expenseAmounts}/>  */}

      {/* <Todo/> */}
    </div>
  );
}

export default App;
