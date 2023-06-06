import React from "react";

const Checkbox = (props) => {
  const handleChange = (e) => {
    if(e.target.checked){
    props.setFormData((prev) => ({
      ...prev,
      [props.inputName]: [...new Set([...prev.services, e.target.value])],
    }))
  }
    else{
      props.setFormData((prev) => ({
        ...prev,
        [props.inputName]: [...prev.services.filter(item => item !== e.target.value)],
      }))
    }
  }
  return (
    <div className="flex gap-2">
      <input
        type={props.type}
        value={props.value}
        checked={props.checked}
        onChange={(e) =>
          handleChange(e)
        }
        name={props.inputName}
        id={props.label}
      />
      {props.label && <label htmlFor={props.label}>{props.label}</label>}
    </div>
  );
};

export default Checkbox;
