import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import About from "./components/about";
import Banner from "./components/Banner";
import Certifications from "./components/Certifications";
import Footer from "./components/footer";
import Header from "./components/header";
import Industries from "./components/industries";
import industries from "./components/industries";
import Solutions from "./components/solutions";
import Solutionsdrop from "./components/Solutionsdrop";
import Solutionsdrop2 from "./components/solutiondrop2";
import Solutions2 from "./components/solutions2";

export default function Home() {
  return (
    <div className='bg-gray-50' style={{fontFamily:"poppins",width:"100%",overflow:"hidden",scrollBehavior:"smooth"}} >
      <Head>
 
      </Head>
      <Header></Header>
      <Banner />
      <Industries />
      <About/>
      <Solutions/>
      <Solutionsdrop/>

      <Solutions2/>
      <Solutionsdrop2/>
      <Certifications/>
      <Footer/>
    </div>
  );
}
