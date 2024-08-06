import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div id="contact" className="py-20 flex justify-center">
        <div className="flex justify-between w-[85rem]">
          <div>
            <h1 className="text-2xl font-medium mt-8">Contacts</h1>
          </div>
          <div className="flex bg-zinc-50 py-4 px-5 rounded-xl justify-between w-[63rem]">
            <div className="flex flex-col gap-3">
              <h1 className="font-medium text-2xl">
                You've got a challenge? Let's talk!
              </h1>
              <h2 className="w-[32rem] tracking-wide text-zinc-500">
                Get a free consulation on your project - leave a request on the
                website or contact me in any convenient way
              </h2>
              <div className="flex gap-4">
                <div className="flex items-center font-medium duration-200 bg-black text-white w-fit py-2 px-5 rounded-full">
                  <button>Leave a request</button>
                  <IoIosArrowForward />
                </div>
                <div className="flex items-center bg-zinc-100 text-black duration-200 hover:bg-black hover:text-white w-fit py-2 px-5 rounded-full">
                  <button>More about me</button>
                  <IoIosArrowForward />
                </div>
              </div>
              <h1 className="text-sm text-zinc-300">
                Also, feel free to email me at{" "}
                <span className="underline text-zinc-400">
                  hello@postnikovmd.com
                </span>
              </h1>
            </div>
            <div>
              <h1>image here</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
