import React, { useState } from "react";
import coffee from "../assets/coffeeshop.png";
import vibex from "../assets/Vibex.png";
import saas from "../assets/saas.png";
import khadijah from "../assets/khadijah_market.png";
import khadijah_adm from "../assets/khadijah_web.png";
import lppd_adm from "../assets/LPPD_adm.png";
import LPPD_web from "../assets/LPPD_web.png";
import { Link } from "react-router-dom";

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: coffee,
      title: "Website Coffee Shop",
      content:
        "coffee shop website is an online platform created by a coffee establishment to showcase its offerings, services, and ambiance to a virtual audience",
      built: "React js, CSS",
      url: "https://ayuwidyainggit.github.io/WebsiteCoffeshop/",
    },
    {
      image: saas,
      title: "SAAS",
      content: "",
      built: "Build your audience and your brand",
      url: "https://ayuwidyainggit.github.io/frontend-mysaas/",
    },
    {
      image: vibex,
      title: "Vibex",
      content:
        "Vibe x is an e-commerce website, where customers can view items, add items, edit items, and delete items",
      built: "React js, Tailwind CSS, Axios, Context for managing state",
      url: "https://ayuwidyainggit.github.io/Website-ecommerce",
    },
    {
      image: khadijah,
      title: "Khadijah Market",
      content:
        "I  built a website for customers, customers can view products, add to cart, and checkout products. Then I built a web application for the store admin and for admin members using Reactjs and Tailwind CSS",
      built: "React js, CSS, Tailwind CSS, Context",
      url: "",
    },
    {
      image: khadijah_adm,
      title: "Admin Khadijah Market",
      content:
        "  built a website for customers, customers can view products, add to cart, and checkout products. Then I built a web application for the store admin and for admin members using Reactjs and Tailwind CSS",
      built: "React js, CSS, Tailwind CSS, Context",
      url: "",
    },
    {
      image: lppd_adm,
      title: "Website Tapemansel LPPD",
      content:
        "LPPD web contains articles, services, articles, and other information",
      built: "React js, Tailwind CSS, Material UI, Redux, Redux Thunk",
      url: "",
    },
    {
      image: LPPD_web,
      title: "Admin Tapemansel LPPD",
      content:
        "The LPPD contains Macro Performance Achievements, Performance of Local Government Affairs, Local Government Performance Accountability and Implementation of Minimum Service Standards (MSS) which are contained in the suitability of the material.",
      built: "React js, Tailwind CSS, Material UI, Redux, Redux Thunk",
      url: "",
    },
  ];

  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-[#10173E] h-[100vh] grid grid-cols-12 px-[5rem]  ">
      <div className="col-span-12 relative  grid place-items-center">
        <div className="grid grid-cols-12 ">
          <div className="col-span-5">
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-[600px]  "
            />
          </div>
          <div className="col-span-7  top-0 left-8 right-0 bottom-0 text-white relative">
            <div className="">
              <h1 className="text-4xl font-bold mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-white mb-4">
                {slides[currentSlide].content}
              </p>

              <p className="text-white  hover-text-blue-200 text-poppins text-[20px] font-normal text-white mb-4">
                {slides[currentSlide].built}
              </p>
              <Link to={`${slides[currentSlide].url}`}>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 py-2 px-4 text-white rounded-full ">
                  Visit the app
                </button>
              </Link>

              {/* Add more content elements as needed */}
            </div>
          </div>
        </div>

        <div className=" absolute bottom-20 left-1/2  transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleBulletClick(index)}
              className={`w-4 h-4 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
