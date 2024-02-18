"use client";
import data from "@/data/reviews";
import { IoIosStarOutline } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";
import Masonry from "react-layout-masonry";

import Heading from "./Heading";
import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
const Reviews = () => {
  const [count, setCount] = useState(6);

  return (
    <section className="py-20 border-b dark:border-zinc-800 border-b-zinc-100">
      <Heading>Testimonial</Heading>
      <h1 className="text-3xl md:text-5xl font-semibold capitalize mt-5">
        What{" "}
        <strong className="font-black text-indigo-600 dark:text-zinc-400">
          People Say
        </strong>
      </h1>
      <p className="text-lg font-medium w-full lg:w-6/12 mb-10 mt-5">
        I design products that are more than pretty. I make them shippable and
        usable, tempor non mollit dolor et do aute
      </p>

      <div className="w-full relative">
        {data.length !== count && (
          <div className="absolute bottom-0 flex justify-center w-full h-full bg-gradient-to-t from-white/80 dark:from-black/80 to-transparent items-end p-4">
            <button
              className="outline-none bg-indigo-600  text-white rounded-lg font-medium text-base capitalize px-4 h-[45px]"
              onClick={() => setCount(count + 6)}
            >
              show more
            </button>
          </div>
        )}

        <Masonry columns={{ 640: 1, 768: 2, 1280: 3 }} gap={16}>
          {data.slice(0, count).map((review, index) => (
            <div
              className={classNames(
                "bg-slate-50  dark:bg-zinc-900 rounded-lg p-7 border border-zinc-100 dark:border-zinc-800"
              )}
            >
              <div className="flex gap-5">
                <div className="relative w-[56px] h-[56px]">
                  <Image
                    fill
                    src={review.image}
                    className="rounded-full w-full h-full "
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-lg capitalize text-zinc-900 dark:text-zinc-300">
                    {review.name}
                  </h2>
                  <span className="block mt-[1px] text-base text-zinc-500 dark:text-zinc-300 capitalize font-medium leading-[20px]">
                    {review.country}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-base  text-zinc-600 dark:text-zinc-400">
                {review.comment}
              </p>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Reviews;
