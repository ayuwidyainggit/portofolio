import React from "react";
import reactjs from "../../src/assets/resct_js.png";
import css from "../../src/assets/css-3.png";
import tailwind from "../../src/assets/tailwind_css.png";
import bootstrap from "../../src/assets/bootstrap.png";
import materialui from "../../src/assets/mui.png";
import reduxReact from "../../src/assets/redux.svg";

const Skill = () => {
  return (
    <div className="bg-[#10173E]   h-[100vh] grid grid-cols-12  ">
      <div className="col-span-full mt-[15rem] text-center h-[200px]">
        <p className="text-white hover-text-blue-200 text-poppins text-[60px] font-normal">
          Skills
        </p>

        <div className=" w-[80%] relative left-[10%] grid grid-cols-6 mt-4">
          <div className="text-center">
            <div className="flex justify-center">
              <img src={reactjs} alt="" className="w-[80px] h-[80px]" />
            </div>
            <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-white mb-4">
              React Js
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <img src={reduxReact} alt="" className="w-[80px] h-[80px]" />
            </div>
            <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-white mb-4">
              Redux
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <img src={tailwind} alt="" className="w-[80px] h-[80px]" />
            </div>
            <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-white mb-4">
              Tailwind Css
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <img src={css} alt="" className="w-[80px] h-[80px]" />
            </div>
            <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-white mb-4">
              CSS
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <img src={materialui} alt="" className="w-[80px] h-[80px]" />
            </div>
            <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-white mb-4">
              Material UI
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <img src={bootstrap} alt="" className="w-[80px] h-[80px]" />
            </div>
            <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-white mb-4">
              Bootstrap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
