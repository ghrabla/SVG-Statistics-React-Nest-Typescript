import React from 'react'
import NavBar from '../components/NavBar';
import {useState} from 'react';
import axios from 'axios';
function Register() {
  const [formdata,setformdata] = useState({
    fullname : '',
    email: '',
    password: ''
  });
  const {fullname, email, password} = formdata;
  const onChange = (e) => {
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const register = async (e)=>{
    e.preventDefault()
    const userData = {
      fullname,
      email,
      password,
    }
    const res = await axios.post("http://localhost:9000/clients/register",userData);
    let loggedin = JSON.stringify(res.data);
    localStorage.setItem("user",loggedin);
    
  }

  return (
    <>
    <NavBar/>
 <div class="relative flex h-full w-full">
  <div class="h-screen w-full bg-black">
    <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
      <div>
        <p class="text-2xl">Register|</p>
      </div>
      <div>
        <fieldset class="border-t border-solid border-gray-600">
          <legend class="mx-auto px-2 text-center text-sm">register via our secure system</legend>
        </fieldset>
      </div>
      <div class="mt-10">
        <form onSubmit={register}>
          <div>
            <label class="mb-2.5 block font-extrabold" for="fullname">fullname</label>
            <input id="fullname" name='fullname' value={fullname} type="text" class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="kamal ghrabla" onChange={onChange}/>
          </div>
          <div class="mt-4">
            <label class="mb-2.5 block font-extrabold" for="email">Email</label>
            <input id="email" name='email' value={email} type="email" class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="kamalghrabla@gmail.com" onChange={onChange}/>
          </div>
          <div class="mt-4">
            <label class="mb-2.5 block font-extrabold" for="password">Password</label>
            <input id="password" name='password' value={password} type="password" class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" onChange={onChange}/>
          </div>
          <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
            <div><input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm">Remember me</label></div>
            
          </div>
          <div class="my-10">
            <button class="w-full rounded bg-green-700 p-2 hover:bg-green-900">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="h-screen w-1/2 bg-blue-600 lg:block md:block hidden">
    <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" class="h-full w-full" />
  </div>
</div>
    </>

  );
}
export default Register;