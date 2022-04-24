import React from "react";

function Footer() {
  return (
    <div className='bg-gray-800 text-white flex flex-col md:flex-row justify-evenly px-8 md:px-32 py-32'>
      <div className='text-4xl font-semibold '>OUR INSIGHTS TO YOUR INBOX.</div>
      <div className='flex flex-col md:flex-row flex-wrap justify-evenly'>
        <ul className='bg-red flex flex-col md:flex-row items-center'>
          <li className='p-2 mb-8'>IT Solutions</li>
          <li className='p-2 mb-8'>IT Solutions</li>
          <li className='p-2 mb-8'>HUMAN Solutions</li>
          <li className='p-2 mb-8'>IT Solutions</li>
          <li className='p-2 mb-8'>IT Solutions</li>
          <li className='p-2 mb-8'>IT Solutions</li>
        </ul>

        <div>
          <p className='font-semibold text-lg text-center mt-8 text-blue-300'>Other Links</p>
          <p className='p-0 my-2  text-center'>Online Catalog</p>
          <p className='p-0 my-2  text-center'>My Account</p>
          <p className='p-0 my-2  text-center'> Contact</p>
          <p className='p-0 my-2  text-center'> Terms & Conditions</p>
        </div>

        <div>
          <p className='font-semibold text-lg text-blue-300 text-center mt-8'>
            Industries
          </p>
          <p className='p-0 my-2  text-center'>Online Catalog</p>
          <p className='p-0 my-2  text-center'>My Account</p>
          <p className='p-0 my-2  text-center'> Contact</p>
          <p className='p-0 my-2  text-center'> Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
