"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const Calendly = (props) => {
  const router = useRouter();

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log(props.formData);
      console.log(e.data);
      // if(e.data.payload) router.push("/success")
    },
  });
  return (
    <>
      <div
        className="backdrop fixed top-0 left-0 w-full h-screen bg-black/40"
        onClick={() => props.setShowModal(false)}
      ></div>
      <div className="App fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full">
        <InlineWidget
          url="https://calendly.com/cape-connect/discovery-call?background_color=cc0000&text_color=ffffff&primary_color=000000"
          prefill={{
            email: props.formData.email,
          }}
        />
      </div>
    </>
  );
};

export default Calendly;
