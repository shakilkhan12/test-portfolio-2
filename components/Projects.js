"use client";
import Heading from "./Heading";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import data from "@/data/projects";
import Modal from "./Modal";
import { useState } from "react";
import Link from "next/link";

const Projects = () => {
  const [state, setState] = useState(false);
  const [project, setProject] = useState(null);
  const toggleModal = () => {
    setState(!state);
  };
  return (
    <>
      {state && <Modal toggleModal={toggleModal} project={project}></Modal>}
      <section className="py-7 border-b dark:border-zinc-800 border-b-zinc-100">
        <Heading>projects</Heading>
        {data.map((project) => (
          <div
            className="flex flex-wrap gap-5 w-full lg:w-8/12 mb-10"
            key={project.id}
          >
            <div className="relative w-full md:w-[120px] rounded-lg overflow-hidden bg-green-500">
              <div className="pt-[56.25%]">
                <Image
                  src={project.image}
                  alt="Picture of the author"
                  fill
                  className="w-full h-full absolute inset-0 hover:scale-110 transition-all duration-500"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-zinc-700 dark:text-zinc-400 leading-[24px] flex gap-2 ">
                {project.title}
                <GoArrowUpRight
                  size={22}
                  className="cursor-pointer"
                  onClick={() => {
                    toggleModal();
                    setProject(project);
                  }}
                />
              </h2>
              <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-2">
                {project.description?.length > 100 ? (
                  <span>{project.description.slice(0, 100)}...</span>
                ) : (
                  project.description
                )}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
