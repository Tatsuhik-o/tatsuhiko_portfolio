import React from "react";
import ProjectAreaTwoItem from "./ProjectAreaItem";
import cn from "classnames";

const ProjectArea = () => {
  const project_items = [
    {
      url: "https://safeguard.infinityfreeapp.com/",
      src: "/img/project/h2_project_img01.jpg",
      title: "SafeGuard",
      desc: "Cyber Security Service",
      className: "cat-one",
    },
    {
      url: "https://bloomwise.infinityfreeapp.com/",
      src: "/img/project/h2_project_img02.jpg",
      title: "Blmoomwise",
      desc: "Gardening Service",
      className: "cat-one",
    },
    {
      url: "https://secureview.infinityfreeapp.com/",
      src: "/img/project/h2_project_img03.jpg",
      title: "SecureView",
      desc: "CCTV Camera Company",
      className: "cat-one",
    },
    {
      url: "https://olivastra.infinityfreeapp.com/",
      src: "/img/project/h2_project_img04.jpg",
      title: "Olivastra",
      desc: "Olive Oil Shop",
      className: "cat-two",
    },
    {
      url: "https://starstruck.infinityfreeapp.com/",
      src: "/img/project/h2_project_img09.jpg",
      title: "Star Struck",
      desc: "January Biggest Art Event In Paris",
      className: "cat-two",
    },
    {
      url: "https://newsonjapan.great-site.net/",
      src: "/img/project/h2_project_img06.jpg",
      title: "News On Japan",
      desc: "Biggest News Agency In Japan",
      className: "cat-three",
    },
    {
      url: "https://shamashahiy.infinityfreeapp.com/",
      src: "/img/project/h2_project_img07.jpg",
      title: "الشام الشهي",
      desc: "مذاق سوريا الأصيل",
      className: "cat-three",
    },
    {
      url: "https://cyresearch.42web.io/",
      src: "/img/project/h2_project_img08.jpg",
      title: "CY CERGY Research",
      desc: "Research Facility for CY University",
      className: "cat-three",
    },
    {
      url: "https://zawaj.free.nf",
      src: "/img/project/h2_project_img05.jpg",
      title: "عدسة النور",
      desc: "لتصوير حفل الزفاف",
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
