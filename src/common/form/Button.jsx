import React from "react";

const Button = (props) => {
  return (
    <button
      type="submit"
      className="w-full bg-red hover:bg-btn_hover transition-colors duration-300 rounded-lg py-2 mt-5"
    >
      {props.children}
    </button>
  );
};

export default Button;
