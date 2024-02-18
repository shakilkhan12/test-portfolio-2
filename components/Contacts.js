"use client";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

import data from "../data/contacts";
import Heading from "./Heading";
import Link from "next/link";
const Contacts = () => {
  return (
    <section className="py-7 border-b dark:border-zinc-800 border-b-zinc-100">
      <Heading>contacts</Heading>
      <div className="flex flex-wrap items-center gap-5">
        {data.map((contact) => (
          <Link
            href={contact?.link}
            target="_blank"
            key={contact.id}
            className="flex items-center space-x-2 bg-transparent bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
          >
            {contact.name === "github" && (
              <FaGithub size={18} className="text-zinc-700 dark:text-white" />
            )}
            {contact.name === "twitter" && (
              <FaSquareXTwitter
                size={18}
                className="text-zinc-700 dark:text-white"
              />
            )}
            {contact.name === "linkedin" && (
              <FaLinkedin size={18} className="text-[#0a66c2]" />
            )}
            {contact.name === "youtube" && (
              <FaYoutube size={18} className="text-[#ff0000]" />
            )}
            {contact.name === "instagram" && (
              <FaInstagram size={18} className="text-[#c32aa3]" />
            )}
            {contact.name === "facebook" && (
              <FaFacebookSquare size={18} className="text-[#1877f2]" />
            )}
            {contact.name === "behance" && (
              <FaBehanceSquare size={18} className="text-[#003ECB]" />
            )}
            {contact.name === "medium" && (
              <FaMedium size={18} className="text-zinc-700 dark:text-white" />
            )}
            {contact.name === "email" && (
              <MdEmail size={18} className="text-zinc-700 dark:text-white" />
            )}
            {contact.name === "cv" && (
              <FaRegUserCircle
                size={18}
                className="text-zinc-700 dark:text-white"
              />
            )}
            <span className="text-zinc-700 dark:text-white capitalize text-base font-bold">
              {contact.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
