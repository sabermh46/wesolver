import React from "react";
import DeveloperExperienceArea from "./DeveloperExperienceArea";

const DeveloperAreaThree = () => {
  return (
    <section className="developr-area-two pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <DeveloperExperienceArea />
          </div>

          <div className="col-lg-6">
            <div className="developr-content-two">
              <div className="section-title title-style-two mb-20">
                <span className="sub-title">Who We Are </span>
                <h2 className="title">
                  We Design and Develop Web and Mobile Applications
                </h2>
              </div>
              <p>
              <strong>We Solver </strong> is one of the leading software agencies. With over 5+ years of experience, we deliver innovative and customized software solutions. Our journey is fueled by a deep passion for technology and a commitment to excellence, empowering our clients to successfully navigate the complexities of the digital world.
              </p>

              <div className="developr-social">
                <ul className="list-wrap">
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperAreaThree;
