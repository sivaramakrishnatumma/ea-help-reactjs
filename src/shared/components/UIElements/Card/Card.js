import React from "react";

import "./Card.css";

const Card = props => {
  return (
    <div className={"title-card " + props.className} onClick={props.onClick}>
      <span>{props.title}</span>
    </div>
  );
};

export default Card;
