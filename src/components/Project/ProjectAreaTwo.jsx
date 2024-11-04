import React, { useState } from "react";
import ProjectAreaTwoItem from "./ProjectAreaTwoItem";
import cn from "classnames";

const ProjectAreaTwo = () => {
  const project_items = [
    
    {
      url: "/project-details",
      src: "/img/portfolio/app1.jpg",
      title: "App Design",
      desc: "Food Delivery App",
      className: "cat-one",
    },
    {
      url: "/project-details",
      src: "/img/portfolio/web2.png",
      title: "Web Design",
      desc: "Medical Website",
      className: "cat-two cat-five",
    },
    {
      url: "/project-details",
      src: "/img/portfolio/app2.png",
      title: "App Design",
      desc: "Transport App",
      className: "cat-one cat-four",
    },
    {
      url: "/project-details",
      src: "/img/portfolio/ecommerce1.png",
      title: "Web Design",
      desc: "Ecommerce Website",
      className: "cat-two cat-three",
    },
    {
      url: "/project-details",
      src: "/img/portfolio/web4.png",
      title: "Software",
      desc: "Chating Application",
      className: "cat-two cat-four",
    },
    {
      url: "/project-details",
      src: "/img/portfolio/app3.jpg",
      title: "App Design",
      desc: "Service App",
      className: "cat-one cat-five",
    },
    {
      url: "/project-details",
      src: "/img/portfolio/web5.jpg",
      title: "web Design",
      desc: "Car Shop",
      className: "cat-two cat-three",
    },
    {
      url: "/project-details",
      src: "/img/portfolio/web6.png",
      title: "software",
      desc: "Inventory Management",
      className: "cat-two cat-four",
    },
    {
      url: "/project-details",
      src: "/img/portfolio/web1.jpg",
      title: "Web Design",
      desc: "Ecommerce Website",
      className: "cat-two cat-three",
    },
  ];

  const filters = [
    {
      filter: "*",
      label: "View All",
    },
    {
      filter: "cat-one",
      label: "App",
    },
    {
      filter: "cat-two",
      label: "Website",
    },
    {
      filter: "cat-three",
      label: "E-Commerce",
    },
    {
      filter: "cat-four",
      label: "Software",
    },
    {
      filter: "cat-five",
      label: "Product Design",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("*");

  const [items, setItems] = useState(project_items);

  const handleFilterChange = (filter) => {
    const newItems = project_items.filter((el) =>
      el.className.split(" ").includes(filter)
    );
    setSelectedFilter(filter);
    setItems(filter === "*" ? project_items : newItems);
  };

  return (
    <section className="project-area-two pt-110 pb-90" style={{background: 'var(--tg-black)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title title-style-two white-title mb-60 text-center">
             { /* <span className="sub-title" style={{ color: 'var(--tg-primary-color)'}}>Portfolio</span> */}
              <h2 className="title">You’ll love these projects designed by We Solver</h2>
              <p>
              Explore the breadth of our capabilities through We Solver's portfolio. From dynamic mobile applications to engaging web platforms, each project exemplifies our focus on delivering tailored solutions that enhance user engagement and business performance.
              </p>
            </div>
          </div>
        </div>

        <div className="project-item-wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-menu-nav">
                {filters.map((x, index) => (
                  <button
                    key={index}
                    className={x.filter === selectedFilter ? "active" : ""}
                    data-filter={x.filter}
                    onClick={() => handleFilterChange(x.filter)}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row project-active-two">
            {items.map((x, index) => (
              <div
                key={index}
                className={cn(
                  "col-lg-4 col-md-6 grid-item grid-sizer",
                  x.className
                )}

              >
                <ProjectAreaTwoItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="project-shape">
        <img src="/img/project/h2_project_shape.png" alt="" />
      </div>
    </section>
  );
};

export default ProjectAreaTwo;
