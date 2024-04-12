import { Header } from "./components/Header"
import { Project } from "./components/Project"
import lovecandle from './assets/images/lovecandle.png';
import adopet from './assets/images/adopet.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { scrollToSection } from "./utils/utils";

function App() {
  return (
    <div className="flex flex-col mb-12 justify-center">
      <Header />
      <div className="ml-8 mr-8 sm:ml-10 sm:mr-10 md:ml-12 md:mr-12 lg:ml-28 lg:mr-28 2xl:ml-96 2xl:mr-96">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1 className="text-[28px] sm:text-[36px] font-jetbrains font-semibold text-white">Bruno Bertholini</h1>
            <h1 className="mt-[-10px] text-[28px] sm:text-[32px] font-jetbrains font-semibold text-white">a Fullstack Developer</h1>
            <p className="mt-5 text-[14px] sm:text-[16px] font-jetbrains text-[#C7C7C7] text-justify">Após ter algumas experiências com Design, me interessei por Front-end e posteriormente me apaixonei por desenvolvimento web fullstack. Projetei e desenvolvi diversos tipos de aplicações, confira.</p>
            <div className="flex flex-col sm:flex-row">
              <button onClick={() => scrollToSection('contact', 140)} className="w-[100%] sm:w-fit hover:opacity-60 transition ease-in-out delay-80 mt-6 text-[#17191E] text-[18px] font-semibold bg-white p-4 pl-8 pr-8 font-jetbrains">entrar em contato</button>
              <button onClick={() => scrollToSection('projects', 140)} className="w-[100%] sm:w-fit hover:opacity-60 transition ease-in-out delay-80 ml-0 sm:ml-8 mt-6 text-[#C7C7C7] text-[18px] font-semibold bg-transparent p-4 pl-8 pr-8 font-jetbrains">projetos</button>
            </div>
          </div>
        </div>
        <div className="pt-20 flex flex-col">
          <h1 id="projects" className="text-[28px] sm:text-[36px] pb-8 font-jetbrains font-semibold text-white">Projetos</h1>
        </div>
        <div className="justify-items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
            <Project
              image={lovecandle}
              title="Gestão de estoque"
              description="Projeto real para um familiar. Sistema de estoque para uma loja de velas. Rest API desenvolvida com Java Spring, Hibernate, Docker, React no front-end, Figma para prototipação."
              repoLink="https://github.com/brbertholini/love-candle-backend"
            />
            <Project
              image={adopet}
              title="Adopet"
              description="Projeto acadêmico do 4º semestre da faculdade. O projeto é um web site e um mobile app desenvolvido em Nodejs, React, Firebase e Kotlin pensado e desenvolvido para facilitar o processo de adoção de pets."
              repoLink="https://github.com/yuriTakamisawaRibeiro/AdoPet"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
        <div className="pt-20  w-[100%] sm:w-[50%] flex-col">
          <h1 id="contact" className="text-[28px] sm:text-[36px] pb-8 font-jetbrains font-semibold text-white">Contato</h1>
          <p className="mb-8 text-[14px] sm:text-[16px] font-jetbrains text-[#C7C7C7] text-justify">Entre em contato comigo, estou pronto para contribuir, fazer novas conexões e falar sobre tecnologia.</p>
          <div className="flex flex-row">
            <a target="_blank" href="https://github.com/brbertholini"><FaGithub size={28} className="text-white mb-3 mr-4 hover:opacity-40 transition-all cursor-pointer" /></a>
            <a target="_blank" href="https://github.com/brbertholini" className="text-[14px] sm:text-[16px] font-jetbrains text-white hover:opacity-40 transition ease-in-out">github.com/brbertholini</a>
          </div>
          <div className="flex flex-row">
            <a target="_blank" href="https://www.linkedin.com/in/bruno-bertholini/"><FaLinkedin size={28} className="text-white mb-[11px] mr-4 hover:opacity-40 transition-all cursor-pointer" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/bruno-bertholini/" className="text-[14px] sm:text-[16px] font-jetbrains text-white hover:opacity-40 transition ease-in-out">linkedin.com/bruno-bertholini</a>
          </div>
          <div className="flex flex-row">
            <a target="_blank" href="mailto:brbertholini@gmail.com"><MdEmail size={28} className="text-white mr-4 hover:opacity-40 transition-all cursor-pointer" /></a>
            <a target="_blank" href="mailto:brbertholini@gmail.com" className="text-[14px] sm:text-[16px] font-jetbrains text-white hover:opacity-40 transition ease-in-out">brbertholini@gmail.com</a>
          </div>
        </div>
        <div className="w-fit sm:pt-20 sm:w-[50%] flex flex-col items-center justify-center">
          <a className="w-[100%] sm:w-[70%] hover:opacity-60 text-center transition ease-in-out delay-80 mt-6 text-[#17191E] text-[14px] sm:text-[18px] font-semibold bg-white p-4 font-jetbrains" target="_blank" href="https://drive.google.com/file/d/1Lq-5WnN5t8UDT6QeR_liorucRCZfFfYX/view?usp=sharing"><button>Currículo (PT/BR)</button></a>
          <a className="w-[100%] sm:w-[70%] hover:opacity-60 text-center transition ease-in-out delay-80 mt-6 text-[#17191E] text-[14px] sm:text-[18px] font-semibold bg-white p-4 font-jetbrains" target="_blank" href="https://drive.google.com/file/d/1Lq-5WnN5t8UDT6QeR_liorucRCZfFfYX/view?usp=sharing"><button>Resume (EN)</button></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
