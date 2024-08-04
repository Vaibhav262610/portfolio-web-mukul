"use client";

import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projectData } from "@/data/Projects";
import { listProjectData } from "@/data/Projects";
import { FaArrowUpLong } from "react-icons/fa6";

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="h-fit py-20 w-full flex justify-center items-center"
      >
        <div className="flex justify-between w-full max-w-[85rem]">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium">Projects</h1>
            <p className="text-zinc-400 text-md tracking-wide">
              I have a proven track record of my own <br /> product and over 30
              projects that have
              <br /> helped clients grow
            </p>
          </div>
          <div>
            <div className="grid gap-5 grid-cols-2 grid-rows-2  w-fit">
              {projectData.map((val) => {
                return (
                  <div key={val.id}>
                    <CardContainer className="inter-var">
                      <CardItem
                        // translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        <div className="w-[30rem] h-[25rem] overflow-hidden rounded-3xl">
                          <img
                            className="rounded-xl object-cover w-full h-full"
                            src={val.videoLink}
                            alt=""
                          />
                        </div>
                      </CardItem>
                    </CardContainer>
                    <div>
                      <h1 className="text-xl mt-5 font-medium">
                        {val.projectName}
                      </h1>
                      <p className="text-zinc-400 w-[28rem] ">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="mt-12 flex items-center gap-2">
                <h1 className="text-lg font-medium ">Other Projects</h1>
                <p className="bg-zinc-200 py-1 px-2 text-xs rounded-full w-fit">
                  8
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-4">
                {listProjectData.map((val) => {
                  return (
                    <div
                      key={val.id}
                      className="flex justify-between items-center border-b-2  py-2"
                    >
                      <h1 className="text-[0.9rem]">
                        <LinkPreview
                          url="https://tailwindcss.com"
                          className="flex items-center gap-2 "
                        >
                          {val.projectName}{" "}
                          <span>
                            <FaArrowUpLong className="rotate-45 text-zinc-300 text-sm" />
                          </span>
                        </LinkPreview>
                      </h1>

                      <h1 className="text-zinc-600 text-[0.9rem] w-[22rem]">{val.desc}</h1>
                      <h1 className="text-zinc-300  text-[0.9rem] font-light">{val.field}</h1>
                      <h1 className="text-zinc-300 text-[0.9rem] font-light">{val.year}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
