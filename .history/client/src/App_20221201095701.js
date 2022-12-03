import './App.css';
import Home from "./Home";
import LoginAdmin from "./Admin/LoginAdmin"
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";




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
