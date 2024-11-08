import React from "react";
import DeveloperExperienceArea from "./DeveloperExperienceArea";
import { useInView } from "react-intersection-observer";

const DeveloperAreaThree = () => {

  const settingIO = {
    triggerOnce: false,
    threshold: 0.5
  }

  const { ref: ref1, inView: iV1} = useInView(settingIO)
  const { ref: ref2, inView: iV2} = useInView(settingIO)
  const { ref: ref3, inView: iV3} = useInView(settingIO)
  const { ref: ref4, inView: iV4} = useInView(settingIO)

  const icons = [
    "fab fa-twitter",
    "fab fa-facebook-square",
    "fab fa-instagram",
    "fab fa-pinterest-p",
    "fab fa-vimeo-v"
  ]

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
                <span ref={ref1} className="sub-title"
                style={{
                  transition: '0.5s ease',
                  transform: `translateX(${iV1 ? 0 : 50}px)`
                }}
                >Who We Are </span>
                <h2 ref={ref2} className="title"
                style={{
                  transition: '0.5s ease',
                  transform: `translateX(${iV2 ? 0 : 50}px)`
                }}
                >
                  We Design and Develop Web and Mobile Applications
                </h2>
              </div>
              <p ref={ref3}
              style={{
                transition: '0.5s ease',
                transform: `translateX(${iV3 ? 0 : 50}px)`
              }}
              >
              <strong
              style={{
                transition: '0.5s ease',
                fontSize: `${iV3 ? 20 : 3}px`
              }}
              >We Solver </strong> is one of the leading software agencies. With over 5+ years of experience, we deliver innovative and customized software solutions. Our journey is fueled by a deep passion for technology and a commitment to excellence, empowering our clients to successfully navigate the complexities of the digital world.
              </p>

              <div className="developr-social">
                <ul ref={ref4} className="list-wrap">
                  {
                    icons.map((icon, i)=>{
                      return (
                        <li key={i}
                        style={{
                          transition: '0.5s ease',
                          transitionDelay: `${0.1 * i}s`,
                          transform: `translateY(${iV3 ? 0 : 100}px)`
                        }}
                        >
                        <a href="/">
                          <i className={icon}></i>
                          
                        </a>
                      </li>
                      )
                    })
                  }
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
