import './App.css';
// import Home from "./Home";
import Login from "./Admin/LoginAdmin"
import { Router } from 'express';

function App() {
  return (
    <>
    <Router>
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/LoginAdmin" element={<LoginAdmin />} />
    </Router>
    </>
  );
}

export default App;
