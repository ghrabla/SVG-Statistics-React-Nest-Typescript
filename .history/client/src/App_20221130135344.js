import './App.css';
import Home from "./Home";
import Login from "./Admin/LoginAdmin"
import { Router } from 'express';

function App() {
  return (
    <>
    <Router>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    </Router>
    </>
  );
}

export default App;
