import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Project from '../../components/Project';
import Contact from '../../components/Contact';
import CursorGlow from '../../components/CursorGlow';

const Home = () => (
  <div className="bg-[#051305] min-h-screen">
    <CursorGlow />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Project />
    <Contact />
  </div>
);

export default Home;
