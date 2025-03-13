import React from "react";
import ProjectAreaTwoItem from "./ProjectAreaItem";
import cn from "classnames";

const ProjectArea = () => {
  const project_items = [
    {
      url: "https://banki-six.vercel.app/",
      src: "/img/project/h2_project_img01.png",
      title: "Banki",
      desc: "Banking Dashboard App",
      className: "cat-one",
    },
    {
      url: "https://luxeclub.vercel.app/",
      src: "/img/project/h2_project_img02.png",
      title: "Luxeclub",
      desc: "Booking & Planning App",
      className: "cat-one",
    },
    {
      url: "https://wordle-nine-omega.vercel.app/",
      src: "/img/project/h2_project_img03.png",
      title: "Wordle",
      desc: "Famous Word Game",
      className: "cat-one",
    },
    {
      url: "https://safeguard-livid.vercel.app/",
      src: "/img/project/h2_project_img04.jpg",
      title: "SafeGuard",
      desc: "Cyber Security Service",
      className: "cat-one",
    },
    {
      url: "https://bloomwise.vercel.app/",
      src: "/img/project/h2_project_img05.jpg",
      title: "Blmoomwise",
      desc: "Gardening Service",
      className: "cat-one",
    },
    {
      url: "https://cy-cergy-liart.vercel.app/",
      src: "/img/project/h2_project_img06.jpg",
      title: "CY CERGY Research",
      desc: "Research Facility for CY University",
      className: "cat-three",
    },
  ];

  return (
    <section className="project-area-two pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title title-style-two white-title mb-60 text-center">
              <span className="sub-title">Portfolio</span>
            </div>
          </div>
        </div>

        <div className="project-item-wrap">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>

          <div className="row project-active-two">
            {project_items.map((x, index) => (
              <div
                key={index}
                className={cn(
                  "col-lg-4 col-md-6 grid-item grid-sizer  wow fadeInUp",
                  x.className
                )}
              >
                <ProjectAreaTwoItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="project-shape">
        <img src="/img/project/h2_project_shape.png" alt="" />
      </div>
    </section>
  );
};

export default ProjectArea;
