import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch , Link} from "react-router-dom";
import { Bag, EmojiHappy } from 'iconic-react';




const DashboardComponent = () => {
    return (

        <div className="flex h-screen bg-gray-100">
            <div className="flex flex-col flex-shrink-0 w-64">
                <div className="flex flex-col flex-grow overflow-y-auto bg-white">
                    <div className="flex items-center flex-shrink-0 px-4 py-2 bg-gray-800">
                        <span className="text-lg font-semibold text-white">Dashboard</span>
                    </div>
                    <nav className="flex flex-col flex-grow mt-5 overflow-y-auto">
                        <a href="#" className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 bg-gray-200">
                            <span className="mx-4 font-medium text-gray-800">Cars</span>
                        </a>
                        <Link to="/order"  className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 hover:bg-gray-200">
                            <span className="mx-4 font-medium text-gray-800">Orders</span>
                        </Link>
                        <a href="#" className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 hover:bg-gray-200">
                            <span className="mx-4 font-medium text-gray-800">Types</span>
                        </a>
                        <a href="#" className="flex items-center flex-shrink-0 px-4 py-2 text-gray-800 hover:bg-gray-200">
                            <span className="mx-4 font-medium text-gray-800">Details</span>
                        </a>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col flex-1 w-full">
                <header className="flex items-center justify-between flex-shrink-0 px-4 py-2 bg-white border-b">
                    <div className="flex items-center">
                        <span className="mx-4 font-semibold text-gray-800">Tableau de bord</span>
                    </div>

                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-6 py-8">
                        <h3 className="text-gray-700 text-3xl font-medium">Tableau de bord</h3>
                        <div className="mt-4">
                            <div className="flex flex-wrap -mx-6">
                                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                        <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.5 7c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202zm-1.441 3.506c.639 1.186.946 2.252.946 3.666 0 1.37-.397 2.533-1.005 3.981v1.847c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1h-13v1c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1.847c-.608-1.448-1.005-2.611-1.005-3.981 0-1.414.307-2.48.946-3.666.829-1.537 1.851-3.453 2.93-5.252.828-1.382 1.262-1.707 2.278-1.889 1.532-.275 2.918-.365 4.851-.365s3.319.09 4.851.365c1.016.182 1.45.507 2.278 1.889 1.079 1.799 2.101 3.715 2.93 5.252zm-16.059 2.994c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm10 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm2.941-5.527s-.74-1.826-1.631-3.142c-.202-.298-.515-.502-.869-.566-1.511-.272-2.835-.359-4.441-.359s-2.93.087-4.441.359c-.354.063-.667.267-.869.566-.891 1.315-1.631 3.142-1.631 3.142 1.64.313 4.309.497 6.941.497s5.301-.184 6.941-.497zm2.059 4.527c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-18.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2z" /></svg>
                                        </div>
                                        <div className="mx-5">
                                            <h4 className="text-2xl font-semibold text-gray-700">6389</h4>
                                            <div className="text-gray-500">Total des Cars </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                        <div className="p-3 rounded-full bg-green-600  bg-opacity-75">
                                        <Bag size="32" color="#FF8A65"/>
                                        </div>
                                        <div className="mx-5">
                                            <h4 className="text-2xl font-semibold text-gray-700">6389</h4>
                                            <div className="text-gray-500">Total types  </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                        <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M17.012 18.708l-4.318-1.07-3.981 3.871c-.326.317-.755.491-1.209.491-.85 0-1.504-.691-1.504-1.502v-4.519l-4.13-8.979h-1.37c-.311 0-.5-.26-.5-.5 0-.239.189-.5.5-.5h2.025l4.194 9.132 10.38 2.569c.363-1.544 1.75-2.695 3.404-2.695 1.93 0 3.497 1.567 3.497 3.497s-1.567 3.497-3.497 3.497c-1.861 0-3.385-1.457-3.491-3.292zm-10.012-2.481v4.271c0 .48.612.688 1.017.294l3.534-3.437-4.551-1.128zm13.503 1.026c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm1.497-9.25l-17.483-.003 2.454 5.367c.256.561.756.972 1.356 1.114l6.593 1.571c.805.192 1.644-.132 2.112-.814l4.968-7.235zm-10-1.003h-5v-2h5v2zm6 0h-5v-2h5v2zm-3-3h-5v-2h5v2z"/></svg>
                                        </div>
                                        <div className="mx-5">
                                            <h4 className="text-2xl font-semibold text-gray-700">172</h4>
                                            <div className="text-gray-500">Totale orders </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                        <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M6 2h12c1.1 0 2 .9 2 2v3.32c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2ZM4 10.32v1.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61v-1.56c0-.55-.45-1-1-1H5c-.55 0-1 .44-1 1Z" fill="#FF8A65"></path></svg>
                                        </div>
                                        <div className="mx-5">
                                            <h4 className="text-2xl font-semibold text-gray-700">6389</h4>
                                            <div className="text-gray-500">Total Details </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-center">
                                <span className="font-light text-gray-600">Cars</span>
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