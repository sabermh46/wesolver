import React from "react";
import IndustryServicesAreaItem from "./IndustryServicesAreaItem";

const IndustryServicesArea = () => {
  const inner_services = [
    {
      src: "/img/icon/inner_services_icon01.png",
      url: "/services-details",
      title: "Health Care",
    },
    {
      src: "/img/icon/inner_services_icon02.png",
      url: "/services-details",
      title: "E-Commerce",
    },
    {

      src: "/img/icon/inner_services_icon03.png",
      url: "/services-details",
      title: "Real Estate",
    },
    {
      src: "/img/icon/inner_services_icon04.png",
      url: "/services-details",
      title: "Financial Services",
    },
    {
      src: "/img/icon/inner_services_icon05.png",
      url: "/services-details",
      title: "Custom Software",
    },
    {
      src: "/img/icon/inner_services_icon06.png",
      url: "/services-details",
      title: "Marketing",
    },
    {
      src: "/img/icon/inner_services_icon07.png",
      url: "/services-details",
      title: "Automotive",
    },
    {
      src: "/img/icon/inner_services_icon08.png",
      url: "/services-details",
      title: "Strategy Services",
    },
  ];

  return (
    <section className="inner-services-area pt-110 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title title-style-two text-center mb-60">
              <h2 className="title">Industry We Serve</h2>
              <span className="sub-title" style={{ color: "#fba25c" ,paddingTop: "20px"}}>Connecting Your Business to the Digital World</span>
            </div>
          </div>
        </div>

        <div className="inner-services-item-wrap">
          <div className="row justify-content-center">
            {inner_services.map((x, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <IndustryServicesAreaItem item={x} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServicesArea;
