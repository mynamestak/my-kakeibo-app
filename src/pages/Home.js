import React, { useState } from 'react';
import AddItem from '../components/AddItem';
import ItemLists from '../components/ItemLists';
import Balance from '../components/Balance';
// import Balance from '../components/Balance';
import DateHeader from '../components/DateHeader';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// しょうすけの例文
// import Todo from './components/Todo';

const Home = () => {



  const [date, setDate] = useState(new Date()); 
  const [filteredMonthItems, setFilteredMonthItems] = useState([]);
  const [datePickerValue, setDatePickerValue] = useState(null);
  const [filteredIncomeItems, setFilteredIncomeItems] = useState([]);
  const [filteredExpenseItems, setFilteredExpenseItems] = useState([]);


  // 収入合計するためのstate
  const [balanceResult, setBalanceResult] = useState(0);





  return (
    <div className="App">
              <DateHeader  date={date} setDate={setDate}/>
              <Balance 
                date={date}
                balanceResult={balanceResult}
                filteredIncomeItems={filteredIncomeItems}
                filteredExpenseItems={filteredExpenseItems}
              />
                <AddItem 
                  date={date}
                  datePickerValue={datePickerValue}
                  setDatePickerValue={setDatePickerValue}
                />
                <ItemLists 
                  date={date} 
                  setDate={setDate}
                  filteredMonthItems={filteredMonthItems}
                  setFilteredMonthItems={setFilteredMonthItems}
                  filteredIncomeItems={filteredIncomeItems}
                  setFilteredIncomeItems={setFilteredIncomeItems}
                  filteredExpenseItems={filteredExpenseItems}
                  setFilteredExpenseItems={setFilteredExpenseItems}
                />
        
      {/* <Balance incomeAmounts={incomeAmounts} expenseAmounts={expenseAmounts}/>  */}

      {/* <Todo/> */}
    </div>
  );
}

export default Home;
