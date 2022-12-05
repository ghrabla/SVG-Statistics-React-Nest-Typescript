
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route,  Link, Routes , } from 'react-router-dom';
import { TostContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/dashboardComponent';
import Order from './components/dashboard/OrderComponent';
import Types from './components/dashboard/TypesComponent';
// import './App.css';
import Home from "./pages/Home";
import LoginAdmin from "./Admin/LoginAdmin"
import LoginUser from "./users/LoginUser";
import Register from "./users/Register";




function App() {
  return (
    <>
    {/* <Router> */}
      <div className="App">
        <div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/order' exact element={<Order />} />
            <Route path='/types' exact element={<Types />} />
          </Routes>

        </div>
      </div>
    {/* </Router> */}
   
    {/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/LoginAdmin" element={<LoginAdmin />} />
    <Route path="/LoginUser" element={<LoginUser />} />
    <Route path="/Register" element={<Register />} />
    </Routes> */}
    </>
  );
}

export default App;
