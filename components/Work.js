import data from "@/data/work";
import Image from "next/image";
import Heading from "./Heading";
const Work = () => {
  return (
    <section className="py-7 border-b dark:border-zinc-800 border-b-zinc-100">
      <Heading>work history</Heading>
      {data.map((pos) => (
        <div className="mt-6 flex gap-x-5" key={pos.id}>
          <div className="relative w-[50px] h-[50px] rounded-full border dark:border-zinc-700 overflow-hidden">
            <Image
              src={pos.image}
              fill
              alt="job"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-black dark:text-white capitalize text-lg font-bold">
              {pos.role}
            </h2>
            <span className="capitalize text-sm font-bold text-zinc-500">
              {pos?.company}
            </span>
            <h5 className="text-black dark:text-white capitalize text-sm font-bold  mt-[2px]">
              {pos.type} - <span>{pos.date}</span>
            </h5>
            {pos.skills && (
              <div className="flex flex-wrap gap-2 my-2">
                {pos.skills?.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2">
                      <div className="relative w-[20px] h-[20px]">
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
                  </div>
                ))}
              </div>
            )}

            <div className="mt-2">
              {pos.options &&
                pos.options.map((option) => (
                  <li
                    key={option}
                    className="text-zinc-900 font-semibold text-base dark:text-zinc-400"
                  >
                    {option}
                  </li>
                ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Work;
