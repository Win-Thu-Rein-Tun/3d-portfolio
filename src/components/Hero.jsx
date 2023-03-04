import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full relative h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} mt-2 text-white-100`}>
            Hi, I'm&nbsp;
            <span className="text-[#915eff] hidden ss:inline-block">
              Sun D Shine
            </span>
            <span className="text-[#915eff] ss:hidden">S.D.S</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            Transforming Your Ideas into <br className="sm:block hidden" />
            Fully Functional Websites & Mobile Application
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  );
};

export default Hero;
