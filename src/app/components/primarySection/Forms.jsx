"use client";
import Button from "@/common/form/Button";
import Input from "@/common/form/Input";
import Select from "@/common/form/Select";
import { H2 } from "@/common/typography/Heading";
import { P2, P3 } from "@/common/typography/Paragraph";
import React, { useState } from "react";

const select_values = [
  "Select an option",
  "Content and Strategy",
  "Design and Branding",
  "Online Reputation Management",
  "Meme Marketing",
  "Personal Branding",
  "Video Production",
  "Web & App development",
  "Public Relations",
  "Other"
]

const Forms = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    company_name: "",
    website_url: "",
    services : "",
  });

  console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.pathname = "/success"
  }
  return (
    <>
      <H2 classes="mb-5">CAPE can help, all you have to do is ask.</H2>
      <P3 classes="mb-5">
        Start your branding journey today, with CAPE in your corner!
      </P3>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="example@gmail.com"
          label="Email address"
          value={formData.email}
          setFormData={setFormData}
          inputName="email"
        />
        <Input
          type="text"
          placeholder="Cape Agency"
          label="Company name"
          inputName = "company_name"
          value={formData.company_name}
          setFormData={setFormData}
        />
        <Input
          type="url"
          placeholder="https://capeagency.in"
          label="Website URL"
          inputName = "website_url"
          value={formData.website_url}
          setFormData={setFormData}
        />
        <Select
         label = "Services you are interested in" inputValues = {select_values}
         inputName = "services"
         setFormData = {setFormData}
         />

         {/*The below code might change */}
         <div>
          <label className="mb-2 block font-medium">Convinient time for discovery call?</label>
          <div className="py-2 px-3 rounded-md w-full text-black flex justify-between bg-white">
            <p className="text-gray-400">Select a date</p>
            <img src = "https://res.cloudinary.com/dosjh2min/image/upload/v1685511256/cape_agency/calendar_iwjvn4.svg" alt = "calendar"/>
          </div>
         </div>
         <Button>
          Submit
         </Button>
      </form>
    </>
  );
};

export default Forms;
