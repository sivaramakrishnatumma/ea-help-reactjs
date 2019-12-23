import React from "react";

import Image from "../../../shared/components/UIElements/Image/Image";
import "./ImageGrid.css";

const ImageGrid = props => {
  const { items, onSelect } = props;
  return (
    <div className="images-container">
      <div className="images-grid">
        {items &&
          items.map(item => {
            return (
              <div
                className="product-item"
                key={item.id}
                title={item.name}
                onClick={() => onSelect(item)}
              >
                <Image src={item.imageUrl} alt={item.title}></Image>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImageGrid;
