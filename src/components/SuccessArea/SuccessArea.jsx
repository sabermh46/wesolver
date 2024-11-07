import React from "react";
import SuccessList from "./SuccessList";

const SuccessArea = () => {
  return (
    <section className="success-area pb-120">
      <div className="container" style={{paddingTop: "50px"}}>
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="success-img">
              <img src="/img/images/success_img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="success-content">
              <div className="section-title title-style-two mb-30">
                <h2 className="title">
                When Vision Turns Into Reality
                </h2>
              </div>
              <p>
              At We Solver, we transform your vision into actionable, impactful solutions. We believe that true success lies in consistent progress and client satisfaction, which is why we focus on continuous improvement and delivering high-quality results at every stage
              </p>
              <span className="sub-title" style={{ color: "#1a3b74" , fontWeight: "bold",}}>Endless Growth, Endless Happiness</span>
              {/* success list */}
              <SuccessList />
            </div>
          </div>
        </div>
      </div>

      <div className="success-shape-wrap">
        <img src="/img/images/success_shape01.png" alt="" />
        <img src="/img/images/success_shape02.png" alt="" />
      </div>
    </section>
  );
};

export default SuccessArea;
