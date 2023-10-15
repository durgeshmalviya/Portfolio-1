import React from "react";
import resumePDF from "../../assets/Resume.pdf";
import { FiDownload } from "react-icons/fi";
const Resume = () => {
  return (
   <>
   <div id="resume" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Resume</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div
          className="left flex-1 flex items-center justify-center"
          style={{ textAlign: "center" }}
        >
          <fieldset
            data-aos="zoom-in"
            className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold hover:text-yellow-500"
              download
              style={{ justifyContent: "center" ,border:'1px solid pink'}}
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </fieldset>
        </div>
      </div>
    </div>
   </>
  );
};

export default Resume;
