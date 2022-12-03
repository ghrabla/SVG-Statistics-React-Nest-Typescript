import './App.css';
import Home from "./Home";
import LoginAdmin from "./Admin/LoginAdmin"
import Register from "./users/Register"

import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";




function App() {
  return (
    <>
    <Toaster />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/LoginAdmin" element={<LoginAdmin />} />
    </Routes>
    </>
  );
}

export default App;
