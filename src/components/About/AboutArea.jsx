import React from "react";
import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";

const AboutArea = () => {
  const parallax = useParallax({
    translateY: [-24, 24],
    rootMargin: 0,
  });

  return (
    <section className="about-area-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="about-img-two text-center">
              <img src="/img/images/h2_about_img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-two">
              <div className="section-title white-title title-style-two mb-30">
                <span className="sub-title">About Me</span>
                <h2 className="title">Web Developer</h2>
              </div>
              <p>
                An accomplished software engineer with six years of extensive
                experience in web development. Expertise in delivering solutions
                ranging from single-page web applications to multi-commerce
                platforms. Recognized for strong communication and collaboration
                skills, fostering favorable rapport with clients, stakeholders,
                and regulators. Consistently achieves project milestones within
                defined scopes, budgets, and timelines.
              </p>
              <Link to="https://github.com/Tatsuhik-o" target="_blank">
                <span className="arrow">
                  <img src="/img/icon/right_arrow.png" alt="" />
                </span>
                <span className="text">Github Repo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img
          src="/img/images/h2_about_shape01.png"
          alt=""
          className="shape-one"
          ref={parallax.ref}
        />
        <img
          src="/img/images/h2_about_shape02.png"
          alt=""
          className="shape-two"
        />
        <img
          src="/img/images/h2_about_shape03.png"
          alt=""
          className="shape-three"
        />
      </div>
    </section>
  );
};

export default AboutArea;
