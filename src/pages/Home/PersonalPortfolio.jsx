import React from "react";
import Layout from "../../layouts/Layout";
import Banner from "../../components/Banner/BannerArea";
import Brand from "../../components/Brand/BrandArea";
import About from "../../components/About/AboutArea";
import Counter from "../../components/Counter/CounterArea";
import Services from "../../components/Services/ServicesArea";
import Project from "../../components/Project/ProjectArea";
import Work from "../../components/Work/WorkArea";
import Testimonial from "../../components/Testimonial/TestimonialArea";
import Novel from "../../components/Novel/NovelArea";
import Contact from "../../components/Contact/ContactArea";

const PersonalPortfolio = () => {
  return (
    <Layout header={2} footer={2} className="black-background">
      <Banner />
      <Brand />
      <About />
      <Counter />
      <Services />
      <Project />
      <Work />
      <Testimonial />
      <Novel />
      <Contact />
    </Layout>
  );
};

export default PersonalPortfolio;
