import React from "react";
import "./SearchBar.css";
import { debounce } from "../../util/debounce";

const SearchBar = props => {
  const sendToProps = e => {
    props.onKeyPress(e.target.value);
  };

  const keyPressed = debounce(sendToProps, 300);

  return (
    <div className={"searchbar-container " + props.className}>
      <input
        className="form-control mr-sm-2 searchbar-input"
        type="search"
        placeholder={props.placeholder}
        aria-label="Search"
        onChange={e => {
          e.persist();
          keyPressed(e);
        }}
      />
      <i className="fa fa-search"></i>
    </div>
  );
};

export default SearchBar;
