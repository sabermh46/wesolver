import React from "react";
import ConsultationAreaForm from "./ConsultationAreaForm";
import { useInView } from "react-intersection-observer";

const ConsultationArea = () => {
  const {ref: ref1, inView: inView1 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref2, inView: inView2 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref3, inView: inView3 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref4, inView: inView4 } = useInView({threshold: 0.3, triggerOnce: false})
  return (
    <section className="consultation-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="consultation-content">
              <div ref={ref1} className="section-title mb-25">
                <img src="/img/icon/consultation_icon01.png" alt="" style={{
                  transition: '0.5s ease',
                  transform: `translateX(${inView1 ? 0 : 100}px)`
                }}/>
                <span className="sub-title" style={{
                  transition: '0.5s ease',
                  transitionDelay: '0.2s',
                  transform: `translateX(${inView1 ? 0 : 100}px)`
                }}>98% Accuracy</span>
                <h2 className="title" style={{
                  transition: '0.5s ease',
                  transitionDelay: '0.3s',
                  transform: `translateX(${inView1 ? 0 : 100}px)`
                }}>
                Trusted Agency for Innovative Software Solutions
                </h2>
              </div>
              <p ref={ref2} style={{
                  transition: '0.5s ease',
                  transform: `translateY(${inView2 ? 0 : 100}px)`
                }}>
              At We Solver, we pride ourselves on delivering exceptional software solutions tailored to meet the unique needs of businesses across the globe. Our commitment to quality and innovation has established us as a leader in the industry, ensuring our clients receive results that propel their success.
              </p>
              <div ref={ref3} className="consultation-list">
                <ul className="list-wrap">
                  <li style={{
                  transition: '0.5s ease',
                  transitionDelay: '0s',
                  transform: `translateY(${inView3 ? 0 : 100}px)`,
                  opacity: inView3? 1: 0
                }}>
                    <div className="icon">
                      <img src="/img/icon/consultation_icon02.png" alt="" />
                      <span>12x</span>
                    </div>
                    <div className="content">
                      <h6 className="title">Faster Order Processing</h6>
                    </div>
                  </li>
                  <li style={{
                  transition: '0.5s ease',
                  transitionDelay: '0.1s',
                  transform: `translateY(${inView3 ? 0 : 100}px)`,
                  opacity: inView3? 1: 0
                }}>
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
