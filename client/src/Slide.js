import { useState,useEffect } from "react";
const imageArray = ['assets/NAMX-01.jpg','assets/NAMX-03.jpg','assets/NAMX-09.jpg'];

function Imgslide(){
    const [count, setCount] = useState(0);
    // function to slide images in div with class name "imageSlide" in About.jsx import the image from assets folder
    // var i = 2;
    // var time = 3000;
    // images[0] = 'assets/NAMX-01.jpg';
    // images[1] = 'assets/NAMX-02.jpg';
    // images[2] = 'assets/NAMX-03.jpg';
    // images[3] = 'assets/NAMX-04.jpg';
    // images[4] = 'assets/NAMX-05.jpg';
    // images[5] = 'assets/NAMX-06.jpg';
    // images[6] = 'assets/NAMX-07.jpg';
    // images[7] = 'assets/NAMX-08.jpg';
    // images[8] = 'assets/NAMX-09.jpg';

  // Save timer ref and return cleanup function to clear it
  useEffect(() => {
    const timerId = setInterval(() => {
      // Use a functional state update to correctly increment the count
      setCount(count => count + 1);
    }, 2000);

    return () => clearInterval(timerId);
  }, []);

  // `image` is derived state from the image array and current count
  // Take the count mod array length to get the correct computed index
  const image = imageArray[count % imageArray.length];

    return (
        <div class="lg:w-8/12" className="imageSlide">
            <img name="slide"  class="w-full h-full rounded-lg"  src={image}/>
        </div>
    );
}

export default Imgslide;