import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import React from "react";

const Hero = () => {
  return <section className=" w-full h-screen relative mx-auto">
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mxaut flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
        <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Swastik</span></h1>
         <p className={`${styles.heroSubText} mt-2 text-white`}>i develop 3d visuals, user <br className="sm:block hidden" /> interfaces and web applications</p>
      </div>
    </div>
    <ComputersCanvas/>
  </section>;

};

export default Hero;
