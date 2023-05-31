import { H1 } from "@/common/typography/Heading";
import { P3 } from "@/common/typography/Paragraph";
import React from "react";

const tertiary_contents = [
  {
    id: 0,
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1685511257/cape_agency/letter_isbfwf.svg",
    title: "content and strategy",
    content:
      "Content is still the boss and only a strategic approach can keep your business on top.",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1685511255/cape_agency/pen_igrvmh.svg",
    title: "design and branding",
    content:
      "Collaborate with the finest designers to carve out a picture perfect design and branding for your next great idea.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1685511255/cape_agency/arrow_nkz3d8.svg",
    title: "digital marketing",
    content:
      "Dig into the endless potential of the digital space with the right strategy and perfect campaigns. ",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1685511255/cape_agency/video_ylymmt.svg",
    title: "video production",
    content:
      "Grab the best creative outlook on your brand with the most talented minds in video production.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1685511255/cape_agency/bulb_zbh9bf.svg",
    title: "web & app development",
    content:
      "Get a crisp and sharp look for your business through our exemplary web and app developers.",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1685511255/cape_agency/speaker_jyajnp.svg",
    title: "public relations (pr)",
    content:
      "We help you and your brand keep the best image of yourself online with our expert team in Public Relations.",
  },
];

const TertiarySection = () => {
  return (
    <section className="md:p-10">
      <div className="grid grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-5 md:gap-20 center-section p-5">
        {tertiary_contents.map((content) => (
          <div className=" md:max-w-[221px] mx-auto">
            <div className="bg-black h-[30px] w-[30px] md:h-[60px] md:w-[60px] rounded-full flex justify-center items-center md:my-5">
              <img
                src={content.image}
                className="w-5/12 h-auto"
                alt={content.title}
              />
            </div>
            <H1 classes="text-[20px] leading-[20px] md:text-[24px] md:leading-[24px] uppercase my-3 max-w-[200px]">
              {content.title}
            </H1>
            <P3 classes="my-3">{content.content}</P3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TertiarySection;
