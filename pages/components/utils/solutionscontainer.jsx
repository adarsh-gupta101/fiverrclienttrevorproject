import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Json from "./solutionutils.json";
import Induvidualsolution from "./Induvidualsolution";

function Solutionscontainer() {
 

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
