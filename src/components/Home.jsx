import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#64ffda]">Hi, my name is</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#ccd6f6]">
          Nnamdi Solomon Adibe
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p>
          Full Stack Developer passionate about crafting seamless digital
          experiences. Expertise in HTML, CSS, JavaScript, React.js, Node.js,
          and more. Committed to innovation, continuous learning, and delivering
          exceptional results. Let's build something amazing together!
        </p>
        <button>
          View Work <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
