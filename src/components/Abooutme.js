import React from "react";

const Abooutme = () => {
  return (
    <div className="bg-[#10173E] mx-16  h-[100vh] grid grid-cols-12 gap-2 ">
      <div className="col-span-6  h-[50%] relative top-[25%] ">
        <p className="text-white hover-text-blue-200 text-poppins text-[60px] font-normal">
          Hi, I'm Widya
        </p>
        <p className="text-white hover-text-blue-200 text-poppins text-[60px] font-normal">
          Web Developer
        </p>
        <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-gray-500">
          Frontend Developer
        </p>
      </div>
      <div className="col-span-6 h-[200vh] top-[25%]  relative">
        <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-white mb-4">
          Problem solver, well-organised person, loyal employee with high
          attention to detail.
        </p>
        <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-white">
          Interested in all frontend developer and working on ambitious projects
          with interesting people.
        </p>
      </div>
    </div>
  );
};

export default Abooutme;
