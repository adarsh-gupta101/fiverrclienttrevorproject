import React,{useEffect, useRef} from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import meeting from "../../public/assets/meeting.jpg";
import inus from "./industries.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Industries() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#advicehead"),
      {
        y: 0,
        zoom:1.3

      },
      {
        y: -10,
        opacity:1,
        rotate:0,
        zoom:1,
        maxHeight:20,
        duration:1.5,
        scrollTrigger: {
          trigger: element.querySelector("#advicehead"),
          start: "top center",
          scrub:true
        },
      },
      gsap.fromTo(
        element.querySelector("#slider"),
        {
        opacity:0
  
        },
        {
          opacity:1,
          scrollTrigger: {
            trigger: element.querySelector("#slider"),
            start: "top center",
          },
        }
      
    ))
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div  ref={ref} className=' indus md:p-12' style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>

      <p className='text-4xl mt-12 text-center md:text-left md:text-2xl text-gray-500 p-2 md:p-0'>Industries</p>

      <h1 id="advicehead" className=' p-2 md:p-0 text-5xl flex items-center text-center m-auto md:text-8xl md:w-11/12 font-bold' style={{height:"100vh"}}>
        WE ADVISE MORE THAN 1500 COMPANIES FROM ALL SECTORS
      </h1>

      <Slider {...settings} id="slider">
        {inus.map((item, index) => (
          <div key={index} id="sliderdiv" className='shadow-lg m-1 hover:shadow-sm md:m-2 p-8 md:p-16 '>
            <img alt="" src={item.image} className='w-full h-full'></img>
            <p className='bg-white shadow-xl w-fit p-2 text-xl rounded relative -top-4 left-1/2 hover:bg-blue-700 hover:text-white'>
              View Industry
            </p>
            <p className='text-xl font-semibold'>{item.name}</p>
            <p className="font-medium">{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Industries;
