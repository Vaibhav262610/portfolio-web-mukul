import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <div>
          <div>
            <h1>Contacts</h1>
          </div>
          <div>
            <div>
              <h1>You've got a challenge? Let's talk!</h1>
              <h2>
                Get a free consulation on your project - leave a request on the
                website or contact me in any convenient way
              </h2>
              <div>
                <div className="mt-4 flex items-center bg-zinc-100 text-black font-medium duration-200 hover:bg-black hover:text-white w-fit py-2 px-6 rounded-full">
                  <button>Leave a request</button>
                  <IoIosArrowForward />
                </div>
                <div className="mt-4 flex items-center bg-zinc-100 text-black font-medium duration-200 hover:bg-black hover:text-white w-fit py-2 px-6 rounded-full">
                  <button>More about me</button>
                  <IoIosArrowForward />
                </div>
              </div>
              <h1>Also, feel free to email me at hello@postnikovmd.com</h1>
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
