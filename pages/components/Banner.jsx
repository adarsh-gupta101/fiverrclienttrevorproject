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
    const element = boxRef.current;

    gsap.fromTo(boxRef.current, {x:30, y:90,opacity:0 },{x:0,y:0,opacity:1,duration:1,scrollTrigger:{
      trigger:boxRef.current,
      // scrub:1
    }});
    gsap.fromTo(ptagref.current, {x:-30, y:-90 },{x:0,y:0,scrollTrigger:{
      trigger:boxRef.current,
      scrub:true
    }});
    gsap.fromTo("#svg", {y:205,opacity:0 },{y:0,opacity:1,duration:1.5,},{
      scrub:true,
    });
  });
  return (
    <div className=' w-full flex flex-col-reverse md:flex-row md:justify-center md:items-center bg-blue-100' style={{fontFamily:"poppins"}}>
      <div className='flex-col  top-0    '>
        <img alt="" src='/assets/header1.png' className='w-full h-full relative '></img>
        <img alt="" src="/assets/headerrectangle.png" id="svg" className="w-2/5 ml-8 hidden md:flex h-90 absolute top-0 left-0 overflow-hidden "></img >
      </div>
      <h1 className='text-4xl p-2 md:p-0 md:text-8xl w-2/3 font-semibold text-[#b3b60f] ' ref={boxRef}>
        WE&apos;RE HUMANS & IT EXPERTS
      </h1>
      <p ref={ptagref}className='hidden md:block absolute right-0 bottom-12 w-48 text-black]'>
        Everywhere in Canada, ITI makes IT accessible to free up businesses to
        change and improve their competitiveness.
      </p>
      <div className="health h-12"></div>
    </div>
  );
}

export default Banner;
