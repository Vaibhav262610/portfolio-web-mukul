import React from "react";
import {
  FaAngleDown,
  FaBehance,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const HeroSection = () => {
  return (
    <>
      {/* <PreLoader /> */}
      <div
        id="heroSection"
        className="flex w-full h-screen justify-center items-end"
      >
        <div className=" w-11/12 max-w-11/12 bg-gray-100 h-[95vh] flex-col flex items-center  justify-between rounded-3xl ">
          <div className=" w-full max-w-11/12 px-12 mt-6">
            <div className="flex items-center justify-between leading-5">
              <div className="">
                <h1 className="font-medium">Vaibhav Rajpoot</h1>
                <h1 className="font-light text-xs">
                  Product designer & developer
                </h1>
              </div>
              <div>
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nw2Bq7phoPjmm-sT7FyVaOaHyrlp6iqzyg&s"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-5">
                {/* <a href="#projects"> */}
                <h1 className="font-normal text-sm ">Download CV</h1>
                {/* </a> */}
                <h1 className="font-normal text-sm underline">
                  Request a project
                </h1>
                <IoMenu className="text-3xl" />
              </div>
            </div>
          </div>
          <div className="flex gap-6 flex-col justify-center items-center">
            <h1 className="text-5xl main-heading font-semibold leading-tight">
              Quality design & web <br /> development synergy
            </h1>
            <h2 className="text-xl text-gray-700 w-[42rem] text-center">
              I create intuitive design for websites and apps, helping
              businesses enhance user experience, boost key metrics and achieve
              digital leadership
            </h2>
          </div>
          {/* <div className="flex items-end justify-between px-12 w-full ">
            <div className="flex ">
              <div className="flex mb-8 flex-col text-gray-400 gap-5 opacity-80">
                <h1 className="w-[15rem] text-sm font-light">
                  Digital marketing and research Corporate web development Apps
                  and complex systems design
                </h1>
                <div className="flex gap-6 items-center ">
                  <FaTelegramPlane className="hover:text-yellow-500 duration-200 transition-all ease-in-out text-xl" />
                  <FaLinkedinIn className="hover:text-yellow-500 duration-200 transition-all ease-in-out text-xl" />
                  <FaBehance className="hover:text-yellow-500 duration-200 transition-all ease-in-out text-2xl" />
                </div>
              </div>
            </div>
            <div className="mb-12 hover-target">
              <FaAngleDown className="text-gray-500 ml-12" />
            </div>
            <div>
              <ul className="rounded-xl px-4 py-4 bg-white flex  gap-6 text-sm font-light">
                <li>Projects</li>
                <li>Service & Pricing</li>
                <li>About me</li>
                <li className="">
                  <div>
                    <h1>Contact</h1>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
