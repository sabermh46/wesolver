import React from "react";
import Layout from "../../layouts/Layout";


// import AboutArea from "../../components/About/AboutArea";
import SliderArea from "../../components/SliderArea/SliderArea";
import BannerOne from "../../components/Banner/BannerOne";
// import ServicesArea from "../../components/ServicesArea/ServicesArea";
import ServiceAreaThree from "../../components/ServicesArea/ServiceAreaThree";
import AgencyArea from "../../components/AgencyArea/AgencyArea";
// import ProjectArea from "../../components/Project/ProjectArea";
import ProjectAreaTwo from "../../components/Project/ProjectAreaTwo";
import TestimonialArea from "../../components/Testimonial/TestimonialArea";
// import TestimonialAreaFive from "../../components/Testimonial/TestimonialAreaFive";
//import TestimonialAreaFour from "../../components/Testimonial/TestimonialAreaFour";
import TeamArea from "../../components/Team/TeamArea";
import ConsultationArea from "../../components/Consultation/ConsultationArea";
import BlogArea from "../../components/Blog/BlogArea";
import NewsLetterArea from "../../components/NewsLetter/NewsLetterArea";

const CreativeAgency = () => {
  return (
    <Layout header={1} footer={1}>
      <SliderArea />
      {/* <AboutArea /> */}
      {/* <ServicesArea /> */}
      <ServiceAreaThree />
      <AgencyArea />
      <ProjectAreaTwo />
      {/* <ProjectArea /> */}
      {/*<TestimonialAreaFour />  */}
      <BannerOne />
      <TestimonialArea />
      <TeamArea />
      <ConsultationArea />
      <BlogArea />
      <NewsLetterArea />
    </Layout>
  );
};

export default CreativeAgency;
