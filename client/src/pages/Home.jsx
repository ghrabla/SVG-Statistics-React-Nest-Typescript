import React from "react";

import NavBar from '../components/NavBar';
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
    return (
        <div>
        <div>
       <NavBar />
       </div>
       {/* <img src={process.env.PUBLIC_URL+"https://pininfarina.it/wp-content/uploads/2022/05/NAMX_video_site.mp4"} alt="" className="w-full h-full object-cover"/> */}
       <video autoPlay loop muted id="video">
        <source src="https://pininfarina.it/wp-content/uploads/2022/05/NAMX_video_site.mp4" type="video/mp4"/>
       </video>
       <About />
      <Contact />
       
       </div>
     
    )
}
export default Home;