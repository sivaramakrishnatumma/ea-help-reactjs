import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = props => {
  const items = props.items.map((item, index) => {
    return (
      <li className="breadcrumb-item" key={index}>
        <Link to={item.path}>{item.name}</Link>
      </li>
    );
  });
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items}
        <li className="breadcrumb-item active" aria-current="page">
          {props.currentPage}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
