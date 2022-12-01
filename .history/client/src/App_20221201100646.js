import './App.css';
import Home from "./pages/Home";
import LoginAdmin from "./Admin/LoginAdmin"
import LoginUser from "./users/LoginUser";
import Register from "./users/Register";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";




function App() {
  return (
    <>
    <Toaster />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/LoginAdmin" element={<LoginAdmin />} />
    <Route path="/LoginUser" element={<LoginUser />} />
    <Route path="/Register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;
