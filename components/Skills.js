import React from "react";
import Heading from "./Heading";
import data from "@/data/skills";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="py-7 border-b dark:border-zinc-800">
      <Heading>skills</Heading>
      <div className="flex flex-wrap items-center gap-5">
        {data.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
          >
            <div
              className={`relative w-[25px] h-[25px] ${
                skill.name === "next" && "bg-white rounded-full"
              }`}
            >
              <Image
                src={`${skill.image}`}
                fill
                alt="skill"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="ml-2 text-zinc-700 dark:text-white capitalize text-base font-bold">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
