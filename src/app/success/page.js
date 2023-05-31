'use client'
import { H1 } from "@/common/typography/Heading";
import { P2 } from "@/common/typography/Paragraph";
import { CheckFat } from "@phosphor-icons/react";
import React from "react";

const Sucess = () => {
  return (
    <section className="bg-red h-[80vh] flex justify-center items-center">
      <div className="center-section flex flex-col items-center gap-3">
        <CheckFat size={200} />
        <H1 classes="uppercase md:text-[40px] text-center">
          <p className="-mb-5">thank you!</p>
          <p>we got your back</p>
        </H1>
        <P2>Your submission has been sent.</P2>
      </div>
    </section>
  );
};

export default Sucess;
