import React from "react";

function Solutions() {
  return (
    <div className='flex flex-col md:flex-row bg-gray-800 z-0'>
      <div>
        {" "}
        <span className='md:text-8xl  z-1 top-0 md:relative text-center h-full flex items-center text-white'>
          <p className='font-bold '>OUR IT SOLUTIONS</p>
        </span>
      </div>
      <>
        <p className=' md:hidden bg-gray-800 w-full text-center flex items-center justify-center text-6xl font-bold text-white h-64 absolute z-40 '>
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
