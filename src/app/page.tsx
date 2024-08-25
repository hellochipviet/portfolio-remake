"use client";
import { ChildSection, Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { SERVICES, TRUSTED_BY } from "@/constants/home";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const scrollDown = () => {
    const service = document.getElementById("#service");
    service?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen w-full text-black">
      <Section className="min-h-screen">
        <ChildSection className="min-h-screen">
          <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center">
            <h1 className="text-6xl md:text-[128px] font-bold text-center">
              Hi.
            </h1>
            <p className="max-w-screen-md text-center tracking-normal">
              I bring your ideas to life through innovative design
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
                <Button variant="outline" onClick={scrollDown}>
                  Tell Me More
                </Button>
              </div>
            </div>
          </div>
        </ChildSection>
      </Section>
      <Section>
        <ChildSection>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full mx-auto">
            <h2 className="text-base font-semibold">Trusted by</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
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
      <Section id="#service">
        <ChildSection className="flex flex-col gap-16">
          <div className="max-w-[842px] flex flex-col gap-2 w-full mx-auto">
            <h3 className="text-[52px] font-semibold text-center">
              End-to-end software development.
            </h3>
            <div className="text-base font-regular text-center leading-1.5">
              I build high-quality software solutions for small and
              medium-sized companies worldwide, from startups to innovative
              enterprises. My services span product ideation, technical
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
                <p className="text-[#808080]">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              onClick={() => {
                router.push("/products");
              }}
            >
              Check My Skills
            </Button>
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
                Need help bringing your idea to life? Let’s talk.
              </div>
              <div className="flex justify-center flex-col gap-8 items-center">
                <Button
                  onClick={() => {
                    router.push("/contact");
                  }}
                  className="flex px-6 py-3 border border-gray-500 bg-[#262626] hover:bg-black"
                >
                  Let's talk
                </Button>
              </div>
            </div>
          </div>
        </ChildSection>
      </Section>
    </div>
  );
}
