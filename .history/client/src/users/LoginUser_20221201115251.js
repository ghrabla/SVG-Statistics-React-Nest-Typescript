import React from 'react'
function LoginUser() {
  return (
<div class="relative flex h-full w-full">
  <div class="h-screen w-1/2 bg-black">
    <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
      <div>
        <p class="text-2xl">Login|</p>
      </div>
      <div>
        <fieldset class="border-t border-solid border-gray-600">
          <legend class="mx-auto px-2 text-center text-sm">login via our secure system</legend>
        </fieldset>
      </div>
      <div class="mt-10">
        <form>
          <div>
            <label class="mb-2.5 block font-extrabold" for="email">Email</label>
            <input type="email" id="email" class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mail@user.com" />
          </div>
          <div class="mt-4">
            <label class="mb-2.5 block font-extrabold" for="email">Password</label>
            <input type="password" id="email" class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
          </div>
          <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
            <div><input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm">Remember me</label></div>
            <div>
              <a href="#" class="text-sm hover:text-gray-200">Forgot password</a>
            </div>
          </div>
          <div class="my-10">
            <button class="w-full rounded-full bg-[#ea2845] p-5 hover:bg-[">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="h-screen w-1/2 bg-blue-600">
    <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" class="h-full w-full" />
  </div>
</div>
  );
}
export default LoginUser;