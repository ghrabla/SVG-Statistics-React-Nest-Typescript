import React,{useState} from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginUser() {
  const navigate = useNavigate();
  const [formdata,setformdata] = useState({
    email: '',
    password: ''
  });
  const { email, password} = formdata;
  const onChange = (e) => {
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const Login = async (e)=>{
    e.preventDefault()
    const userData = {
      email,
      password,
    }
    const res = await axios.post("http://localhost:9000/clients/login",userData);
    if(res.data.message === 'password is not correct'){
      const notify = () => toast("password is not correct!");
      notify();
    }else if(res.data.message === 'no email such that'){
      const notify = () => toast("no email such that!");
      notify();
    }else{
      let loggedin = JSON.stringify(res.data);
      localStorage.setItem("user",loggedin);
      navigate('/')
      const notify = () => toast("your login is correct!");
      notify();
    }
    
  }
  return (
    <>
    <NavBar/>
    <ToastContainer />
 <div class=" flex w-full">
  <div class="w-full bg-black lg:mt-16 sm:mt-auto md:mt-auto">
    <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
      <div>
        <p class="text-2xl mt-5">Login|</p>
      </div>
      <div>
        <fieldset class="border-t border-solid border-gray-600">
          <legend class="mx-auto px-2 text-center text-sm">login via our secure system</legend>
        </fieldset>
      </div>
      <div class="mt-10">
        <form onSubmit={Login}>
          <div>
            <label class="mb-2.5 block font-extrabold" for="email">Email</label>
            <input type="email" id="email" name='email' value={email} onChange={onChange} class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mail@user.com" />
          </div>
          <div class="mt-4">
            <label class="mb-2.5 block font-extrabold" for="password">Password</label>
            <input type="password" id="password" name='password' value={password} onChange={onChange} class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
          </div>
          <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
            <div><input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm">Remember me</label></div>
            <div>
              <a href="#" class="text-sm hover:text-gray-200">Forgot password</a>
            </div>
          </div>
          <div class="my-10">
            <button class="w-full rounded bg-green-700 p-2 hover:bg-green-900">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="h-screen w-1/2 bg-blue-600 md:block lg:block hidden mt-5">
    <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" class="h-full w-full" />
  </div>
</div>
    </>

  );
}
export default LoginUser;