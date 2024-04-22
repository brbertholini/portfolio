import { Header } from "./components/Header"
import { scrollToSection } from "./utils/utils";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Knowledge } from "./components/Knowledge";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
  return (
    <div id="container" className="flex flex-col justify-center items-center">
      <div className="xl:w-[740px]">
        <div className="w-[100%] h-[100vh] flex flex-col">
          <Header />
          <div className="pb-8">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <div className="flex flex-col md:w-[100%] xl:mt-24 2xl:mt-32">
                <div className="flex flex-row gap-6 items-center">
                  <h1 className="text-[22px] sm:text-5xl font-montserrat font-bold drop-shadow-md text-[#212121]">Bruno Bertholini</h1>
                  <a target="_blank" href="https://www.linkedin.com/in/bruno-bertholini/" className="cursor-pointer bg-green-500 border border-[#212121] border-opacity-40 hover:shadow-green-500/60 hover:scale-110 transition-all hover:shadow-lg drop-shadow-lg shadow-lg h-fit pl-3 pr-3 rounded-full text-[#212121] font-base">Open to work</a>
                  </div>
                <p className="mt-8 text-base 2xl:text-2xl font-poppins text-[#272727]">Desenvolvedor <b>Full-stack</b>, focado no desenvolvimento de soluções que impactem positivamente na vida das pessoas.</p>
                <div className="sm:flex flex-row justify-between xl:mt-8">
                  <div className="text-[#212121] flex flex-row 2xl:justify-between gap-6 sm:w-auto sm:flex">
                    <a target="_blank" href="https://github.com/brbertholini" className="flex items-center pr-2 hover:opacity-40 hover:scale-125 transition-all cursor-pointer"><FaGithub size={24} className="m-2 2xl:text-[18px]" />Github</a>
                    <a target="_blank" href="https://www.linkedin.com/in/bruno-bertholini/" className="flex items-center pr-2 hover:opacity-40 hover:scale-125 transition-all cursor-pointer"><FaLinkedin size={24} className="m-2 2xl:text-[18px] hover:opacity-40" />LinkedIn</a>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5511990246137" className="flex items-center pr-2 hover:opacity-40 hover:scale-125 transition-all cursor-pointer"><IoLogoWhatsapp size={24} className="m-2 2xl:text-[18px]" />Whatsapp</a>
                  </div>
                  <a target="_blank" href="mailto:brbertholini@gmail.com" className="flex items-center pr-2"><h1 className="text-[16px] 2xl:text-[18px] font-montserrat hover:opacity-40 hover:scale-110 transition-all cursor-pointer text-[#212121]">brbertholini@gmail.com</h1></a>
                </div>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
        <div className="w-[100%] h-[100vh]">
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
