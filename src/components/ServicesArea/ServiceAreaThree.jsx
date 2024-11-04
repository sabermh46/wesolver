import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import ServiceAreaThreeItem from "./ServiceAreaThreeItem";
import { useInView } from "react-intersection-observer";

const ServiceAreaThree = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Developing responsive, scalable websites with  React, Node.js, Django and Laravel",
      src: "/img/services/web.png",
      url: "/services-details",
    },
    {
      title: "Mobile App Development",
      desc: "Creating user-friendly mobile applications for both iOS and Android platforms",
      src: "/img/services/app.png",
      url: "/services-details",
    },
    {
      title: "Custom Software Development",
      desc: "Developing software solutions that address unique business challenges, such as inventory management systems or CRM platforms",
      src: "/img/services/software.png",
      url: "/services-details",
    },
    {
      title: "UI/UX Design",
      desc: "Creating intuitive UI/UX designs that enhance user satisfaction and drive engagement across digital platforms",
      src: "/img/services/ui-ux.png",
      url: "/services-details",
    },
    {
      title: "Graphic Design",
      desc: "Designing captivating graphics that effectively communicate your brand message and enhance visual storytelling",
      src: "/img/services/graphics.png",
      url: "/services-details",
    },
    {
      title: "Cybersecurity Services",
      desc: "Providing security assessments, vulnerability testing, and implementing security protocols to protect sensitive business data",
      src: "/img/services/security.png",
      url: "/services-details",
    },
    {
      title: "DevOps Services",
      desc: "Development through CI/CD pipelines, automation, and infrastructure management to improve application reliability",
      src: "/img/services/devops.png",
      url: "/services-details",
    },
    {
      title: "Artificial Intelligence",
      desc: "Utilizing AI technologies like machine learning and natural language processing to create intelligent solutions",
      src: "/img/services/ai.png",
      url: "/services-details",
    },
    {
      title: "E-commerce Solutions",
      desc: "Developing comprehensive e-commerce platforms with secure payment processing, inventory management, and user-friendly interfaces",
      src: "/img/services/e-commerce.png",
      url: "/services-details",
    },
  ];

  const slick_settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const {ref, inView} = useInView({
    threshold: 0.4,
    triggerOnce: false
  })

  return (
    <section className="services-area-three" >
      <div className="container">
        <div className="row justify-content-center">
          <div ref={ref} className="col-xl-6 col-lg-7" style={{ transition: `0.5s ease`,transform: `translateY(${inView ? 0 : 50}px)`}}>
            <div className="section-title title-style-two text-center mb-45">
              { /*<span className="sub-title">What We Do</span>*/}
              <h2 className="title">
              Your Achievement, <br /> <span>Our Promise</span> <br />
               Real Problems with Real Solutions
              </h2>
              {/* <p>
              Trusted partner for web development, app creation, UI/UX design, and business solutions. Let us build, innovate, and maintain custom digital solutions that drive growth, enhance engagement, and meet your business goals.
              </p> */}
            </div>
          </div>
        </div>

        <div className="services-item-wrap">
          <div className="row services-active services-active-three">
            <SlickSlider settings={slick_settings}>
              {services.map((x, index) => (
                <div key={index} className="col-lg-4">
                  <ServiceAreaThreeItem item={x} />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>

      <div className="services-shape">
        <img src="/img/images/h3_services_shape.png" alt="" />
      </div>
    </section>
  );
};

export default ServiceAreaThree;
