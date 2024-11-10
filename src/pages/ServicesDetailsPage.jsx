import React from "react";
//import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
//import CaseStudy from "../components/CaseStudy/CaseStudy";
import CompanyArea from "../components/CompanyArea/CompanyArea";
//import CounterAreaFour from "../components/CounterArea/CounterAreaFour";
import NewsLetterArea from "../components/NewsLetter/NewsLetterArea";
import InnerProjectArea from "../components/Project/InnerProjectArea";
//import ServicesDetailsArea from "../components/ServicesArea/ServicesDetailsArea";
import MyClientArea from "../components/ClientArea/MyClientArea";
//import ToolsArea from "../components/ToolsArea/ToolsArea";
import LanguageUse from "../components/Project/LanguageUse";

import Layout from "../layouts/Layout";

const ServicesDetailsPage = () => {
  return (
    <Layout header={1} footer={1} className="" mainClassName="">
      { /* <BreadcrumbArea
        title={"Web Design"}
        subtitle={"Service Details"}
        className={"breadcrumb-area-two pt-175"}
        showShape={false}
      /> 
      <ServicesDetailsArea />
      <CaseStudy />
      <CounterAreaFour />
      <ToolsArea />

      */}
      <MyClientArea />
      <CompanyArea />
      <InnerProjectArea />
      <LanguageUse />
      <NewsLetterArea />
    </Layout>
  );
};

export default ServicesDetailsPage;
