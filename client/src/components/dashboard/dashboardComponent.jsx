import React from "react";
import Sidebar from "./sidebar";
import Statistics from "./statistics";


const DashboardComponent = () => {
    
    return (
    <div className="flex h-screen bg-gray-100">
        <div className="flex bg-gray-100">
            <Sidebar/>
            <div className="flex flex-col w-full mb-3 ">
                <div className="flex items-center justify-between mt-8">
                <h3 className="ml-36 text-gray-700 text-3xl font-medium">Welcome here at Dashboard</h3>
                   
                </div>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">

                    <div className="w-full mt-8">
                    </div>
                </main>
            </div>
        </div>
    </div>





    );
}
export default DashboardComponent;