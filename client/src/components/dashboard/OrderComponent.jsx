import React from "react";
// cree un tableau de commande bien stilé avec tailwind



const OrderComponent = () => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden"></div>
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded my-6"></div>
                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Order</th>
                                <th className="py-3 px-6 text-left">Date</th>
                                <th className="py-3 px-6 text-center">Status</th>
                                <th className="py-3 px-6 text-center">Amount</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span className="font-medium">Order #1</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span>12/10/2020</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span>$ 1,200</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 3v4h4" />
                                                <path d="M19 20v-13a2 2 0 0 0 -2 -2h-13l-3 3v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2z" />
                                                <path d="M16 3.13a2 2 0 0 1 2.867 2.867l-11.13 11.13l-4.133 -.867l.867 -4.133z" />
                                            </svg>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                <path d="M5 7v-2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2" />
                                                <path d="M10 11v6m4 -6v6" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span className="font-medium">Order #2</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span>12/10/2020</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span>$ 1,200</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 3v4h4" />
                                                <path d="M19 20v-13a2 2 0 0 0 -2 -2h-13l-3 3v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2z" />
                                                <path d="M16 3.13a2 2 0 0 1 2.867 2.867l-11.13 11.13l-4.133 -.867l.867 -4.133z" />
                                            </svg>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                <path d="M5 7v-2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2" />
                                                <path d="M10 11v6m4 -6v6" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span className="font-medium">Order #2</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span>12/10/2020</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span>$ 1,200</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 3v4h4" />
                                                <path d="M19 20v-13a2 2 0 0 0 -2 -2h-13l-3 3v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2z" />
                                                <path d="M16 3.13a2 2 0 0 1 2.867 2.867l-11.13 11.13l-4.133 -.867l.867 -4.133z" />
                                            </svg>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                <path d="M5 7v-2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2" />
                                                <path d="M10 11v6m4 -6v6" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span className="font-medium">Order #2</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span>12/10/2020</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span>$ 1,200</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 3v4h4" />
                                                <path d="M19 20v-13a2 2 0 0 0 -2 -2h-13l-3 3v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2z" />
                                                <path d="M16 3.13a2 2 0 0 1 2.867 2.867l-11.13 11.13l-4.133 -.867l.867 -4.133z" />
                                            </svg>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                <path d="M5 7v-2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2" />
                                                <path d="M10 11v6m4 -6v6" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
             </div>
        </div>
    
    

        
    );
    };

export default OrderComponent;
