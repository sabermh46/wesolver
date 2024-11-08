import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { useInView } from "react-intersection-observer";

const BreadcrumbArea = ({
  title,
  subtitle,
  showShape = true,
  className,
  showShapeThree,
}) => {

  const settingIO = {
    triggerOnce: false,
    threshold: 0.1
  }

  const { ref: ref1, inView: iV1} = useInView(settingIO)

  return (
    <section className={cn("breadcrumb-area", className)}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 ref={ref1} className="title"
              style={{
                transition: '0.5s ease',
                transform: `translateY(${iV1? 0 : -50}px)`
              }}
              >{title}</h2>

              <nav aria-label="breadcrumb"
              style={{
                transition: '0.5s ease',
                transform: `scaleX(${iV1? 1 : 0.3})`,
                opacity: iV1? 1 : 0.3
              }}
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    {subtitle}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {showShape && (
        <div className="breadcrumb-shape-wrap">
          <img src="/img/images/breadcrumb_shape01.png" alt="" />
          <img src="/img/images/breadcrumb_shape02.png" alt="" />
        </div>
      )}

      {showShapeThree && (
        <div className="breadcrumb-shape-wrap-three">
          <img
            src="/img/images/breadcrumb_shape04.png"
            alt=""
            className="wow zoomIn"
            data-wow-delay=".2s"
          />
          <img
            src="/img/images/breadcrumb_shape05.png"
            alt=""
            className="wow zoomIn"
            data-wow-delay=".2s"
          />
          <img
            src="/img/images/breadcrumb_shape06.png"
            alt=""
            className="wow zoomIn"
            data-wow-delay=".2s"
          />
        </div>
      )}
    </section>
  );
};

export default BreadcrumbArea;
