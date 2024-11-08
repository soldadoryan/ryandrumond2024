import ScrollingAnimation from "./ScrollingAnimation";
import Banner from "./sections/Banner";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetIp from "./components/GetIp";

export default function Home() {
  return (
    <>
      {/* new version */}
      <ToastContainer theme="dark" />
      <ScrollingAnimation />
      <GetIp />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
