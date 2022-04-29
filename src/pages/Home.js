import React, { useState } from 'react';
import AddItem from '../components/AddItem';
import ItemLists from '../components/ItemLists';
import Balance from '../components/Balance';
import DateHeader from '../components/DateHeader';
import NewsLists from '../components/NewsLists';
import NewsSearch from '../components/NewsSearh';

// しょうすけの例文
// import Todo from './components/Todo';

const Home = () => {




  const [date, setDate] = useState(new Date()); 

  const [filteredIncomeItems, setFilteredIncomeItems] = useState([]);
  const [filteredExpenseItems, setFilteredExpenseItems] = useState([]);

  const [newsText, setNewsText] = useState('');



  return (
    <div className="App">
        {/* <DateHeader  date={date} setDate={setDate}/> */}
        {/* ヘッダー以下を２つのコンテイナーで分ける予定　左はニュース・右は収支表示 */}
        <div>
          {/* <NewsProvider newsText={newsText}>
            <NewsSearch 
              newsText={newsText}
              setNewsText={setNewsText}/>
            <NewsLists />
          </NewsProvider> */}
        </div>
        <div>
          {/* <Balance 
            date={date}
            filteredIncomeItems={filteredIncomeItems}
            filteredExpenseItems={filteredExpenseItems}
          /> */}
          <AddItem 
          />
          <ItemLists 
            date={date} 
            setDate={setDate}
            filteredIncomeItems={filteredIncomeItems}
            setFilteredIncomeItems={setFilteredIncomeItems}
            filteredExpenseItems={filteredExpenseItems}
            setFilteredExpenseItems={setFilteredExpenseItems}
          />
        </div>
      {/* <Todo/> */}
    </div>
  );
}

export default Home;
