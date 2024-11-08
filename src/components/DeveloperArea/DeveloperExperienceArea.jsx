import React from "react";
import { useInView } from "react-intersection-observer";

const DeveloperExperienceArea = () => {

  const settingIO = {
    triggerOnce: false,
    threshold: 0.5
  }
  const { ref: ref1, inView: iV1} = useInView(settingIO)
  const { ref: ref2, inView: iV2} = useInView(settingIO)

  return (
    <div className="developr-img ">
      <img style={{
                transition: '0.5s ease',
                transform: `translateY(${(iV1 || iV2 ) ? 0 : -50}px)`,
                opacity: (iV1 || iV2 ) ? 1 : 0.3
                
              }}
       src="/img/images/developer_img.png" alt="" />
      <div ref={ref1} className="work-experience-wrap"
      style={{
        transition: '0.5s ease',
        transform: `translateX(${iV1? 0 : -50}px)`
      }}
      >
        <h2 className="count ">
          <span className="odometer" data-count="18"></span>5 +
        </h2>
        <p>Years Of Experience</p>
      </div>
      <div ref={ref2} className="project-completed-wrap"
      style={{
        transition: '0.5s ease',
        transform: `translateX(${iV2? 0 : 50}px)`
      }}
      >
        <h2 className="count">
          <span className="odometer" data-count="100">50</span>+
        </h2>
        <p>Have Faithfully Completed Projects Till Date</p>
      </div>
    </div>
  );
};

export default DeveloperExperienceArea;
