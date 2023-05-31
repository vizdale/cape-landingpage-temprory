import React from "react";

const Input = (props) => {
  return (
    <div>
      <label 
      htmlFor={props.label} 
      className="mb-2 block font-medium">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.label}
        className="px-3 py-2 rounded-md w-full text-black outline-none"
        required
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setFormData(prev => ({...prev, [props.inputName] : e.target.value}))}
      />
    </div>
  );
};

export default Input;
