import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = ()=>{
   const [active,setActive] = useState(false);
    
   const shownav = () =>{
       setActive(!active)
   }

    return(
    <>
    
    <div className={active ? "flex flex-col flex-shrink-0 w-64" : "hidden"}>
        <div className="flex flex-col flex-grow overflow-y-auto bg-white">
            <div className="flex items-center flex-shrink-0 px-4 py-2 bg-gray-800">
                <span className="text-lg font-semibold text-white">Dashboard</span>
            </div>
            <nav className="flex flex-col flex-grow mt-5 overflow-y-auto">
                <a href="#" className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 bg-gray-200">
                    <span className="mx-4 font-medium text-gray-800"><i class="fas fa-car"></i> Cars</span>
                </a>
                <Link to="/order"  className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="mx-4 font-medium text-gray-800"><i class="fa fa-first-order" aria-hidden="true"></i> Orders</span>
                </Link>
                <a href="#" className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="mx-4 font-medium text-gray-800"><i class="fa-solid fa-chart-simple"></i> Types</span>
                </a>
                <a href="#" className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="mx-4 font-medium text-gray-800"><i class="fa fa-info-circle" aria-hidden="true"></i> Details</span>
                </a>
            </nav>
        </div>
    </div>
    <a href="javascript:void(0)" onClick={shownav} className="font-bold text-white bg-black flex p-3 h-14 mt-10 rounded text-2xl"><i class="fas fa-bars"></i></a>
    </>
    )
}

export default Sidebar;