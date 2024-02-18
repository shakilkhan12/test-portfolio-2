import Image from "next/image";

const Footer = () => {
  return (
    <div className="border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-[1200px] mx-auto px-4 h-[70px] flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <span className="text-base font-medium">
            Handcrafted by{" "}
            <strong className="capitalize text-lg">shakil khan</strong> made
            with
          </span>
          <div className="dark:bg-white dark:px-3 dark:py-2 dark:rounded-lg">
            <Image src="/next.svg" width={50} height={50} />
          </div>
          <span>and</span>
          <Image src="/skills/tailwind.png" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
