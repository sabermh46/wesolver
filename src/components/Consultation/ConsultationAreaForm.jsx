import React from "react";
import { useInView } from "react-intersection-observer";

const ConsultationAreaForm = () => {
  const {ref: ref1, inView: inView1 } = useInView({threshold: 0.3, triggerOnce: false})
  return (
    <div className="consultation-form-wrap" ref={ref1}>
      <h4 className="title" style={{
        transition: '0.5s ease',
        transitionDelay: '0s',
        transform: `translateX(${inView1? 0 : 100}px)`
      }}>Free Consultation</h4>
      <form action="#">
        <div className="form-grp" style={{
        transition: '0.5s ease',
        transitionDelay: '0.1s',
        transform: `translateY(${inView1? 0 : 50}px)`
      }}>
          <input type="text" placeholder="Name" />
        </div>
        <div className="form-grp" style={{
        transition: '0.5s ease',
        transitionDelay: '0.2s',
        transform: `translateY(${inView1? 0 : 50}px)`
      }}>
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="form-grp" style={{
        transition: '0.5s ease',
        transitionDelay: '0.3s',
        transform: `translateY(${inView1? 0 : 50}px)`
      }}>
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="form-grp" style={{
        transition: '0.5s ease',
        transitionDelay: '0.4s',
        transform: `translateY(${inView1? 0 : 50}px)`
      }}>
          <select
            id="shortBy"
            name="select"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="">Services</option>
            <option>Web Development</option>
            <option>App Development</option>
            <option>Software development</option>
            <option>UI/UX Design</option>
          </select>
        </div>
        <button className="btn" type="submit">
          Consultation
        </button>
      </form>
    </div>
  );
};

export default ConsultationAreaForm;
