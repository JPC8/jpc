import Image from "next/image";
import Projects from "./components/Projects";
import Main from "./components/sections/Main";
import Activity from "./components/sections/Activity";
import About from "./components/sections/About";
import E3 from "./components/sections/E3";

export default function Home() {
  return (
    <div className="">
      <Main/>
      <Projects/>
      <Activity/>
      <About/>
      <E3/>
    </div>
  );
}
