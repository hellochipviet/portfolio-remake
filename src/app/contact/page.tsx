"use client";
import { ChildSection, Section } from "@/components/layout/Section";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full text-black tracking-wider">
      <Section className="h-full">
        <ChildSection className="flex flex-col gap-16 justify-center py-[152px]">
          <div className="max-w-[842px] flex flex-col gap-2 w-full mx-auto">
            <h3 className="text-[52px] font-semibold text-center">
              Contact me
            </h3>
            <div className="text-base font-regular text-center leading-1.5">
              Got questions or a project in mind? Reach out to me directly using
              the contact details below. I’d love to hear from you!
            </div>
          </div>
          <div className="flex justify-evenly gap-8 md:gap-20 flex-wrap">
            <Link
              href="mailto:hello.chipviet@gmail.com"
              className="flex gap-2 justify-center items-center text-lg font-medium border rounded-[32px] px-4 md:px-12 py-4"
            >
              <Mail />
              <span>hello.chipviet@gmail.com</span>
            </Link>

            <Link
              href="tel:+84329456195"
              className="flex gap-2 justify-center items-center text-lg font-medium border rounded-[32px] px-4 md:px-12 py-4"
            >
              <Phone />
              <span>+84 329456195</span>
            </Link>
          </div>
        </ChildSection>
      </Section>
    </div>
  );
}
