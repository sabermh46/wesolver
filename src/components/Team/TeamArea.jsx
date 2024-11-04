import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const TeamArea = () => {
  const {ref: ref1, inView: inView1 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref2, inView: inView2 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref3, inView: inView3 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref4, inView: inView4 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref5, inView: inView5 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref6, inView: inView6 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref7, inView: inView7 } = useInView({threshold: 0.3, triggerOnce: false})
  const {ref: ref8, inView: inView8 } = useInView({threshold: 0.3, triggerOnce: false})

  return (
    <section className="team-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="team-img-wrap">
              <img
                src="/img/team/team_img_shape.png"
                alt=""
                className="img-shape"
              />
              <img ref={ref1} src="/img/team/team_img01.png" alt="" className="img-one" style={{
                transition: '0.5s ease',
                transform: `translateX(${inView1? 0 : -100}px)`
              }}/>
              <img ref={ref2} src="/img/team/team_img02.png" alt="" className="img-two" style={{
                transition: '0.5s ease',
                transform: `translateY(${inView2? 0 : -100}px)`
              }}/>
              <img ref={ref3}
                src="/img/team/team_img03.png"
                alt=""
                className="img-three"
                style={{
                  transition: '0.5s ease',
                  transform: `translateY(${inView3? 0 : 100}px)`
                }}
              />
              <img ref={ref4} src="/img/team/team_img04.png" alt="" className="img-four" style={{
                transition: '0.5s ease',
                transform: `translateY(${inView4? 0 : -100}px)`
              }}/>
              <img ref={ref5} src="/img/team/team_img05.png" alt="" className="img-five" style={{
                transition: '0.5s ease',
                transform: `translateX(${inView5? 0 : -100}px)`
              }}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-content">
              <div ref={ref6} className="section-title mb-25" style={{
                transition: '0.5s ease',
                transform: `translateX(${inView6? 0 : 100}px)`
              }}>
                <span className="sub-title">Our Team</span>
                <h2 className="title">
                Innovation Flourishes Where Creativity Meets Collaboration
                </h2>
              </div>
              <p ref={ref7} style={{
                transition: '0.5s ease',
                transform: `translateY(${inView7? 0 : 100}px)`
              }}>
              At We Solver, we understand that innovation thrives in an environment where creativity is encouraged and risks are embraced. Our team of skilled professionals brings a wealth of experience and diverse perspectives, collaborating seamlessly to transform challenges into groundbreaking solutions.
              </p>
              <Link ref={ref8} to="/team" className="btn" style={{
                transition: '0.5s ease',
                transform: `translateX(${inView8? 0 : 100}px)`
              }}>
                Meet Our Team <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="team-shape-wrap">
        <img
          src="/img/images/team_shape01.png"
          alt=""
          className="ribbonRotate"
        />
        <img
          src="/img/images/team_shape02.png"
          alt=""
          className="float-bob-x"
        />
      </div>
    </section>
  );
};

export default TeamArea;
