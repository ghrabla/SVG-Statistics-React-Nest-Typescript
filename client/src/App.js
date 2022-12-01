import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route,  Link, Routes , } from 'react-router-dom';
import { TostContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/dashboardComponent';
import Order from './components/dashboard/OrderComponent';



function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/order' element={<Order />} />
          </Routes>

        </div>
      </div>
    </Router>

  );
}

export default App;
