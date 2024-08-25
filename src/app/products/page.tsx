"use client";
import { ChildSection, Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Products() {
  return (
    <div className="min-h-screen w-full text-black">
      <Section className="min-h-screen">
        <ChildSection className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center">
            <h1 className="text-6xl md:text-[128px] font-bold text-center">
              I did:
            </h1>
            <p className="max-w-screen-md text-center tracking-normal">
              Over the years I have partnered with amazing innovative companies
              around the world to build ambitious web and mobile applications,
              from one-person startups.
            </p>
          </div>
        </ChildSection>
      </Section>
      <Section>
        <ChildSection className="flex flex-col gap-16">
          <div className="max-w-[842px] flex flex-col gap-2 w-full mx-auto">
            <div className="flex justify-center">
              <Badge variant="outline">Web development</Badge>
            </div>
            <h3 className="text-[52px] leading-tight font-semibold text-center">
              State-of-the-art web applications.
            </h3>
            <div className="text-base font-regular text-center leading-1.5">
            I specialize in building robust, reliable, and high-performance web applications from scratch, tailored for any industry.
            </div>
          </div>
          <div className="flex justify-center">
            <Carousel className="w-full max-w-6xl">
              <CarouselContent>
                {[1, 2, 3, 4].map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src={`/images/products/Web${item}.png`}
                        alt="Web"
                        width={1600}
                        height={900}
                        className="aspect-video object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </ChildSection>
      </Section>

      <Section>
        <ChildSection className="flex flex-col gap-16">
          <div className="max-w-[842px] flex flex-col gap-2 w-full mx-auto">
            <div className="flex justify-center">
              <Badge variant="outline">Mobile development</Badge>
            </div>
            <h3 className="text-[52px] leading-tight font-semibold text-center">
              Delightful iOS and Android apps.
            </h3>
            <div className="text-base font-regular text-center leading-1.5">
            I design and build stunning native mobile apps that deliver the best user experience. My mobile applications are used by millions of users worldwide.
            </div>
          </div>
          <div className="flex justify-center">
            <Carousel className="w-full max-w-6xl">
              <CarouselContent>
                {[1, 2].map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src={`/images/products/Mobile-${item}.png`}
                        alt="Web"
                        width={1600}
                        height={900}
                        className="aspect-video object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </ChildSection>
      </Section>
      <Section>
        <ChildSection className="flex flex-col gap-16">
          <div className="max-w-[842px] flex flex-col gap-2 w-full mx-auto">
            <div className="flex justify-center">
              <Badge variant="outline">Illustration</Badge>
            </div>
            <h3 className="text-[52px] leading-tight font-semibold text-center">
              Elevate digital experiences
            </h3>
            <div className="text-base font-regular text-center leading-1.5">
              From simple icons to intricate, detailed designs, I create
              high-quality illustrations that elevate digital experiences. My
              wide range of assets for UI/UX design ensures that every element
              is visually captivating and perfectly aligned with the user
              journey.
            </div>
          </div>
          <div className="flex justify-center">
            <Carousel className="w-full max-w-6xl">
              <CarouselContent>
                {[1, 2, 3, 4].map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src={`/images/products/Ill-${item}.svg`}
                        alt="Web"
                        width={1600}
                        height={900}
                        className="aspect-video object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </ChildSection>
      </Section>
    </div>
  );
}
