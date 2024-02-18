"use client";
import { useTheme } from "next-themes";
import { FaCloudMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import classNames from "classnames";

const DarkLight = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div
        className={classNames(
          "fixed top-4 right-4 w-12 h-[18px] rounded-full bg-zinc-700 flex items-center transition-all duration-300 cursor-pointer",

          {
            "!bg-lime-400": theme === "dark",
          }
        )}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        <span
          className={classNames(
            "w-7 h-7 rounded-full bg-white transition-all duration-300 flex items-center justify-center",
            {
              "ml-5 shadow-lg border-[2px] border-zinc-700": theme === "light",
              "border-[3px] border-transparent": theme === "dark",
            }
          )}
        >
          {theme === "light" ? (
            <FaCloudMoon size={14} className="text-black" />
          ) : (
            <LuSunMoon size={16} className="text-lime-400" />
          )}
        </span>
      </div>
    </>
  );
};

export default DarkLight;
