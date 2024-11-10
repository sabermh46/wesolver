import React from "react";
import { useParallax } from "react-scroll-parallax";

const CompanyArea = () => {
  const parallax = useParallax({
    translateX: [-24, 24],
    rootMargin: 0,
  });

  return (
    <section className="company-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title white-title text-center mb-65">
              <h2 className="title">
                We Create Creative Solution For Every Buisness
              </h2>
              <p>
              we develop tailored software solutions that address the unique needs of your business, driving growth and efficiency with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="company-img">
              <img src="/img/images/company_img01.png" alt="" />
              <img
                src="/img/images/company_img02.png"
                alt=""
                data-parallax='{"x" : 120 }'
                ref={parallax.ref}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="company-content">
              <h2 className="title">All Your Services Are Here</h2>
              <div className="company-list">
                <ul className="list-wrap">
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Responsive and Scalable Websites                 
                    </li>
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Intuitive and High-performing Mobile Apps                  
                    </li>
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Software Solutions for Every Business                  
                    </li>
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Securing Digital Assets with Cyber Security Services                 </li>
                </ul>
              </div>
              <a href="about-me.html" className="btn">
                Let's Talk <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="company-shape-wrap">
        <img src="/img/images/company_shape.png" alt="" />
      </div>
    </section>
  );
};

export default CompanyArea;
