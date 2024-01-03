import ScrollingAnimation from "./ScrollingAnimation";
import Banner from "./sections/Banner";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <ScrollingAnimation />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
