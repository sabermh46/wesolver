import React from "react";
import BlogAreaItem from "./BlogAreaItem";
import { useInView } from "react-intersection-observer";

const BlogArea = () => {
  const blog_area_items = [
    {
      src: "/img/background/bg6.png",
      tag: "Branding",
      title: "How To Create JavaScript Vanilla Gantt Chart: Adding",
      author_img: "/img/blog/blog_avatar01.png",
      author_name: "Ataur",
    },
    {
      src: "/img/background/bg3.png",
      tag: "Branding",
      title: "How To Create JavaScript Vanilla Gantt Chart: Adding",
      author_img: "/img/blog/blog_avatar02.png",
      author_name: "Ataur",
    },
    {
      src: "/img/background/bg8.png",
      tag: "Branding",
      title: "How To Create JavaScript Vanilla Gantt Chart: Adding",
      author_img: "/img/blog/blog_avatar03.png",
      author_name: "Ataur",
    },
  ];

  const {ref: ref1, inView: inView1 } = useInView({ threshold: 0.3, triggerOnce: false})
  const {ref: ref2, inView: inView2 } = useInView({ threshold: 0.3, triggerOnce: false})

  return (
    <section className="blog-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-50">
             { /* <span className="sub-title">My Blog</span> */}
              <h2 ref={ref1} className="title" style={{
                transition: '0.5s ease',
                transform: `translateX(${inView1 ? 0 : -100}px)`
              }}>News & Updates</h2>
              <p ref={ref2} style={{
                transition: '0.5s ease',
                transform: `translateX(${inView2 ? 0 : 100}px)`
              }}>
              Welcome to the We Solver blog, where we share the latest news, insights, and updates from the world of technology and software development.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blog_area_items.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <BlogAreaItem item={x} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
