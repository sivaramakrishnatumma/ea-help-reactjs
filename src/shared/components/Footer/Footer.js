import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="page-footer font-small cyan darken-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="mb-5 flex-center">
              <a className="fb-ic" href="http://www.facebook.com">
                <i className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a className="tw-ic" href="http://www.twitter.com">
                <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a className="gplus-ic" href="http://www.google.com">
                <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a className="li-ic" href="http://www.linkedin.com">
                <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a className="ins-ic" href="http://www.instagram.com">
                <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a className="pin-ic" href="http://www.pinterest.com">
                <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2019 Copyright:
        <a href="https://help.ea.com">
          {" "}
          help.ea.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
