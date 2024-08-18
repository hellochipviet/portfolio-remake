import { navItems } from "@/constants/home";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto text-center border-t border-gray-200">
        <div className="flex justify-between flex-col lg:flex-row items-center pt-12 pb-4 gap-8">
          <Link href="/">
            <Image
              src="/images/home/Sense/Logo.svg"
              alt="Sense Logo"
              width={200}
              height={80}
            />
          </Link>

          <nav>
            <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-700 font-medium">
              {navItems.slice(1).map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="container mx-auto text-center border-t border-gray-200">
        <div className="flex py-8 gap-2 justify-center md:justify-start">
          <a target="_blank" rel="noreferrer" href="https://twitter.com/shadcn">
            <div className="border-[#E5E5E5] border flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0">
              <FaXTwitter size={20} color={"gray"} />
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/shadcn">
            <div className="border-[#E5E5E5] border flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0">
              <FaFacebook size={20} color={"gray"} />
            </div>
          </a>{" "}
          <a target="_blank" rel="noreferrer" href="https://twitter.com/shadcn">
            <div className="border-[#E5E5E5] border flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0">
              <RiInstagramFill size={20} color={"gray"} />
            </div>
          </a>
        </div>

        {/* Copyright */}
      </div>
      <div className="container mx-auto border-t border-gray-200">
        <div className="text-gray-900 text-sm py-8 flex justify-center md:justify-start">
          © Sense. 2024. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
