import React from "react";
import { useParallax } from "react-scroll-parallax";

const WorkArea = () => {
  const parallax = useParallax({
    translateY: [-24, 24],
    rootMargin: 0,
  });

  const work_list = [
    {
      src: "/img/icon/about_icon01.png",
      title: "Planning and Requirement Analysis",
      desc: "Define project goals and objectives, gather detailed specifications, and plan site architecture for optimal user experience.",
    },
    {
      src: "/img/icon/about_icon02.png",
      title: "Design and Development",
      desc: "Create visual prototypes, implement responsive front-end design, and develop back-end functionality and database integration.",
    },
    {
      src: "/img/icon/about_icon03.png",
      title: "Testing and Deployment",
      desc: "Conduct thorough testing for functionality and security, optimize performance, and deploy while monitoring for post-launch issues.",
    },
  ];

  return (
    <section className="work-area pt-110 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="work-img text-center">
              <img src="/img/images/work_img.png" alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="work-content">
              <div className="section-title title-style-two white-title mb-30">
                <span className="sub-title">My Working Process</span>
              </div>

              <div className="work-list">
                <ul className="list-wrap">
                  {work_list.map((x, index) => (
                    <li key={index}>
                      <div className="icon">
                        <img src={x.src} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">{x.title}</h4>
                        <p>{x.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-shape-wrap">
        <img src="/img/images/work_shape01.png" alt="" />
        <img src="/img/images/work_shape02.png" alt="" ref={parallax.ref} />
        <img src="/img/images/work_shape03.png" alt="" />
        <img src="/img/images/work_shape04.png" alt="" />
        <img src="/img/images/work_shape05.png" alt="" />
      </div>
    </section>
  );
};

export default WorkArea;
