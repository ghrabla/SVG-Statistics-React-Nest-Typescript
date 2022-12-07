import { ToastContainer } from 'react-toastify';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Route, Routes , } from 'react-router-dom';
import Footer from '../src/components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/dashboardComponent';
import Order from './components/dashboard/OrderComponent';
import Types from './components/dashboard/TypesComponent';
import Home from "./pages/Home";
import LoginAdmin from "./Admin/LoginAdmin";
import LoginUser from "./users/LoginUser";
import Register from "./users/Register";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
export const StatisticsContext = React.createContext();


function App() {

  const [cars,setcars] = useState([])
  const [orders,setorders] = useState([])
  const [types,settypes] = useState([])
   
  useEffect(()=>{
  const getcars = async ()=>{
   const res = await axios.get("http://localhost:9000/cars")
   setcars(res.data)
  }
  const gettypes = async ()=>{
   const res = await axios.get("http://localhost:9000/types")
   settypes(res.data)
  }
  const getorders = async ()=>{
   const res = await axios.get("http://localhost:9000/orders")
   setorders(res.data)
  }
  getcars();
  gettypes();
  getorders();
  },[])

  return (
    <>
      <div className="App">
      <StatisticsContext.Provider value={{cars,setcars,orders,setorders,types,settypes}}>
        <div>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/order' exact element={<Order />} />
            <Route path='/types' exact element={<Types />} />
            <Route path="/" element={<Home />} />
            <Route path="/LoginAdmin" element={<LoginAdmin />} />
            <Route path="/Login" element={<LoginUser />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
          <ToastContainer/>
          <Footer/>
        </div>
        </StatisticsContext.Provider>
      </div>
    </>
  );
}

export default App;
