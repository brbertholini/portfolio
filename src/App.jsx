import { Header } from "./components/Header"
import { scrollToSection } from "./utils/utils";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Knowledge } from "./components/Knowledge";
import foto from "./assets/images/foto.jpg"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
  return (
    <div id="container" className="flex flex-col justify-center">
      <Header />
      <div className="ml-8 mr-8 sm:ml-10 sm:mr-10 md:ml-12 md:mr-12 lg:ml-28 lg:mr-28 2xl:ml-64 2xl:mr-64 2xl:mt-32">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex flex-col md:w-[65%]">
            <h1 className="text-[24px] sm:text-5xl font-montserrat text-[#212121]">Sou <b>Bruno Bertholini</b></h1>
            <p className="mt-5 2xl:text-2xl font-poppins text-[#212121] text-justify">Após ter algumas experiências com Design, me interessei por Front-end e posteriormente me apaixonei por desenvolvimento web Full-stack, focado no desenvolvimento de soluções que possam facilitar a vida das pessoas.</p>
          </div>
          <img className="hidden sm:flex h-64 md:h-72 mt-5 rounded" src={foto} />
        </div>
        <div className="sm:flex flex-row hidden justify-between 2xl:mt-56 2xl:mb-32">
          <div className="text-[#212121] flex flex-row 2xl:justify-between gap-6 sm:w-auto sm:flex">
            <a target="_blank" href="https://github.com/brbertholini"><FaGithub size={24} className="m-2 hover:opacity-40 hover:scale-150 transition-all cursor-pointer" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/bruno-bertholini/"><FaLinkedin size={24} className="m-2 hover:opacity-40 hover:scale-150 transition-all cursor-pointer" /></a>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5511990246137"><IoLogoWhatsapp size={24} className="m-2 hover:opacity-40 hover:scale-150 transition-all cursor-pointer" /></a>
          </div>
            <a target="_blank" href="mailto:brbertholini@gmail.com"><h1 className="text-[16px] 2xl:text-[20px] font-montserrat hover:opacity-40 hover:scale-110 transition-all cursor-pointer text-[#212121]">brbertholini@gmail.com</h1></a>
        </div>
        <div className="flex flex-col sm:flex-row">
          <button onClick={() => scrollToSection('contact', 140)} className="w-[100%] sm:w-fit hover:opacity-60 hover:scale-110 transition ease-in-out delay-80 mt-6 text-[#212121] text-[18px] font-semibold 2xl:text-2xl bg-white font-montserrat">Entrar em contato</button>
          <button onClick={() => scrollToSection('projects', 140)} className="w-[100%] sm:w-fit hover:opacity-60 hover:scale-110 transition ease-in-out delay-80 ml-0 sm:ml-8 mt-6 text-[#F8F8F8] text-[18px] 2xl:text-2xl font-semibold bg-transparent p-4 pl-8 pr-8 font-montserrat">Projetos</button>
        </div>
        <Projects />
        <Knowledge />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
