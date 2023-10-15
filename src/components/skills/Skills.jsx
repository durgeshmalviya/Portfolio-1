import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";
import {FaJava} from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import {SiPython } from "react-icons/si";

import {SiMaterialdesign } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
      
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
              <ProgressBar logo={<FaJava />} name={"Spring-Framework"} value={90} /> 
              <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={80} />
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
               
                <ProgressBar
                  logo={<SiMaterialdesign/>}
                  name={"Material Design"}
                  value={90}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiPython />}
                black={"black"}
                white={"white"}
                skill={"Python"}
              />
              <SkillBox
                className=""
                logo={
                  <FaJava/>
                }
                black={"black"}
                white={"white"}
                skill={"Java"}
              />
         <SkillBox
                className=""
                logo={
                  <SiSpring className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"black"}
                white={"white"}
                skill={"Spring-Boot"}
              /> 
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
         
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src="https://img.icons8.com/?size=100&id=12598&format=png"
            />
        
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=512&id=39858&format=png"
          />
          
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="
            https://img.icons8.com/?size=512&id=XPdRFanRZtNK&format=png"
          />
             <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="
            https://img.icons8.com/?size=512&id=EzPCiQUqWWEa&format=png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="
            https://img.icons8.com/?size=512&id=62452&format=png  "
          />
       

          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/>
        </div> 
      </div>
    </div>
  );
};

export default Skills;