import React from "react";

const Select = (props) => {
  return (
    <div>
      <label htmlFor={props.label} className="mb-2 block font-medium">
        {props.label}
      </label>
      <select id = {props.label}    className="px-3 py-2 rounded-md w-full text-black outline-none" onChange={(e => props.setFormData(prev => ({...prev, [props.inputName] : e.target.value})))}
>
        {props.inputValues.map((value) => (
          <option className=" text-black " value={value} key={value}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
