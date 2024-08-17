import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const navItems = [
  {
    name: "Products",
    href: "/",
  },
  {
    name: "Handbooks",
    href: "/",
  },
  {
    name: "Developers",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
];

export default function Header({}: Props) {
  return (
    <div className="w-full sticky top-0 left-0 bg-[#fff] border-b border-gray-200 z-50">
      <div className="container">
        <div className="flex justify-between py-5">
          <Image
            src="/images/home/Sense/Logo.svg"
            alt="Logo"
            width={80}
            height={32}
            quality={80}
            className="w-auto h-8"
          />
          <ul className="flex gap-12">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} key={item.name}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
