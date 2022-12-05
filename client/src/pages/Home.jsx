import React from "react";

import NavBar from '../components/NavBar';
import About from "../components/About";

function Home() {
    return (
        <div>
        <div>
       <NavBar/>
       </div>
       <img src={process.env.PUBLIC_URL+"assets/car4.jpg"} alt="" className="w-full h-full object-cover"/>
       <About />
       
       </div>
     
    )
}
export default Home;