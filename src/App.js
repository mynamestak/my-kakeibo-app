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


  //収入入力用
  const [incomeInputText, setIncomeInputText] = useState('');
  const [incomeInputNum, setIncomeInputNum] = useState('');
  const [incomeCount, setIncomeCount] = useState(1);
  const [decreNum, setDecreNum] = useState(0);
  // 収入
  const [incomes, setIncomes] = useState([]);

  // 収入合計するためのstate
  const [incomeResult, setIncomeResult] = useState(0);
  const [incomeAmounts, setIncomeAmounts] = useState([0]);

  // 支出入力用
  const [expenseInputText, setExpenseInputText] = useState('');
  const [expenseInputNum, setExpenseInputNum] = useState('');
  // 支出
  const [expenses, setExpenses] = useState([]);

  // 支出合計するためのstate
  const [expenseAmounts, setExpenseAmounts] = useState([0]);

  return (
    <div className="App">
      {/* <DateHeader 
        />
      <IncomeForm 
        incomeInputText={incomeInputText}
        setIncomeInputText={setIncomeInputText}
        incomes={incomes}
        setIncomes={setIncomes}
        incomeInputNum={incomeInputNum}
        setIncomeInputNum={setIncomeInputNum}
        incomeAmounts={incomeAmounts}
        setIncomeAmounts={setIncomeAmounts}
        incomeCount={incomeCount}
        setIncomeCount={setIncomeCount}
        />
      <IncomeLists 
        incomes={incomes} 
        setIncomes={setIncomes}
        incomeAmounts={incomeAmounts}
        setIncomeAmounts={setIncomeAmounts}
        setDecreNum={setDecreNum}
        decreNum={decreNum}
        />
      <IncomeResult 
        incomeResult={incomeResult}
        setIncomeResult={setIncomeResult}
        incomeAmounts={incomeAmounts} 
        decreNum={decreNum}
        setDecreNum={setDecreNum}
        />
        
      <ExpenseForm 
        expenseInputText={expenseInputText}
        setExpenseInputText={setExpenseInputText}
        setExpenses={setExpenses}
        expenses={expenses}
        expenseInputNum={expenseInputNum}
        setExpenseInputNum={setExpenseInputNum}
        expenseAmounts={expenseAmounts}
        setExpenseAmounts={setExpenseAmounts}/>
      <ExpenseLists 
        expenses={expenses}
        setExpenses={setExpenses}/>
      <ExpenseResult expenseAmounts={expenseAmounts}/>

      <Balance incomeAmounts={incomeAmounts} expenseAmounts={expenseAmounts}/> */}

      <Todo/>
    </div>
  );
}

export default App;
