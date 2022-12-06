import React from "react";

import NavBar from '../components/NavBar';
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
    return (
        <div>
        <div>
       <NavBar/>
       </div>
       <img src={process.env.PUBLIC_URL+"assets/car4.jpg"} alt="" className="w-full h-full object-cover"/>
       <About />
      <Contact />
       
       </div>
     
    )
}
export default Home;