import React from "react";
import { useInView } from "react-intersection-observer";
import '../../styles/odom.css'
import CountUp from "react-countup";
const CounterAreaThreeItem = (props) => {

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1

  })

  return (
    <>
      <div ref={ref} className="counter-item-three"
      style={{
        transition: '0.5s ease',
        transform: `scale(${inView? 1 : 0.3})`
      }}
      >
        <div className="icon">
          <img src={props.item.src} alt="" />
        </div>
        <div className="content">
          <h2 className="count">
            <span className="odometer">
              <CountUp duration={2} end={inView ? props.amount : 0} />
            </span>
            +
          </h2>
          <p>
            {props.item.titles[0]} <span>{props.item.titles[1]}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CounterAreaThreeItem;
