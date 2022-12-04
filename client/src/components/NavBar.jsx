import React,{useState} from 'react';
import {Link} from "react-router-dom";

function NavBar() {

   const [active,setActive] = useState(false);
   const shownav = ()=>{
       setActive(!active)
   }

  return(
      
<nav class="p-3 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button onClick={shownav} data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class={active ? "w-full block md:block md:w-auto" : "hidden lg:block md:block"} id="navbar-solid-bg">
      <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <Link path="home" to="/">
          <a href="#" class="block py-2 px-3 text-white rounded  md:text-blue-700 md:p-0 md:dark:text-white">Home</a>
          </Link>
        </li>
        <li>
        <Link path="Register" to="/Register">
          <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-700  md:border-0  md:p-0 dark:text-gray-400">Register</a>
          </Link>
        </li>
        <li>
        <Link path="Login" to="/login">
          <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-700  md:border-0  md:p-0 dark:text-gray-400">Login</a>
          </Link>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-700  md:border-0  md:p-0 dark:text-gray-400">Products</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
  
}
export default NavBar;
