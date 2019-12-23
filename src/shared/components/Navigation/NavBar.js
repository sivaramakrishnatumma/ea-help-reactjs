import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../UIElements/Button/Button";
import Image from "../UIElements/Image/Image";

import "./NavBar.css";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const collapsableEl = useRef(null);

  const showMenuConent = () => {
    collapsableEl.current && collapsableEl.current.classList.toggle("collapse");
  };

  const collapseMenu = e => {
    e.preventDefault();
    collapsableEl.current && collapsableEl.current.classList.toggle("collapse");
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand brand-title" to="/">
          <Image
            className="brand-logo"
            src="https://eaassets-a.akamaihd.net/eahelp/assets/83.06-RELEASE83/bundles/helpcenter/images/ea-logo.png"
          />
          HELP
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          onClick={showMenuConent}
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div
          ref={collapsableEl}
          className="navbar-collapse collapse"
          id="navbarNavDropdown"
        >
          <NavLinks className="collapse" collapseMenu={collapseMenu}></NavLinks>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
