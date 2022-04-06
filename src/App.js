import './App.css';
import React from 'react';
import SearchAppBar from './components/AppBar';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import { ItemsProvider } from './ItemsContext';
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
            <ItemsProvider>
                <Routes>
                  <Route path='/' exact element={<Home />}/>
                  <Route path='/item/:id' element={<ItemDetail />}/>
                </Routes>
            </ItemsProvider>
          </DateProvider>
        </Router>
    </div>
  );
}

export default App;
