import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { ServiceData } from "@/data/ServicesData";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="flex w-full h-screen justify-center items-end"
      >
        <div className="w-11/12 max-w-11/12 bg-gray-50 h-[95vh] flex-col flex items-center  justify-between rounded-3xl ">
          <div className=" flex justify-between py-20 w-[85rem]">
            <div className="">
              <h1 className="text-2xl font-medium">Services</h1>
            </div>
            <div className="grid grid-cols-2 grid-rows-2  gap-5">
              {ServiceData.map((val) => {
                return (
                  <div
                    key={val.id}
                    className=" flex bg-white duration-200 hover:bg-zinc-100 flex-col gap-2 py-4 w-[30rem] px-4 rounded-xl"
                  >
                    <div className="flex items-center gap-2  ">
                      <h1 className="text-xl font-medium">{val.title}</h1>
                      <img
                        src="https://static.tildacdn.com/tild6334-3166-4339-a464-373438643430/tools-design.svg"
                        alt=""
                      />
                    </div>
                    <p className="w-[22rem] text-sm font-light tracking-wide">
                      {val.desc}
                    </p>
                    <div className="flex justify-between text-sm text-zinc-400 ">
                      <h2>{val.subheading}</h2>
                      <h2>from {val.days} days</h2>
                    </div>
                    <div className="mt-4 flex items-center bg-zinc-100 text-black font-medium duration-200 hover:bg-black hover:text-white w-fit py-2 px-6 rounded-full">
                      <button>{val.button}</button>
                      <IoIosArrowForward />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
