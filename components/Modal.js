import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const Modal = ({ toggleModal, project }) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black/25 backdrop-blur z-10 p-4 flex items-center justify-center">
      <IoClose
        className="absolute top-6 right-6 cursor-pointer"
        size={30}
        onClick={toggleModal}
      />
      <div
        className="relative max-w-[1200px] w-full bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-100 dark:border-zinc-700 shadow-sm overflow-y-auto max-h-[80vh] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-slate-700
  dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
      >
        <div className="flex flex-wrap lg:space-x-6">
          <div class="relative w-full lg:w-[400px] rounded-lg overflow-hidden">
            <div className="pt-[56.25%]">
              <Image
                src={project.image}
                alt="Your Image"
                fill
                className="w-full h-full absolute inset-0 hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>

          <div className="flex-1 mt-5 lg:mt-0">
            <h2 className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-400 font-bold">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 my-3">
              {project?.skills?.map((skill) => (
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
            <div className="flex items-center gap-3">
              <Link
                href={project.source_code}
                target="_blank"
                className="flex items-center space-x-2 bg-transparent bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
              >
                <FaGithub size={18} className="text-zinc-700 dark:text-white" />
                <span className="text-zinc-700 dark:text-white capitalize text-base font-bold">
                  source code
                </span>
              </Link>
              <Link
                href={project.demo}
                target="_blank"
                className="flex items-center space-x-2 bg-transparent bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
              >
                <TbWorld size={18} className="text-zinc-700 dark:text-white" />
                <span className="text-zinc-700 dark:text-white capitalize text-base font-bold">
                  demo
                </span>
              </Link>
            </div>
            <p className="text-base font-medium text-gray-700 dark:text-zinc-400 leading-[20px] mt-6">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
