import React from "react";
import ConsultationAreaForm from "./ConsultationAreaForm";

const ConsultationAreaTwo = () => {
  return (
    <section className="consultation-area consultation-area-two pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="consultation-content">
              <div className="section-title mb-25">
                <span className="sub-title">95% Client Satisfaction</span>
                <h2 className="title">
                World's Leading Software Agency
                </h2>
              </div>

              <p>
              At We Solver, we set the benchmark for cutting-edge software solutions, driven by innovation and precision. With our expertise in advanced technology, we empower businesses to enhance efficiency and achieve outstanding results
              </p>

              <div className="consultation-list">
                <ul className="list-wrap">
                  <li>
                    <h6 className="title">12X</h6>
                    <p>
                      Faster Order <span>Processing</span>
                    </p>
                  </li>
                  <li>
                    <h6 className="title">99%</h6>
                    <p>
                      Processing <span>Accuracy</span>
                    </p>
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

export default ConsultationAreaTwo;
