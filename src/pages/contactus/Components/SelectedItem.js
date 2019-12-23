import React from "react";

import "./SelectedItem.css";
import Image from "../../../shared/components/UIElements/Image/Image";

const SelectedItem = props => {
  const { name, imageUrl, type, onChange } = props;

  return (
    <React.Fragment>
      <div className="selected-item-container">
        <div className="item-grid">
          <div className="item-img">
            <Image src={imageUrl} alt={name} className="res-image" />
          </div>
          <div className="change-game-block" onClick={onChange}>
            <a>Change {type}</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectedItem;
