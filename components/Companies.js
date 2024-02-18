import React from "react";
import data from "@/data/companies";
import Heading from "./Heading";
import Image from "next/image";
const Companies = () => {
  return (
    <section className="py-7 border-b dark:border-zinc-800 border-b-zinc-100">
      <div className="mx-auto text-center mb-20 mt-10">
        <Heading>
          I'm proud to have collaborated with some awesome companies:
        </Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {data.map((company) => (
          <div className="p-8 dark:bg-zinc-700 rounded-lg">
            <div className="w-full h-[60px] relative">
              <Image
                src={company.image}
                fill
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
