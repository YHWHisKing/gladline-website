import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect } from "react";

// AOS (Animate On Scroll) for scroll-triggered animations
import AOS from "aos";
import "aos/dist/aos.css";

import HomeLayout from "./layouts/HomeLayout";
import InnerLayout from "./layouts/InnerLayout";

import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { IconContext } from "react-icons";

function App() {
  // initialize AOS once when the app mounts
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // allows animations to repeat on re-scroll
      mirror: false, // prevents animations from reversing on scroll up (fixes scroll jumping)
      offset: 120, // trigger animation when element is 120px from bottom of viewport
    });
  }, []);

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route element={<InnerLayout />}>
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </IconContext.Provider>
  );
}

export default App;
