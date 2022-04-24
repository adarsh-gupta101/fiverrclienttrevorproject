import React from "react";
import About from "./components/about";
import Certifications from "./components/Certifications";
import Footer from "./components/footer";
import Header from "./components/header";
import Solutions2 from "./components/solutions";
import Solutionsdrop from "./components/Solutionsdrop";

function ITS() {
  return (
    <div>
      <Header />
      <Solutions2></Solutions2>
      {/* <Solutionscontainer/> */}
      <Solutionsdrop/>

      {/* <Certifications/> */}
      {/* <About/> */}

      <Footer />
    </div>
  );
}

export default ITS;
