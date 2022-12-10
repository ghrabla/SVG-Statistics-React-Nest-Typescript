import { ToastContainer } from 'react-toastify';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Route, Routes , } from 'react-router-dom';
import Footer from '../src/components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/dashboardComponent';
import Cars from './components/dashboard/CarsComponent';
import Order from './components/dashboard/OrderComponent';
import Types from './components/dashboard/TypesComponent';
import Home from "./pages/Home";
import LoginAdmin from "./Admin/LoginAdmin";
import LoginUser from "./users/LoginUser";
import Register from "./users/Register";
import Details from "./pages/details";



function App() {



  return (
    <>
      <div className="App">
        <div>
          <Routes>
            <Route path='/cars' element={<Dashboard />} />
            {/* <Route path='/cars' element={<Cars />} /> */}
            <Route path='/orders' exact element={<Order />} />
            <Route path='/types' exact element={<Types />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin/Login" element={<LoginAdmin />} />
            <Route path="/Login" element={<LoginUser />} />
            <Route path="/Register" element={<Register />} />
            {/* <Route path="/details/:id" element={<Details />} /> */} 
            <Route path="/details" element={<Details />} />
          </Routes>
          <ToastContainer/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
