import React from "react";
const FooterArea = () => {
  return (
    <footer>
      <div className="footer-area-two">
        <div className="container">
          <div className="footer-bottom-two">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p>
                    © 2024, Made By{" "}
                    <a href="https://tatsuhiko.org">Tatsuhiko</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-social-two">
                  <ul className="list-wrap">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/tatsuhiko/ "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/img/icon/footer_icon01.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/Tatsuhik_o"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/img/icon/footer_icon02.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pinterest.jp/Tatsuhik_o/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/img/icon/footer_icon03.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCe7BLz1MALQkMNEiBK3Nv0g"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/img/icon/footer_icon04.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArea;
