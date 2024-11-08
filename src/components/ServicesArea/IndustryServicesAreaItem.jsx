import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const IndustryServicesAreaItem = ({ item, index }) => {

  const settingIO = {
    triggerOnce: false,
    threshold: 0.1
  }

  const { ref: ref1, inView: iV1} = useInView(settingIO)


  return (
    <div ref={ref1} className="services-item-four"
    style={{
      transition: '0.5s ease',
      transitionDelay: `${index * 0.1}s`,
      transform: `translateY(${iV1? 0 : 50}px)`
    }}
    >
      <div className="services-icon-four">
        <img src={item.src} alt="" />
      </div>
      <div className="services-content-four">
        <h2 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h2>
        { /* <p>{item.desc}</p> */ }
      </div>
    </div>
  );
};

export default IndustryServicesAreaItem;
