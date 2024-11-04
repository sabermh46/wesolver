import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const AgencyArea = () => {

  const {ref: ref1, inView: inView1 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref2, inView: inView2 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref3, inView: inView3 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref4, inView: inView4 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref5, inView: inView5 } = useInView({threshold: 0.3, triggerOnce: false})
  return (
    <section className="agency-area pt-120" style={{paddingBottom: '50px'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="agency-img text-center">
              <img ref={ref1} src="/img/background/bg2.png" alt="" style={{transition: '0.5s ease', transform: `translateX(${inView1? 0: -100}px)`}} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="agency-content">
              <div className="section-title title-style-two mb-20">
                { /* <span className="sub-title">Our Agency</span> */}
                <h2 ref={ref2} className="title" style={{transition: '0.5s ease', transform: `translateX(${inView2? 0: 100}px)`}}>Best Online Agency Since 2020</h2>
              </div>
              <p ref={ref3} className="info-one" style={{transition: '0.5s ease', transform: `translateY(${inView3? 0: 100}px)`}}>
              We Solver has established itself as a leader in delivering cutting-edge digital solutions. Specializing in web and mobile app development, UI/UX design, and advanced AI applications,
              </p>
              <p ref={ref4} className="info-two" style={{transition: '0.5s ease', transform: `translateY(${inView4? 0: 100}px)`}}>
              Our commitment to innovation and client satisfaction ensures that we provide tailored solutions that not only meet but exceed your business goals.
              </p>

              <Link ref={ref5} to="/about-us" className="btn" style={{transition: '0.5s ease', transform: `translateX(${inView5? 0: -100}px)`}}>
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
