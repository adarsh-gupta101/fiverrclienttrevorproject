import Hamburger from 'hamburger-react'
import React, { useState } from 'react'

function Induvidualsolution({item}) {
    const [isOpen, setOpen] = useState(false);
    // console.log(item)

  return (
    <div className='p-8 border-b '>

<div className=' flex justify-between '>
<h1 className='text-3xl'>{item?.name}</h1>
<Hamburger toggled={isOpen} toggle={setOpen} className="animate-ping" />
</div>
<div className="flex flex-col md:flex-row justify-between items-end ease">
<div>
<p className={isOpen ? `text-sm mt-8 w-64  ` : `hidden`}>
{" "}
{item?.description}
</p>
<button className={isOpen?'bg-blue-500 text-white p-2 mt-12':"hidden"}>
{" "}
View Services
</button>
</div>
<>
<img alt=""
src={item?.image}
className={isOpen ? "md:w-3/5 mt-12" : "hidden"}
/>
</>
</div>
</div>  )
}

export default Induvidualsolution