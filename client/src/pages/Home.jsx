import React from "react";

import NavBar from '../components/NavBar';

function Home() {
    return (
        <div>
       <NavBar/>
       
       <img src={process.env.PUBLIC_URL+"assets/namx_voiture.gif"} alt="" className="w-full h-full object-cover"/>
       
       </div>
     
    )
}
export default Home;