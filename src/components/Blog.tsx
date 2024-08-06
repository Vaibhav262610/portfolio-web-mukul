import React from "react";
import { blogData } from "@/data/BlogData";
import { FaLongArrowAltRight } from "react-icons/fa";
const Blog = () => {
  return (
    <>
      <div id="contact" className="py-20 flex justify-center">
        <div className="flex justify-between w-[85rem]">
          <div>
            <h1 className="text-2xl font-medium mt-8">Blog</h1>
          </div>
          <div className="flex justify-between ">
            <div className="flex  ">
              {blogData.map((val) => {
                return (
                  <div
                    key={val.id}
                    className=" border rounded-xl py-4 px-2 flex gap-4 items-center"
                  >
                    <div className="w-40 rounded-xl h-40 overflow-hidden">
                      <img
                        src={val.img}
                        alt="Description"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="pr-12 flex flex-col gap-2">
                      <h1 className="text-xl w-[14rem] font-medium">
                        {val.title}
                      </h1>
                      <h2 className="w-[18rem] text-zinc-500">{val.desc}</h2>
                      <div className="flex w-fit py-1 px-4 bg-zinc-100 gap-2 rounded-full items-center">
                        <button>Read</button>
                        <FaLongArrowAltRight />
                      </div>
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

export default Blog;
