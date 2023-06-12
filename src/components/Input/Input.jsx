import React from "react";

export const Input = ({ onChangeInput, placeholder, className }) => {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={(e) => onChangeInput(e)}
    ></input>
  );
};

export default Input;
