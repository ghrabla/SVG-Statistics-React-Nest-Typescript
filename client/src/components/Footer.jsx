import React from "react";
function Footer(){
return (
<footer class="relative bg-[#193d3d] pt-8 pb-6 ">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-gray-100">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-gray-100">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-instagram"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-facebook-square"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-linkedin"></i></button><button class="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-gray-100 text-sm font-semibold mb-2">Useful Links</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-black hover:text-green-800 font-semibold block pb-2 text-sm" href="/">About Us</a>
              </li>
              <li>
                <a class="text-black hover:text-green-800 font-semibold block pb-2 text-sm" href="/">Blog</a>
              </li>
              <li>
                <a class="text-black hover:text-green-800 font-semibold block pb-2 text-sm" href="/">Github</a>
              </li>
              <li>
                <a class="text-black hover:text-green-800 font-semibold block pb-2 text-sm" href="/">Free Products</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-gray-100 text-sm font-semibold mb-2">Resources</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-black hover:text-green-800 font-semibold block pb-2 text-sm" href="/">MIT License</a>
              </li>
              <li>
                <a class="text-black hover:text-green-800 font-semibold block pb-2 text-sm" href="/">Terms Conditions</a>
              </li>
              <li>
                <a class="text-black hover:text-green-800 font-semibold block pb-2 text-sm" href="/">Privacy Policy</a>
              </li>
              <li>
                <a class="text-black hover:text-green-800 font-semibold block pb-2 text-sm" href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300"/>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-gray-100 font-semibold py-1">
          Copyright © <span id="get-current-year">2022</span>
          <a href="/" class="text-blueGray-500 hover:text-[]" > Notus JS by </a>
          <a href="https://github.com/ghrabla/SVG-Statistics-React-Nest-Typescript.git" class="text-blueGray-500 hover:text-green-800">Homeland Crawlers</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
    );
}
export default Footer;