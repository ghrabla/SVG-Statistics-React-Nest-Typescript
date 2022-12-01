import './App.css';
// import Home from "./Home";
import LoginAdmin from "./Admin/LoginAdmin"
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster />
    <Routes>
    <Route path="/LoginAdmin" element={<LoginAdmin />} />
    </Routes>
    </>
  );
}

export default App;
