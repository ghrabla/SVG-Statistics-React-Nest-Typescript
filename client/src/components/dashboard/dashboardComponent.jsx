import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Statistics from "./statistics";
import Swal from 'sweetalert2';


const DashboardComponent = () => {
    const [allcars,setallcars] = useState([])

    const deletecar = (_id)=>{
        Swal.fire({
            title: "Are you sure ?",
            text: "You are going to delete this user",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "black",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel",
          }).then((result) => {
            if (result.value) { 
            axios.delete(`http://localhost:9000/cars/${_id}`).then(()=>{
            setallcars(allcars.filter((car)=>{
              return car._id !== _id;
          }))
      })
         Swal.fire("Deleted !", "success")
        }
    });    
    }
    return (
    <div className="flex bg-gray-100">
        <div className="flex bg-gray-100">
            <Sidebar/>
            <div className="flex flex-col w-full mb-3 ">
                <div className="flex items-center justify-between mt-8">
                <h3 className="ml-36 text-gray-700 text-3xl font-medium">Cars Dashboards</h3>
                    <div className="flex bg-gray-50 items-center p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd" />
                        </svg>
                        <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."></input>
                    </div>
                    <div className="lg:ml-40 ml-10 space-x-8">
                        {/* <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button> */}
                        <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"><i className="fas fa-plus mt-1"></i> Create</button>
                    </div>
                </div>
                <main className="flex-1 overflow-x-hidden bg-gray-100 rounded">
                   <Statistics allcars={allcars} setallcars={setallcars}/>
                    <div className="w-full shadow rounded mt-8">
                        <div className="rounded">
                            <div className="flex justify-between items-center">
                                {/* <Link to="/addcar" className="px-5 py-1 bg-blue-600 text-white rounded hover:bg-blue-500">Add Car</Link> */}
                            </div>
                            <div className="w-full overflow-x-auto">
                                <table className="w-full">
                                <thead>
                                <tr>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Price 
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Quantity
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Color
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Image
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Action 
                                    </th>
                                </tr>
                            </thead>
                                       {allcars.map((one)=>( 
                                    <tbody className="bg-white" key={one._id}>
                                             <tr>
                                    <td class="px-5 py-4 border-b border-gray-200 bg-white text-sm">      
                                            <div class="ml-3">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    {one.name}
                                                </p>
                                            </div>
                                    </td>
                                    <td class="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{one.price}</p>
                                    </td>
                                    <td class="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {one.qty}
                                        </p>
                                    </td>
                                    <td class="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap" >
                                            {one.color}
                                        </p>
                                    </td>
                                    <td class="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                            {one.img}
                                        </p>
                                    </td>
                                    <td class="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                        <div class="flex items-center space-x-4 text-sm">
                                            <button class="bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer flex"><i class="fas fa-edit mt-1 mr-1"></i>  Edit</button>
                                            <button class="bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer flex" onClick={()=>deletecar(one._id)}><i class="fas fa-trash mt-1 mr-1"></i>  Delete</button>
                                        </div>
                                    </td>
                                </tr>  
                                    </tbody>
                                       ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>





    );
}
export default DashboardComponent;