"use client"
import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="App">
    <InlineWidget url="https://calendly.com/dharunprasad/beyond-connect" />
  </div>
  );
};

export default Calendly;