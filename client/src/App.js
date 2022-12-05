import { ToastContainer } from 'react-toastify';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Route, Routes , } from 'react-router-dom';
import Footer from '../src/components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/dashboardComponent';
import Order from './components/dashboard/OrderComponent';
import Home from "./pages/Home";
import LoginAdmin from "./Admin/LoginAdmin";
import LoginUser from "./users/LoginUser";
import Register from "./users/Register";




function App() {
  return (
    <>
      <div className="App">
        <div>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/order' exact element={<Order />} />
            <Route path="/" element={<Home />} />
            <Route path="/LoginAdmin" element={<LoginAdmin />} />
            <Route path="/Login" element={<LoginUser />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
          <ToastContainer/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
