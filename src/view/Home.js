import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Skill from "../components/Skill";
import Project from "../components/Project";

const Home = () => {
  return (
    <div>
      <div className="bg-[#10173E] overflow-x-hidden">
        <div className="relative z-10">
          <Navbar />
        </div>
        <div className="pt-[5rem] ">
          <Jumbotron />
          <Skill />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Home;
