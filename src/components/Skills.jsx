import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import TechnicalWriting from "../assets/technicalwriter.png";
import Wordpress from "../assets/Wordpress.png";
import Firebase from "../assets/firebase.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div>
        <div>
          <p> Experience</p>
          <p> These are the technologies I have worked with</p>
        </div>

        <div>
          <div>
            <img src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
