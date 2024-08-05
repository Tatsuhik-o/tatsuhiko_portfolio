import React from "react";
import ServicesAreaItem from "./ServicesAreaItem";

const ServicesArea = () => {
  const services_two_items = [
    {
      src: "/img/icon/services_icon01.png",
      url: "https://en.wikipedia.org/wiki/Front-end_web_development",
      title: "Front-End",
      desc: "Offering cutting-edge front-end solutions with expertise in React and Tailwind for an engaging and responsive user experience.",
    },
    {
      src: "/img/icon/services_icon02.png",
      url: "https://en.wikipedia.org/wiki/Frontend_and_backend",
      title: "Back-End",
      desc: "Delivering robust back-end development using Ruby on Rails and Python to ensure seamless functionality and performance.",
    },
    {
      src: "/img/icon/services_icon03.png",
      url: "https://en.wikipedia.org/wiki/Web_design",
      title: "Web Design",
      desc: "Crafting visually appealing web designs that combine aesthetics with user-centric interfaces to enhance the overall user experience.",
    },
    {
      src: "/img/icon/services_icon04.png",
      url: "https://builtin.com/artificial-intelligence",
      title: "AI Developement",
      desc: "Specializing in AI to create intelligent solutions, leveraging the latest advancements in artificial intelligence technologies.",
    },
  ];

  return (
    <section className="services-area-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two white-title mb-65 text-center">
              <span className="sub-title">What I Do</span>
              <h2 className="title">What Service Do I Provide</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services_two_items.map((x, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <ServicesAreaItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
