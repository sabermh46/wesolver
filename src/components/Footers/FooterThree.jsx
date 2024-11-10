import React from "react";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <footer>
      <div className="footer-area-two footer-area-three">
        <div className="container">
          <div className="footer-top-two">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="footer-content-two text-center">
                  <div className="logo">
                    <Link to="/">
                      <img src="/img/logo/logo.png" alt="" />
                    </Link>
                  </div>
                  <p>
                  We Solver, Your Trusted Software Partner<br></br> 
                  Empowering Your Vision with Technology and Innovation 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-two">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p>© 2024 | We Solver.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="footer-social-two">
                  <ul className="list-wrap">
                    <li className="title">Follow us</li>
                    <li>
                      <a href="/">
                        <img src="/img/icon/footer_icon01.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="/img/icon/footer_icon02.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="/img/icon/footer_icon03.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="/img/icon/footer_icon04.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
