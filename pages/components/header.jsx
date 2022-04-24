import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import Link from 'next/link'
 
function Header() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
    <nav className='flex justify-between md:justify-evenly items-center h-16 p-2 sticky top-0 bg-white z-50' style={{fontFamily:"poppins"}}>
        <ul className='hidden md:flex w-3/4  justify-evenly'>
        <li><Link href="/ITS">IT Solutions</Link></li>
        <li><Link href="/Humans">Humans Solutions</Link></li>
        <li>Industries</li>
        <li>About Us</li>
        <li>Blog</li>
        <li> Careers </li>
        </ul>
    

        <p><Link href="/">Trends Online</Link></p>
        <div className='flex flex-col justify-evenly items-center md:hidden'>
        <Hamburger className="md:hidden" toggled={isOpen} toggle={setOpen} />
        </div>
      

    </nav>
    {isOpen?
    <ul className=' md:flex w-full  justify-evenly absolute z-50'>
         <li className='p-4 text-center font-semibold border-y bg-white'><Link href="/ITS">IT Solutions</Link></li>
         <li className='p-4 text-center font-semibold border-y bg-white'><Link href="/Humans">Humans Solutions</Link></li>
         <li className='p-4 text-center font-semibold border-y bg-white'>Industries</li>
         <li className='p-4 text-center font-semibold border-y bg-white'>About Us</li>
         <li className='p-4 text-center font-semibold border-y bg-white'>Blog</li>
         <li className='p-4 text-center font-semibold border-y bg-white'> Careers </li>
        </ul>:null}
    </div>
  )
}

export default Header