import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import SliderAreaItem from "./SliderAreaItem";
import ProjectAreaTwo from "../Project/ProjectAreaTwo";



const SliderArea = () => {
  const slick_settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    fade: true,
    arrows: false,
    speed: 500,
    responsive: [{ breakpoint: 767, settings: { dots: false, arrows: false } }],
  };
  const data = [
    {
      image: '/img/slider/slider_img01.png',
      title: 'Unlock Business Potential with Custom Software Solutions',
      des: 'We Solver is your premier partner for advanced business solutions, specializing in website and app development, security, maintenance, and DevOps. Our tailored software solutions leverage cutting-edge technology to enhance operational efficiency and drive sustainable growth for your business.',
    },
    {
      image: '/img/images/h2_about_img.png',
      title: 'Your Success, Our Commitment',
      des: 'At We Solver, we are dedicated to driving your success with advanced business solutions tailored to your specific needs. From optimizing operations to enhancing customer experiences, our expert team delivers impactful web, mobile, and enterprise software, utilizing the latest technologies to ensure your business stays ahead in a competitive landscape.',
    },
    {
      image: '/img/background/bg9.png',
      title: 'Next-Gen Solutions with Advanced Technology',
      des: 'Trusted partner for web development, app creation, UI/UX design, and business solutions. Let us build, innovate, and maintain custom digital solutions that drive growth, enhance engagement, and meet your business goals.',
    },
  ]

  return (
    <section className="slider-area">
      <div className="slider-active">
        <SlickSlider settings={slick_settings}>
          {
            data.map((d, i)=>{
              return <SliderAreaItem key={i} image={d.image} title={d.title} description={d.des}/>
            })
          }
        </SlickSlider>
      </div>

      <div className="slider-shape-wrap">
        <img src="/img/slider/slider_shape01.png" alt="" />
        <img src="/img/slider/slider_shape02.png" alt="" />
        <img src="/img/slider/slider_shape03.png" alt="" />
        <img src="/img/slider/slider_shape04.png" alt="" />
        <img src="/img/slider/slider_shape05.png" alt="" />
        <img src="/img/slider/slider_shape06.png" alt="" />
      </div>
    </section>
  );
};

export default SliderArea;
