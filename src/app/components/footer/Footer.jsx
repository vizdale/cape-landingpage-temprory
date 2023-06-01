"use client";
import { P2, P3 } from "@/common/typography/Paragraph";
import {
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="mx-auto flex gap-5 justify-center items-center">
        <a href="" target="_blank" rel="noreferrer">
          <InstagramLogo size={28} />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <TwitterLogo size={28} />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <LinkedinLogo size={28} />
        </a>
      </div>
      <P3 classes="mx-auto text-center mt-5">{new Date().getFullYear() } Datastorm Pvt Ltd</P3>
    </footer>
  );
};

export default Footer;
