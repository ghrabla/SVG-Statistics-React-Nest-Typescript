import React from "react";
import { Link } from "react-router-dom";
import Footer from './components/Footer'
import NavBar from './components/NavBar';

function Home() {
    return (
        <div>
        <div className='flex'>
       <NavBar/>
       </div>
       <div>
    <Footer/>
    </div>
       </div>
     
    );
}
