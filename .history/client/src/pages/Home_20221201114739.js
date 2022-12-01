import React from "react";
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';

function Home() {
    return (
        <div>
        <div className='flex'>
       <NavBar/>
       </div>
       <img src="./public/assets/namx_voiture/" alt="image" className="w-full h-96 object-cover"/>
       <div>
    <Footer/>
    </div>
       </div>
     
    )
}
export default Home;