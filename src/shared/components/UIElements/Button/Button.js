import React from "react";

const Button = props => {
  return (
    <button
      className={"btn " + props.className}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;