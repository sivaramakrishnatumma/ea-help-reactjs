import React from "react";

const Image = props => {
  return (
    <img
      src={props.src}
      alt={props.name}
      className={"img-fluid " + props.className}
    />
  );
};
export default Image;
