import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Integer from "./components/Integer";
import { integerdata } from "./components/common/Helper";
import Scess from "./components/Scess";
import Teamful from "./components/Teamful";
import Allvipe from "./components/Allvipe";
import Footer from "./components/Footer";
import Angile from "./components/Angile";
import Longteam from "./components/Longteam";
import Preloader from "./components/Preloader";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
  }, []);
  return (
    <>
      <Preloader />
      <Hero />
      <Featured />
      <Integer integer={integerdata} />
      <Allvipe />
      <Longteam />
      <Angile />
      <Teamful />
      <Scess />
      <Footer />
    </>
  );
}

export default App;
