import React from "react";
import { Link } from "react-router-dom";

const AgencyArea = () => {
  return (
    <section className="agency-area pt-120" style={{paddingBottom: '50px'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="agency-img text-center">
              <img src="/img/background/bg2.png" alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="agency-content">
              <div className="section-title title-style-two mb-20">
                { /* <span className="sub-title">Our Agency</span> */}
                <h2 className="title">Best Online Agency Since 2020</h2>
              </div>
              <p className="info-one">
              We Solver has established itself as a leader in delivering cutting-edge digital solutions. Specializing in web and mobile app development, UI/UX design, and advanced AI applications,
              </p>
              <p className="info-two">
              Our commitment to innovation and client satisfaction ensures that we provide tailored solutions that not only meet but exceed your business goals.
              </p>

              <Link to="/about-us" className="btn">
                Learn More <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="agency-shape-wrap">
        <img src="/img/images/agency_shape01.png" alt="" />
        <img src="/img/images/agency_shape02.png" alt="" />
        <img src="/img/images/agency_shape03.png" alt="" />
        <img src="/img/images/agency_shape04.png" alt="" />
      </div>
    </section>
  );
};

export default AgencyArea;
