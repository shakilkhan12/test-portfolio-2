"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import data from "../data/header";

const Header = () => {
  const { image, name, jobTitle, address, experience, education } = data;
  return (
    <header className="flex flex-col md:flex-row md:items-center gap-8 border-b border-b-zinc-100 pb-10 dark:border-zinc-800">
      <div className="w-[170px] h-[170px] flex items-center justify-center rounded-full  dark:border-zinc-500 ">
        <div className="w-[200px] md:w-[160px] h-[200px] md:h-[160px] relative rounded-full overflow-hidden">
          <Image
            src={image}
            alt="profile image"
            fill
            className="w-full h-full object-cover hover:scale-125 duration-500 transition-all hover:rotate-12"
          />
        </div>
      </div>

      <div className="mt-6 md:mt-0 flex-1">
        <h1 className="text-4xl text-violet-700 dark:text-white text-center md:text-left md:text-5xl font-black capitalize">
          {name}
        </h1>
        <h3 className="text-lg md:text-xl mt-2 text-zinc-700 dark:text-zinc-400 text-center md:text-left font-bold">
          Full Stack JavaScript & Blockchain Developer
        </h3>
        <div className="flex items-center justify-center md:justify-start gap-x-4 gap-y-2 mt-2 flex-wrap">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-violet-700 dark:text-zinc-400 text-lg " />
            <span className="text-base font-semibold capitalize text-zinc700 dark:text-zinc-400">
              pakistan, malakand
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <BsTerminalFill className="text-violet-700 dark:text-zinc-400 text-lg" />
            <span className="text-base font-medium text-zinc-700 dark:text-zinc-400">
              Almost 7 years of experiance
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <IoIosSchool className="text-violet-700 dark:text-zinc-400 text-lg " />
            <span className="text-base font-medium capitalize text-zinc-700 dark:text-zinc-400">
              BS software engineering
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
