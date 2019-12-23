import React from "react";

import "./GridsCard.css";

import Card from "../../../shared/components/UIElements/Card/Card";

const GridsCard = props => {
  const { items, selectedItem, title, onSelect } = props;

  return (
    <div className="grid-card-container">
      <div className="grid-card-label">Select {title}*</div>
      <div className="grid-card-grid">
        {items.map((item, index) => {
          return (
            <span key={index} onClick={() => onSelect(item)}>
              <Card
                title={item.name}
                className={
                  selectedItem && item.id === selectedItem.id ? "selected" : ""
                }
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default GridsCard;
