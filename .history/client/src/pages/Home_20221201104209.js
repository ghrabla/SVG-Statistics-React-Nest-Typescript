import React from "react";
import Footer from '..Footer/components/Footer'
import NavBar from '../components/NavBar';

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
     
    )
}
export default Home;