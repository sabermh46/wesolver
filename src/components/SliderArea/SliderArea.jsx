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
      title: 'Next-Gen Solutions with Advanced Technology',
      des: 'Trusted partner for web development, app creation, UI/UX design, and business solutions. Let us build, innovate, and maintain custom digital solutions that drive growth, enhance engagement, and meet your business goals.',
    },
    {
      image: '/img/slider/slider_img01.png',
      title: 'Solving Real Problems with Real Solutions',
      des: 'Transform your business with smart, tailored solutions crafted by We Solver. From optimizing operations to enhancing customer experiences, our expert team delivers impactful web, mobile, and enterprise software using the latest technologies.',
    },
    {
      image: '/img/slider/slider_img01.png',
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
