import { useState,useEffect } from "react";
const imageArray = ['assets/NAMX-01.jpg','assets/NAMX-02.jpg', 'assets/NAMX-03.jpg', 'assets/NAMX-04.jpg','assets/NAMX-05.jpg', 'assets/NAMX-06.jpg' ,'assets/NAMX-07.jpg', 'assets/NAMX-08.jpg','assets/NAMX-09.jpg'];

function Imgslide(){
    const [count, setCount] = useState(0);
    
  // Save timer ref and return cleanup function to clear it
  useEffect(() => {
    const timerId = setInterval(() => {
      // Use a functional state update to correctly increment the count
      setCount(count => count + 1);

    }, 1500);



    return () => clearInterval(timerId);
  }, []);

  // `image` is derived state from the image array and current count
  // Take the count mod array length to get the correct computed index
  const image = imageArray[count % imageArray.length];

    return (
        <div  className="lg:w-1/2 md:w-full sm:w-full">
            <img name="slide"  class="w-full h-full rounded-lg"  src={image}/>
        </div>
    );
}

export default Imgslide;