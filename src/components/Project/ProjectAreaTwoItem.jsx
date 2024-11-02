import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ProjectAreaTwoItem = (props) => {
  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  return (
    <div ref={ref} className="project-item-two" style={{
      transition: '1s ease',
      transform: `translateY(${inView ? 0 : 50}px)`
    }}>
      <div className="project-thumb-two">
        <Link to={props.item.url}>
          <img src={props.item.src} alt="" />
        </Link>
      </div>
      <div className="project-content-two">
        <h2 className="title">
          <Link to={props.item.url}>{props.item.title}</Link>
        </h2>
        <span>{props.item.desc}</span>
      </div>
    </div>
  );
};

export default ProjectAreaTwoItem;
