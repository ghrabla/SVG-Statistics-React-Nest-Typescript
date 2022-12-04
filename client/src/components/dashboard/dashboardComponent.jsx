import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Statistics from "./statistics";



const DashboardComponent = () => {
    return (

        <div className="flex bg-gray-100">
            <Sidebar/>
            <div className="flex flex-col w-full mb-3 ">
                <h3 className="ml-36 mt-8 text-gray-700 text-3xl font-medium">Cars Dashboards</h3>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                   <Statistics/>
                    <div className="w-full mt-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-center">
                                {/* <Link to="/addcar" className="px-5 py-1 bg-blue-600 text-white rounded hover:bg-blue-500">Add Car</Link> */}
                            </div>
                            <div className="w-full overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                            <th className="px-4 py-3">Name</th>
                                            <th className="px-4 py-3">Brand</th>
                                            <th className="px-4 py-3">Price</th>
                                            <th className="px-4 py-3">Color</th>
                                            <th className="px-4 py-3">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="text-gray-700">
                                            <td className="px-4 py-3 border">
                                                <div className="flex items-center text-sm">
                                                    <div>
                                                        <p className="font-semibold">Audi A4</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-ms font-semibold border">Audi</td>
                                            <td className="px-4 py-3 text-ms font-semibold border">10000</td>
                                            <td className="px-4 py-3 text-ms font-semibold border">Black</td>
                                            <td className="px-4 py-3 text-ms font-semibold border">
                                                <div className="flex items-center space-x-4 text-sm">
                                                    <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </button>
                                                    <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-blue">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#FF8A65" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 16c0-1.66 0-3 3-3h4c3 0 3-1 3-3V8c0-2 0-3-3-3h-1M12 2H8a9.475 9.475 0 000 6h4c.65-1.95.65-4.05 0-6z"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 2H7C5 2 4 3 4 5s1 3 3 3h1C7 6 7 4 8 2zM13 2h-1c1 2 1 4 0 6h1c2 0 3-1 3-3s-1-3-3-3zM9.5 22h1c1.5 0 1.5-1 1.5-1.5v-3c0-.5 0-1.5-1.5-1.5h-1C8 16 8 17 8 17.5v3C8 21 8 22 9.5 22z"></path></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>





    );
}

// export the component
export default DashboardComponent;