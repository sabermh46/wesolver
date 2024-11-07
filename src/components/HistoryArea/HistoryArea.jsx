import React from "react";
import HistoryAreaRoadmap from "./HistoryAreaRoadmap";

const HistoryArea = () => {
  return (
    <section className="history-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title white-title text-center mb-45">
              { /* <span className="sub-title">Our Company</span> */ }
              <h2 className="title">Company History</h2>
              <p>
              Founded on a vision of innovation and excellence, We Solver has grown from a small tech startup to one of the leading software agencies globally. 
              </p>
            </div>
          </div>
        </div>
        <div className="history-inner">
          <div className="history-img">
            <img src="/img/images/history_img.jpg" alt="" />
          </div>
          <div className="row g-0 justify-content-end">
            <div className="col-lg-6">
              <div className="history-content">
                <h2 className="title">
                The Vision Behind Our Establishment
                </h2>
                <p>
                From the beginning, We Solver was founded with the intention to innovate and set new standards in the industry. Our mission was clear: to provide exceptional software solutions and digital designs that surpass expectations and set our clients up for success.
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="far fa-check"></i>Affordable, High-Quality Design Solutions
                  </li>
                  <li>
                    <i className="far fa-check"></i>Unique and Innovative Design Approach
                  </li>
                  <li>
                    <i className="far fa-check"></i>World-Class Designs That Make an Impact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* road map */}
        <HistoryAreaRoadmap />
      </div>

      <div className="history-shape-wrap">
        <img src="/img/images/history_shape01.png" alt="" />
        <img src="/img/images/history_shape02.png" alt="" />
      </div>
    </section>
  );
};

export default HistoryArea;
