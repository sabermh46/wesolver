import React from "react";
import AboutArea from "../../components/About/AboutArea";
// import BannerOne from "../../components/Banner/BannerOne";
import BlogArea from "../../components/Blog/BlogArea";
import ConsultationArea from "../../components/Consultation/ConsultationArea";
import NewsLetterArea from "../../components/NewsLetter/NewsLetterArea";
import ProjectArea from "../../components/Project/ProjectArea";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import TeamArea from "../../components/Team/TeamArea";
import TestimonialArea from "../../components/Testimonial/TestimonialArea";
import Layout from "../../layouts/Layout";
import SliderArea from "../../components/SliderArea/SliderArea";
import ServiceAreaThree from "../../components/ServicesArea/ServiceAreaThree";
import AgencyArea from "../../components/AgencyArea/AgencyArea";
import TestimonialAreaFive from "../../components/Testimonial/TestimonialAreaFive";
import ProjectAreaTwo from "../../components/Project/ProjectAreaTwo";
import TestimonialAreaFour from "../../components/Testimonial/TestimonialAreaFour";

const CreativeAgency = () => {
  return (
    <Layout header={1} footer={1}>
      <SliderArea />
      {/* <BannerOne /> */}
      {/* <ServicesArea /> */}
      <ServiceAreaThree />
      {/* <AboutArea /> */}
      <AgencyArea />
      <ProjectAreaTwo />
      {/* <ProjectArea /> */}
      {/* <TestimonialArea /> */}
      <TestimonialAreaFour />
      <TeamArea />
      <ConsultationArea />
      <BlogArea />
      <NewsLetterArea />
    </Layout>
  );
};

export default CreativeAgency;
