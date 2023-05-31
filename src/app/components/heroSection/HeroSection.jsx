import { H1 } from "@/common/typography/Heading";
import { P1, P2, P3 } from "@/common/typography/Paragraph";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-red border-none pt-16 pb-12">
      <div className="flex flex-col items-center justify-center  gap-5">
        <H1 classes="text-[24px] leading-[24px] md:text-[40px] md:leading-[40px] text-center uppercase max-w-[536px]">
          CAPE: The Superheroes Your Brand Needs.
        </H1>
        <P2 classes="text-center">The impossible is just a Tuesday for us.</P2>
      </div>
    </section>
  );
};

export default HeroSection;
