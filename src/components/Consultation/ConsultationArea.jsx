import React from "react";
import ConsultationAreaForm from "./ConsultationAreaForm";

const ConsultationArea = () => {
  return (
    <section className="consultation-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="consultation-content">
              <div className="section-title mb-25">
                <img src="/img/icon/consultation_icon01.png" alt="" />
                <span className="sub-title">98% Accuracy</span>
                <h2 className="title">
                Trusted Agency for Innovative Software Solutions
                </h2>
              </div>
              <p>
              At We Solver, we pride ourselves on delivering exceptional software solutions tailored to meet the unique needs of businesses across the globe. Our commitment to quality and innovation has established us as a leader in the industry, ensuring our clients receive results that propel their success.
              </p>
              <div className="consultation-list">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/consultation_icon02.png" alt="" />
                      <span>12x</span>
                    </div>
                    <div className="content">
                      <h6 className="title">Faster Order Processing</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/consultation_icon03.png" alt="" />
                      <span>95%</span>
                    </div>
                    <div className="content">
                      <h6 className="title">Processing Accuracy</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <ConsultationAreaForm />
          </div>
        </div>
      </div>

      <div className="consultation-shape-wrap">
        <img
          src="/img/images/consultation_shape01.png"
          alt=""
          className="shape-one ribbonRotate"
        />
        <img
          src="/img/images/consultation_shape02.png"
          alt=""
          className="shape-two float-bob-x"
        />
      </div>
    </section>
  );
};

export default ConsultationArea;
