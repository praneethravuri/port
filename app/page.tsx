import Header from "@/components/Header";
import About from "@/components/About";
import SocialLinks from "@/components/SocialLinks";
import Email from "@/components/Email";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import { Footer } from "@/components/Footer";
import TextSlider from "@/components/TextSlider";

export default function Home() {
  return (
    <main className="grain-effect lg:h-screen p-5 lg:overflow-hidden">
      <div className="border-2 border-white h-full lg:flex lg:justify-between space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 w-full border-r-2 border-white flex flex-col justify-between">
          <div className="header border-b-2 border-white h-1/4">
            <Header />
          </div>
          <div className="about-sociallinks border-b-2 border-white flex justify-between h-2/4">
            <div className="about border-r-2 border-white w-2/3">
              <About />
            </div>
            <div className="sociallinks w-1/3">
              <SocialLinks />
            </div>
          </div>
          <div className="h-1/4">
            <Email />
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:overflow-auto p-0">
        <TextSlider />
        <Experience />
        <Projects />
        <Education />
        <Footer />
        </div>
      </div>
    </main>
  );
}
