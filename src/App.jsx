import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/politica-privacidad"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terminos-condiciones"
          element={<TermsConditions />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;