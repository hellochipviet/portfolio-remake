"use client";
import { Button } from "@/components/ui/button";
import { PROJECT, SERVICES, TRUSTED_BY } from "@/constants/home";
import { Mail, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={className}>{children}</section>;
};

const ChildSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`container mx-auto border-l border-r border-gray-200 py-24 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen w-full text-black">
      <Section className="min-h-screen">
        <ChildSection className="min-h-screen">
          <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center">
            <h1 className="text-6xl md:text-[128px] font-bold text-center">
              Hi.
            </h1>
            <p className="max-w-screen-md text-center tracking-normal">
              At Senses, we bring your ideas to life through innovative design
              and strategic development. Specializing in{" "}
              <b>UI/UX design, illustration and product development</b>, our
              goal is to create products that align seamlessly with your
              business objectives while delivering exceptional user experiences.
            </p>

            <div className="flex flex-col gap-12 items-center justify-center">
              <Image
                src="/images/home/Sense/Global.png"
                alt="Global"
                width={600}
                height={400}
                quality={80}
              />

              <div className="space-x-4">
                <Button>Contact Us</Button>
                <Button variant="outline">Tell Me More</Button>
              </div>
            </div>
          </div>
        </ChildSection>
      </Section>
      <Section>
        <ChildSection>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full mx-auto">
            <h2 className="text-base font-semibold">Trusted by</h2>
            <div className="flex justify-center items-center gap-4 lg:gap-16">
              {TRUSTED_BY.map((trusted) => (
                <Image
                  src={trusted.image}
                  alt="Trusted"
                  width={160}
                  height={140}
                />
              ))}
            </div>
          </div>
        </ChildSection>
      </Section>
      <Section>
        <ChildSection className="flex flex-col gap-16">
          <div className="max-w-[842px] flex flex-col gap-2 w-full mx-auto">
            <h3 className="text-[52px] font-semibold text-center">
              End-to-end software development.
            </h3>
            <div className="text-base font-regular text-center leading-1.5">
              We build high-quality software solutions for small and
              medium-sized companies worldwide, from startups to innovative
              enterprises. Our services span product ideation, technical
              specifications, UX/UI design, infrastructure management, and web
              and mobile application development.
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div className="w-full rounded-xl border border-[#e5e5e5] flex flex-col gap-2 p-6">
                <span className="text-[18px] font-semibold">
                  {service.title}
                </span>
                <p className="text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button>Check Our Skills</Button>
          </div>
        </ChildSection>
      </Section>
      <Section className="meet-sense-wrapper">
        <ChildSection className="border-none min-h-screen flex flex-col justify-center">
          <div className="flex items-center justify-center text-white">
            <div className="text-center flex flex-col gap-8">
              <span className="text-4xl md:text-[52px] font-bold text-center">
                Let’s build something amazing together!
              </span>
              <div className="max-w-screen-md mx-auto text-lg font-light">
                Need help bringing your idea to life? Let’s talk. Someone from
                our product team will jump in and figure out how we can work
                together.
              </div>
              <div className="flex justify-center flex-col gap-8 items-center">
                <Button className="flex px-6 py-3 border border-gray-500 bg-gray-900">
                  Meet Sense
                </Button>
              </div>
            </div>
          </div>
        </ChildSection>
      </Section>
    </div>
  );
}
