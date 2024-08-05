import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaItem from "./TestimonialAreaItem";

const TestimonialArea = () => {
  const slick_settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const testimonial_items = [
    {
      desc: `‘’Taha's ability to complete tasks on time impressed me. His research was always meticulous and insightful, and his verification of information was always on point. highly recommend him”`,
      title: "Marwane El Ghamraoui",
      designation: "QT Team leader",
      src: "/img/images/testimonial_avatar02.png",
      rating: "notGood",
    },
    {
      desc: `‘’Taha has demonstrated solid and outstanding programming skills as well as an outstanding ability to work independently with great creativity and enthusiasm.”`,
      title: "Essaid Sabir",
      designation: "Associate Professor",
      src: "/img/images/testimonial_avatar01.png",
      rating: "",
    },
    {
      desc: `‘’It was a pleasure working with Taha on the Teamcenter installation and 3D design background setup. Throughout the duration of this project, Taha maintained a resolute attitude and attention to perfection.”`,
      title: "Stéphanie CUBERES",
      designation: "PLM HR Manager",
      src: "/img/images/testimonial_avatar03.png",
      rating: "",
    },
    {
      desc: `‘’Taha exceeded expectations, turning our visions into a stunning website 1 day ahead of schedule. A true expert and pleasure to work with.”`,
      title: "Koula Picmundo",
      designation: "Designer",
      src: "/img/images/testimonial_avatar04.png",
      rating: "",
    },
    {
      desc: `‘’Taha has demonstrated solid and outstanding programming skills as well as an outstanding ability to work independently with great creativity and enthusiasm.”`,
      title: "Essaid Sabir",
      designation: "Associate Professor",
      src: "/img/images/testimonial_avatar01.png",
      rating: "notGood",
    },
  ];

  return (
    <section className="testimonial-area-two pt-110 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title title-style-two white-title text-center mb-60">
              <span className="sub-title">Testimonial</span>
              <h2 className="title">What People Said About Me</h2>
            </div>
          </div>
        </div>

        <div className="row testimonial-active-two">
          <SlickSlider settings={slick_settings}>
            {testimonial_items.map((x, index) => (
              <div key={index} className="col-lg-3">
                <TestimonialAreaItem item={x} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
