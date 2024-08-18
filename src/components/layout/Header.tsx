"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { navItems } from "@/constants/home";

type Props = {};

export default function Header({}: Props) {
  // get pathname from router
  const path = usePathname();
  const router = useRouter();
  console.log(path);
  return (
    <div className="w-full sticky top-0 left-0 bg-[#fff] border-b border-gray-200 z-50">
      <div className="container">
        <div className="flex justify-between py-5">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/home/Sense/Logo.svg"
              alt="Logo"
              width={80}
              height={32}
              quality={80}
              className="w-auto h-8 hidden lg:block"
            />
            <Image
              src="/images/home/Sense/mobile_logo.svg"
              alt="Logo"
              width={40}
              height={16}
              quality={80}
              className="w-auto h-6 block lg:hidden"
            />
          </Link>

          <ul className="lg:flex gap-12 items-center hidden">
            {navItems.slice(1).map((item, idx) => (
              <li
                key={idx}
                className={`text-sm tracking-wider ${
                  path === item.href ? "border-b border-black" : ""
                }`}
              >
                <Link href={item.href} key={item.name}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <Button
              onClick={() => router.push("/contact")}
            >{`Let's talk`}</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-2 py-6">
                {navItems.map((item, idx) => (
                  <Link
                    href={item.href}
                    key={idx}
                    className={`flex w-full items-center py-2 text-lg font-semibold ${
                      path === item.href ? "border-b border-black" : ""
                    }`}
                    prefetch={false}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
