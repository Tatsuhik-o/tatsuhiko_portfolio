import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import WOW from "wow.js";
import PersonalPortfolio from "./pages/Home/PersonalPortfolio";
import IT1023 from "./pages/Home/IT1023";
import NotFound from "./pages/Home/NotFound";
import AnimatedCursor from "react-animated-cursor";
//

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={24}
        color="46, 204, 113"
        outerAlpha={0.15}
        innerScale={0}
        outerScale={0}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <Routes>
        <Route path="/" element={<PersonalPortfolio />} />
        <Route path="/IT1023" element={<IT1023 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
