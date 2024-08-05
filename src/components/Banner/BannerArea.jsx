import React from "react";

const BannerArea = () => {
  return (
    <section className="banner-area-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-5">
            <div className="banner-img-two">
              <img src="/img/banner/h2_banner_img.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="banner-content-two">
              <span className="sub-title">Hi, I am Taha Halim</span>
              <h2 className="title">
                Senior <span>Software Engineer</span> Based in Paris
              </h2>
              <div className="banner-content-bottom">
                <ul className="list-wrap">
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1S4hcj8_Tbq1uqxZF-5MWwtARtLtR96aW/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/img/icon/banner_icon04.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mohammed._.taha._.halim/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/img/icon/banner_icon01.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/tatsuhik_o"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/img/icon/banner_icon02.svg" alt="" />
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-shape-wrap-two">
        <img
          src="/img/banner/h2_banner_shape01.png"
          alt=""
          className="rotateme"
        />
        <img
          src="/img/banner/h2_banner_shape02.png"
          alt=""
          className="ribbonRotate"
        />
        <img
          src="/img/banner/h2_banner_shape03.png"
          alt=""
          className="ribbonRotate"
        />
        <img src="/img/banner/h2_banner_shape04.png" alt="" />
      </div>
    </section>
  );
};

export default BannerArea;
