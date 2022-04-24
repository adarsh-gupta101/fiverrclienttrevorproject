import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Solutions2() {
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
    <div ref={ref} className='flex flex-col md:flex-row bg-gray-800 z-0'>
      <div>
        {" "}
        <span className='md:text-8xl  z-1 top-0 md:relative text-center h-full flex items-center text-white'>
          <p className='font-bold itsol '>OUR HUMAN SOLUTIONS</p>
        </span>
      </div>
      <>
        <p className='  md:hidden bg-gray-800 w-full text-center flex items-center justify-center text-6xl font-bold text-white h-60 absolute z-40 '>
          OUR HUMAN SOLUTIONS
        </p>

        <img alt=""
          src='https://iti.ca/themes/iti/assets/images/static/solutions-human_bg.jpg'
          style={{ height: "99vh",objectFit:"fill" }}
          className='-z-1 relative'
        />
      </>    </div>
  );
}

export default Solutions2;
