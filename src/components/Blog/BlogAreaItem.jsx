import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const BlogAreaItem = (props) => {
  const {ref: ref1, inView: inView1 } = useInView({ threshold: 0.3, triggerOnce: false})
  
  return (
    <div ref={ref1} className="blog-post-item"  style={{
      transition: '0.5s ease',
      transform: `translateY(${inView1 ? 0 : 100}px)`
    }}>
      <div className="blog-post-thumb">
        <Link to="/blog-details">
          <img src={props.item.src} alt="" />
        </Link>
      </div>
      <div className="blog-post-content">
        <Link to="/blog" className="tag">
          {props.item.tag}
        </Link>
        <h2 className="title">
          <Link to="/blog-details">{props.item.title}</Link>
        </h2>
        <div className="blog-meta">
          <ul className="list-wrap">
            <li className="avatar-img">
              <Link to="/blog">
                <img src={props.item.author_img} alt="" />
              </Link>
            </li>
            <li>
              By <Link to="/blog">{props.item.author_name}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogAreaItem;
