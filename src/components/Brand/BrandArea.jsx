import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";

const BrandArea = () => {
  const slick_settings = {
    slidesToShow: 5,
  };

  return (
    <div className="brand-area">
      <div className="container">
        <div className="row brand-active">
          <SlickSlider settings={slick_settings}>
            {Array.from({ length: 5 }, (elem, idx) => idx + 1).map((x) => (
              <div key={x} className="col-12">
                <div className="brand-item">
                  <a
                    href={`https://bit.ly/Tatsuhiko_Company0${x}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={`/img/brand/brand_img0${x}.png`} alt="" />
                  </a>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
