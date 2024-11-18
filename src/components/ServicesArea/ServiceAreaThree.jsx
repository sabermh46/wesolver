import React, { useState, useEffect } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import ServiceAreaThreeItem from "./ServiceAreaThreeItem";
import { useInView } from "react-intersection-observer";

const ServiceAreaThree = () => {
    const services = [
        {
            title: "Web Development",
            desc: "Developing responsive, scalable websites with React, Node.js, Django and Laravel",
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
            desc: "Developing software solutions that address unique business challenges.",
            src: "/img/services/software.png",
            url: "/services-details",
        },
        {
            title: "UI/UX Design",
            desc: "Creating intuitive UI/UX designs that enhance user satisfaction",
            src: "/img/services/ui-ux.png",
            url: "/services-details",
        },
        {
            title: "Graphic Design",
            desc: "Designing captivating graphics that effectively communicate your brand message.",
            src: "/img/services/graphics.png",
            url: "/services-details",
        },
        {
            title: "Cybersecurity Services",
            desc: "Implementing security assessments, vulnerability testing, and security protocols.",
            src: "/img/services/security.png",
            url: "/services-details",
        },
        {
            title: "DevOps Services",
            desc: "Development through CI/CD pipelines, automation, and infrastructure management.",
            src: "/img/services/devops.png",
            url: "/services-details",
        },
        {
            title: "Artificial Intelligence",
            desc: "Utilizing AI technologies like machine learning and natural language processing.",
            src: "/img/services/ai.png",
            url: "/services-details",
        },
        {
            title: "E-commerce Solutions",
            desc: "Comprehensive e-commerce platforms with secure payment processing, and user-friendly interfaces",
            src: "/img/services/e-commerce.png",
            url: "/services-details",
        },
    ];

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false,
    });
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.3,
        triggerOnce: false,
    });

    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
        if (inView) {
            setAutoplay(true);
            console.log("trig");
        }
    }, [inView]);

    // const slick_settings = ;

    return (
        <section className="services-area-three">
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        ref={ref}
                        className="col-xl-6 col-lg-7"
                        style={{
                            transition: `0.5s ease`,
                            transform: `translateY(${inView ? 0 : 50}px)`,
                        }}
                    >
                        <div className="section-title title-style-two text-center mb-45">
                            <h2 className="title">
                                Your Achievement, <br />{" "}
                                <span>Our Promise</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div
                    ref={ref1}
                    className="services-item-wrap"
                    style={{
                        transition: `0.5s ease`,
                        transitionDelay: "0s",
                        transform: `translateY(${inView1 ? 0 : 50}px)`,
                    }}
                >
                    <div className="row services-active services-active-three">
                        <SlickSlider
                            settings={{
                                dots: true,
                                infinite: true,
                                speed: 500,
                                autoplay: autoplay ? true : false,
                                arrows: true,
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
                            }}
                        >
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
