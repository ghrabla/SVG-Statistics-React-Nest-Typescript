import './App.css';
// import Home from "./Home";
import Login from "./Admin/LoginAdmin"
import { Router } from 'nest';
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster />
    <Router>
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/LoginAdmin" element={<LoginAdmin />} />
    </Router>
    </>
  );
}

export default App;
