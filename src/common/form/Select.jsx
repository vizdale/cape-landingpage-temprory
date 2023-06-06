import { X } from "@phosphor-icons/react";
import React, { useState } from "react";

const Select = (props) => {
  const [select, setSelect] = useState([]) 
  const onChange = (e) => {
    props.setFormData((prev) => ({
      ...prev,
      [props.inputName]: [...prev[props.inputName], e.target.value],
    }));
    setSelect(prev => [...prev, e.target.value])
  };
  return (
    <div>
      <label htmlFor={props.label} className="mb-2 block font-medium">
        {props.label}
      </label>
      <p className="text-xs my-1 hidden md:block">Hold cntrl and click for multi selects</p>
      <select
        multiple
        id={props.label}
        className="px-3 py-2 rounded-md w-full text-black outline-none"
        onChange={(e) => onChange(e)}
      >
        {props.inputValues.map((value) => (
          <option className=" text-black " value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
