import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ServiceAreaThreeItem = (props) => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  return (
    <div className="services-item-three">
      <div className="services-icon-three"
      ref={ref1}
      style={{
        transition: `0.5s ease`,
        transitionDelay: '0s',
        transform: `translateY(${inView1 ? 0 : 50}px)`,
      }}
      >
        <img src={props.item.src} alt="" />
      </div>

      <div className="services-content-three">
        <h3 className="title"
        style={{
          transition: `0.5s ease`,
          transitionDelay: '0.1s',
          transform: `translateY(${inView1 ? 0 : 50}px)`,
        }}
        >
          <Link to={props.item.url}>{props.item.title}</Link>
        </h3>

        <p style={{
        transition: `0.5s ease`,
        transitionDelay: '0.2s',
        transform: `translateY(${inView1 ? 0 : 50}px)`,
      }}>{props.item.desc}</p>

        <Link to={props.item.url} className="link-btn"
        style={{
          transition: `0.5s ease`,
          transitionDelay: '0.3s',
          transform: `translateY(${inView1 ? 0 : 50}px)`,
        }}
        >
          Learn More <i className="fal fa-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceAreaThreeItem;
