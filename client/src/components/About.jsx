import React from 'react'

export default function About() {
  return (
    <div>
        
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex flex-col lg:flex-row justify-between gap-8">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p class="font-normal text-base leading-6 text-gray-600">Le HUV présente la particularité de proposer des réservoirs à hydrogène interchangeables. Six réservoirs d'hydrogène interchangeables s'ajoutent au réservoir principal et permettent de bénéficier d'une autonomie de 800 kilomètres. Ce système permet d'échanger facilement les six réservoirs amovibles dans une station sans faire le « plein » du réservoir principal, les stations-service pour l'hydrogène étant peu répandues</p>
                </div>
                <div class="w-full lg:w-8/12">
                    <img class="w-full h-full rounded-lg" src={process.env.PUBLIC_URL+"assets/car1.jpg"} alt=""  />
                </div>
            </div>
    
            <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">Our Story</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 ">Le NamX HUV (Hydrogen Utility Vehicle), fruit de plus de 4 ans de développement, est le premier SUV premium à hydrogène avec système de stockage hybride et amovible. Un véhicule qui se veut plus respectueux de l’environnement que l’électrique, dont NamX déplore les aspects négatifs. À savoir le recyclage incertain des batteries, ou encore les moyens destructeurs liés à l’extraction des ressources nécessaires. Le plus grand défi est de ce fait de limiter le réchauffement climatique, sans sacrifier la mobilité. De sauvegarder la planète, tout en continuant le développement. NamX est un projet afro-européen réunissant « les meilleurs partenaires industriels et techniques d’Europe et d’Afrique ».</p>
                </div>
                <div class="w-full lg:w-8/12 lg:pt-8">
                    <div class="grid md:grid-cols-3 sm:grid-cols-3 lg:gap- shadow-lg rounded-md">
                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden rounded-lg" src={process.env.PUBLIC_URL+"assets/kamal.jpg"} alt="" />
                            <p class="font-medium text-xl leading-5 text-gray-800 mt-4">RHRABLA Kamal</p>
                        </div>
                        <div class="p-4 pb-6  flex justify-center flex-col items-center">
                            <img class="md:block hidden rounded-lg" src={process.env.PUBLIC_URL+"assets/nadia.jpg"} alt="" />
                            <p class="font-medium text-xl leading-5 text-gray-800 mt-4">ELHADRI Nadia</p>
                        </div>
                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden rounded-lg" src={process.env.PUBLIC_URL+"assets/Touti.jpg"} alt="" />
                            <p class="font-medium text-xl leading-5 text-gray-800 mt-4">TOUTI Yassine</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}
