import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Json from "./solutionutils.json";
import Induvidualsolution from "./Induvidualsolution";

function Solutionscontainer() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);

  return (
  

    <div className=' py-6 md:mx-24 bg-white '>
      { Json.map((item, index) => {
        return (

          <Induvidualsolution key={index} item={item}/>

        )})}
    </div>
  
  );
}

export default Solutionscontainer;
