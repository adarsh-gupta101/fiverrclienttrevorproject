import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const ref = useRef(null);
  const adviceref = useRef(null);
  const Shaperef = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#first-paragraph"),
      {
        x: 0,
      },
      {
        x: 50,
        scrollTrigger: {
          trigger: element.querySelector("#first-paragraph"),
          start: "top center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#second"),
      {
        x: 50,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector("#first-paragraph"),
          start: "top center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#third"),
      {
        x: 50,
      },
      {
        x: 50,
        scrollTrigger: {
          trigger: element.querySelector("#first-paragraph"),
          start: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  // gsap.fromTo(underref.current, {x:30, y:90 },{x:0,y:0,duration:"100%"
  //     ,scrollTrigger:{
  //   trigger:Shaperef.current,
  //   start:"top center",
  // }});
  // gsap.fromTo(adviceref.current, {x:-30, y:-90 },{x:0,y:0,duration:1,scrollTrigger:{
  //   trigger:adviceref.current,
  // }});
  // gsap.fromTo(Shaperef.current, {x:-30, y:-90 },{x:0,y:0,scrollTrigger:{
  //     trigger:underref.current,
  //   }});

  //   },[]);
  return (
    <div ref={ref}>
      <div
        id='first-paragraph'
        className='first-paragraph text-4xl md:text-9xl p-8 font-bold flex items-center justify-evenly'>
        UNDERSTAND <p className='w-16 md:w-48 h-8 md:h-12 bg-yellow-400'></p>
      </div>
      <div
        id='second'
        ref={adviceref}
        className='text-4xl md:text-9xl p-8 font-bold  flex items-center justify-evenly'>
        <p className='w-16 md:w-48 h-8 md:h-12 bg-blue-400'></p>
        ADVISE
      </div>
      <div
        id='third'
        ref={Shaperef}
        className='text-4xl md:text-9xl p-8 font-bold flex items-center justify-evenly'>
        SHAPE
        <p className='w-16 md:w-48 h-8 md:h-12 bg-red-400'></p>
      </div>
      <div style={{ height: "fit-content" }} className='w-fit  md:w-72 m-16 md:m-24'>
        <p className='font-bold text-xl md:p-2'>
          IT made simple, at a human scale
        </p>
        <p style={{color:""}}>
          We support you in making your vision a reality and make your digital
          transformation the foundation of your growth.
        </p>
      </div>
    </div>
  );
}

export default About;
