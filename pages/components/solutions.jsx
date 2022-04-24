import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Solutions() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".itsol"),
      {
rotate:25      },
      {
        rotate: -25,
        scrollTrigger: {
          trigger: (element),
          start: "top center",
          scrub: true,
        },
      }
    );})

  return (

    <div ref={ref}className='flex flex-col md:flex-row bg-gray-800 z-0'>
      <div>
        {" "}
        <span className='md:text-8xl  z-1 top-0 md:relative text-center h-full flex items-center text-white'>
          <p className='itsol font-bold text-[#e4e71c]'>OUR IT SOLUTIONS</p>
        </span>
      </div>
      <>
        <p className=' md:hidden bg-gray-800 w-full text-center flex items-center justify-center text-6xl font-bold text-[#e4e71c] h-64 absolute z-40 '>
          OUR IT SOLUTIONS
        </p>

        <img
          src='assets/solutions-ti_bg.jpg'
          style={{ height: "99vh" }}
          className='-z-1 relative'
        />
      </>
    </div>
  );
}

export default Solutions;
