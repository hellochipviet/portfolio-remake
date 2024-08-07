"use client";
import { PROJECT } from "@/constants/home";
import { Dribbble, Linkedin, Mail, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PiBehanceLogo } from "react-icons/pi";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`${
        className ?? ""
      } py-16 tracking-tighter min-h-screen flex items-center`}
    >
      <div className="flex flex-col gap-12 justify-center w-full container mx-auto px-4 ">
        {children}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen w-full text-black">
      <Section className="bg-[#FFF0E3]">
        <h1 className="text-6xl md:text-[98px] font-bold mb-4 tracking-tighter text-center">
          Hello{" "}
          <img
            src="/images/chipviet.svg"
            className="inline-block"
            width={230}
          />{" "}
          I'm Sang
          <br />
          <span className="text-outline">
            Digital designer & Software Engineer
          </span>
        </h1>
        <p className="text-2xl text-center mb-8 tracking-tighter">
          I'm passionate about my work because I believe that good design can
          make a real difference in the world — My goal is to design products
          that from a match between the needs of a user and the goals of a
          business.
        </p>

        <div className="flex justify-center space-x-4 mt-8">
          <Link
            href="https://dribbble.com/chipvietdesigner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center rounded-full border border-black px-4 py-1"
          >
            <Dribbble size={16} />
            Dribbble
          </Link>
          <Link
            href="https://www.behance.net/chipviet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center rounded-full border border-black px-4 py-1"
          >
            <PiBehanceLogo size={20} />
            Behance
          </Link>

          <Link
            href="https://www.linkedin.com/in/pham-xuan-sang/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center rounded-full border border-black px-4 py-1"
          >
            <Linkedin size={16} />
            Linkedin
          </Link>
        </div>
      </Section>
      <Section className="bg-[#282828] text-white">
        <div className="flex flex-col gap-12 max-w-[624px] w-full mx-auto">
          <h2 className="text-xl md:text-[63px] font-bold mb-4">
            Service and skills
          </h2>
          <div className="flex flex-col gap-4">
            <div
              className="border-b py-4 text-2xl border-b-white"
              data-aos="fade-right"
              data-aos-duration="400"
            >
              UX/UI Design (Web, Mobile)
            </div>
            <div
              className="border-b py-4 text-2xl border-b-white"
              data-aos="fade-right"
              data-aos-duration="400"
            >
              Front-end Development
            </div>
            <div
              className="border-b py-4 text-2xl border-b-white"
              data-aos="fade-right"
              data-aos-duration="400"
            >
              Illustration
            </div>
            <div
              className="border-b py-4 text-2xl border-b-white"
              data-aos="fade-right"
              data-aos-duration="400"
            >
              3D Modeling
            </div>
          </div>
        </div>
      </Section>
      <Section className="py-[152px] w-full sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[842px] flex flex-col gap-6 w-full mx-auto">
          <h3 className="text-2xl font-semibold text-center">Projects</h3>
          <div className="text-[63px] font-bold text-center leading-none">
            Helping brands achieve sustainable results
          </div>
          <div className="text-[#4b4b4b] text-xl text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {PROJECT.map((project) => (
            <div className="bg-white shadow-md rounded-[40px] overflow-hidden relative">
              <Image
                src={project.image}
                alt="Project 1"
                width={800}
                height={600}
                quality={80}
                className="w-full h-auto"
              />
              <div className="p-6 absolute bottom-0 left-0 w-full ">
                <div className="bg-white rounded-[20px] p-8 flex justify-between items-center">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-3xl font-bold">
                      {project.projectName}
                    </h4>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <div className="rounded-full border border-black px-4 py-1 text-xs">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    target="_blank"
                    href={project.projectLink}
                    className="rounded-full border p-4 border-black"
                  >
                    <MoveUpRight size={24} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Link
            href="#"
            className="flex font-medium gap-2 items-center px-8 py-4 border border-black rounded-full"
          >
            All Case Studies <MoveUpRight size={16} />
          </Link>
        </div>
        <div className="rounded-3xl w-full border border-black flex bg-[#F9FAFB]">
          <div className="p-16 flex flex-col justify-center flex-1">
            <span className="font-semibold">Trusted by</span>
            <p className="text-[31px] font-semibold">
              Focused to create a thoughtful and unique visual craft for brands{" "}
            </p>
          </div>
          <div className="h-auto w-[1px] bg-black" />
          <div className="p-16 flex flex-col justify-center flex-[2]">
            <div className="grid grid-cols-3 justify-center gap-4">
              <div className="flex justify-center">
                <Image
                  src={"/images/home/Koodaa-Logo.png"}
                  alt="Koodaa"
                  width={140}
                  height={140}
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={"/images/home/Koodaa-Logo.png"}
                  alt="Koodaa"
                  width={140}
                  height={140}
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={"/images/home/Koodaa-Logo.png"}
                  alt="Koodaa"
                  width={140}
                  height={140}
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={"/images/home/Koodaa-Logo.png"}
                  alt="Koodaa"
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-[#282828] py-[152px]">
        <div className="flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-6xl md:text-[98px] font-bold mb-4 tracking-tighter text-center">
              Let's talk
            </h2>
            <p className="text-xl mb-8">
              Good design can make a real difference in the world. I love the
              challenge of taking someone's vision and turning it into a
              reality.
            </p>
            <div className="flex justify-center flex-col gap-8 items-center">
              <Link
                target="_blank"
                href="mailto:hello.chipviet@gmail.com"
                className="flex px-6 py-3 gap-2 bg-white text-black rounded-full font-semibold hover:bg-gray-300"
              >
                <Mail />
                Send me an email
              </Link>
              <span className="text-[42px]">hello.chipviet@gmail.com</span>
            </div>
          </div>
        </div>
      </Section>
      <style jsx>{`
        .text-outline {
          color: #fff0e3;
          background-color: transparent;
          text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black,
            0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
            0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
            0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
            0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
            0 0 1px black;
        }
      `}</style>
    </div>
  );
}
