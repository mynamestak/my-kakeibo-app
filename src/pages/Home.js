import React, { useState } from 'react';
import AddItem from '../components/AddItem';
import ItemLists from '../components/ItemLists';
import Balance from '../components/Balance';
import DateHeader from '../components/DateHeader';

// しょうすけの例文
// import Todo from './components/Todo';

const Home = () => {



  const [date, setDate] = useState(new Date()); 
  const [datePickerValue, setDatePickerValue] = useState(null);

  const [filteredIncomeItems, setFilteredIncomeItems] = useState([]);
  const [filteredExpenseItems, setFilteredExpenseItems] = useState([]);



  return (
    <div className="App">
        <DateHeader  date={date} setDate={setDate}/>
        <Balance 
          date={date}
          filteredIncomeItems={filteredIncomeItems}
          filteredExpenseItems={filteredExpenseItems}
        />
        <AddItem 
          datePickerValue={datePickerValue}
          setDatePickerValue={setDatePickerValue}
        />
        <ItemLists 
          date={date} 
          setDate={setDate}
          filteredIncomeItems={filteredIncomeItems}
          setFilteredIncomeItems={setFilteredIncomeItems}
          filteredExpenseItems={filteredExpenseItems}
          setFilteredExpenseItems={setFilteredExpenseItems}
        />
      {/* <Todo/> */}
    </div>
  );
}

export default Home;
