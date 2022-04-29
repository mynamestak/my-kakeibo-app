import './App.css';
import React from 'react';
import SearchAppBar from './components/AppBar';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// しょうすけの例文
// import Todo from './components/Todo';

function App() {


  return (
    <div className="App">
      <Home />
        {/* <Router>
                  <Routes>
                    <Route path='/' exact element={<Home />}/>
                    <Route path='/item/:id' element={<ItemDetail />}/>
                  </Routes>
        </Router> */}
    </div>
  );
}

export default App;
