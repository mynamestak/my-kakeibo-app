import './App.css';
import React from 'react';
import SearchAppBar from './components/AppBar';
import Home from './pages/Home';
import IncomeDetail from './pages/IncomeDetail';
import { IncomesProvider } from './IncomesContext';
import { DateProvider } from './DateContext';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// しょうすけの例文
// import Todo from './components/Todo';

function App() {


  return (
    <div className="App">
        <Router>
          <SearchAppBar />
          <DateProvider>
            <IncomesProvider>
                <Routes>
                  <Route path='/' exact element={<Home />}/>
                  <Route path='/income/:id' element={<IncomeDetail />}/>
                </Routes>
            </IncomesProvider>
          </DateProvider>
        </Router>
    </div>
  );
}

export default App;
