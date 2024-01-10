import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../../src/assets/coding.png";
import ayu from "../../src/assets/ayu.jpeg";

const Jumbotron = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#10173E] h-[150vh] grid grid-cols-12 gap-2 relative mt-[6rem]">
      <div className="col-span-12 md:col-span-7 relative h-[70%] pl-24 pt-20">
        <div
          className={`transform transition-transform ease-in-out duration-500 ${
            scrollY > 100 ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <p className="text-white font-extrabold hover-text-blue-200  text-poppins text-[60px] animate-pulse">
            Ayu Widya Inggit
          </p>
          <p className="text-white font-normal hover-text-blue-200 text-poppins italic text-[18px]">
            Frontend Developer
          </p>
          <div className="text-[#D5D6DA] font-extrabold hover-text-blue-200 text-poppins my-4">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 py-2 px-4 text-white rounded-full ">
              About Me
            </button>
          </div>
          <div className="w-[15%] flex justify-between mt-4">
            <LinkedInIcon style={{ color: "white", fontSize: "40px" }} />
            <GitHubIcon style={{ color: "white", fontSize: "40px" }} />
            <WhatsAppIcon style={{ color: "white", fontSize: "40px" }} />
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-5 h-[70%] relative">
        <img
          src={logo}
          alt=""
          className={`w-[700px]  transform transition-transform ease-in-out duration-500 ${
            scrollY > 100 ? " translate-x-full" : "translate-x-0"
          }`}
          style={{
            animationIterationCount: "1.5",
          }}
        />
      </div>
      <div className="col-span-12  ">
        <div className="col-span-12   flex justify-center">
          <img
            src={ayu}
            alt=""
            className={`w-[200px] h-[200px] rounded-full  transform transition-transform ease-in-out duration-500 ${
              scrollY > 100 ? " -translate-y-2" : " translate-y-full"
            }
          }`}
            style={{
              animationIterationCount: "1.5",
            }}
          />
        </div>
        <div
          className={`${
            scrollY > 100 ? " -translate-y-2" : " translate-y-full"
          }`}
        >
          <p className="text-white text-center font-normal hover-text-blue-200 text-poppins italic text-[18px]">
            Hi, I'm Frontend Developer
          </p>
          <p className="text-white text-center hover-text-blue-200 text-poppins text-[20px] font-normal text-white mb-4">
            Problem solver, well-organised person, loyal employee with high
            attention to detail.
          </p>
          <p className="text-white text-center hover-text-blue-200 text-poppins text-[20px] font-normal text-white">
            Interested in all frontend developer and working on ambitious
            projects with interesting people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
