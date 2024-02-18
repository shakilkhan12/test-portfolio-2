import About from "@/components/About";
import Companies from "@/components/Companies";
import Contacts from "@/components/Contacts";
import DarkLight from "@/components/DarkLight";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[1200px] w-full mx-auto px-4">
        <DarkLight />
        <div className="pt-20">
          <Header />
          <Contacts />
          <About />
          <Skills />
          <Work />
          <Projects />
          {/* <Companies /> */}
          <Reviews />
        </div>
      </div>
      <Footer />
    </>
  );
}
