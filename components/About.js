import data from "@/data/about";
import Heading from "./Heading";

const About = () => {
  return (
    <section className="py-7 border-b dark:border-zinc-800 border-b-zin-100">
      <Heading>about</Heading>
      <h3 className="text-2xl font-semibold capitalize text-black dark:text-white">
        {data.heading} 👋
      </h3>
      <p className="mt-3 text-lg font-semibold text-black dark:text-zinc-400">
        {data?.bio}
      </p>
    </section>
  );
};

export default About;
