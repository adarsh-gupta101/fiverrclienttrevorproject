import React, { useEffect, useRef } from "react";
import Image from "next/image";
import header1 from "../../public/assets/header1.png";
import gsap  from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


function Banner() {
  const boxRef = useRef();
  const ptagref = useRef();

  useEffect(() => {
    gsap.fromTo(boxRef.current, {x:30, y:90 },{x:0,y:0,duration:1,scrollTrigger:{
      trigger:boxRef.current,
    }});
    gsap.fromTo(ptagref.current, {x:-30, y:-90 },{x:0,y:0,scrollTrigger:{
      trigger:boxRef.current,
    }});
  });
  return (
    <div className=' w-full flex flex-col-reverse md:flex-row md:justify-center md:items-center bg-green-100' style={{fontFamily:"poppins"}}>
      <div className='flex-col  top-0    '>
        <img src='/assets/header1.png' className='w-full h-full '></img>
        {/* <img src="/assets/headerrectangle.svg"  className="w-3/4 h-3/4  "></img> */}
      </div>
      <h1 className='text-4xl p-2 md:p-0 md:text-8xl w-2/3 font-semibold ' ref={boxRef}>
        WE&apos;RE HUMANS & IT EXPERTS
      </h1>
      <p ref={ptagref}className='hidden md:block absolute right-0 bottom-12 w-48'>
        Everywhere in Canada, ITI makes IT accessible to free up businesses to
        change and improve their competitiveness.
      </p>
    </div>
  );
}

export default Banner;
