import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

export function Contact() {
    return(
        <div className="flex flex-col sm:flex-row pb-20">
        <div className="pt-20  w-[100%] sm:w-[50%] flex-col">
          <h1 id="contact" className="text-2xl pb-8 font-montserrat font-semibold text-[#212121]">Contato</h1>
          <p className="mb-8 text-base font-poppins text-[#212121] text-opacity-80 text-justify">Entre em contato comigo, estou pronto para contribuir, fazer novas conexões e falar sobre tecnologia.</p>
          <div className="flex flex-row items-center pb-3 hover:opacity-40 transition ease-in-out cursor-pointer">
            <a target="_blank" href="https://github.com/brbertholini"><FaGithub size={28} className="text-[#212121] mr-4" /></a>
            <a target="_blank" href="https://github.com/brbertholini" className="text-base font-poppins text-[#212121] hover:opacity-40 transition ease-in-out">github.com/brbertholini</a>
          </div>
          <div className="flex flex-row items-center pb-3 hover:opacity-40 transition ease-in-out cursor-pointer">
            <a target="_blank" href="https://www.linkedin.com/in/bruno-bertholini/"><FaLinkedin size={28} className="text-[#212121] mr-4" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/bruno-bertholini/" className="text-base font-poppins text-[#212121] hover:opacity-40 transition ease-in-out">linkedin.com/bruno-bertholini</a>
          </div>
          <div className="flex flex-row items-center pb-3 hover:opacity-40 transition ease-in-out cursor-pointer">
            <a href="mailto:brbertholini@gmail.com"><MdEmail size={28} className="text-[#212121] mr-4" /></a>
            <a href="mailto:brbertholini@gmail.com" className="text-base font-poppins text-[#212121] hover:opacity-40 transition ease-in-out">brbertholini@gmail.com</a>
          </div>
          <div className="flex flex-row items-center hover:opacity-40 transition ease-in-out cursor-pointer">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5511990246137"><IoLogoWhatsapp size={28} className="text-[#212121] mr-4" /></a>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5511990246137" className="text-base font-poppins text-[#212121]">+55 11 990246137</a>
          </div>
        </div>
        <div className="w-fit sm:pt-20 sm:w-[50%] flex flex-col items-center justify-center">
            <a className="w-[100%] sm:w-[70%] hover:opacity-60 text-center hover:scale-110 transition-all ease-in-out delay-80 mt-6 text-[#17191E] text-base sm:text-[18px] font-semibold p-4 font-montserrat" target="_blank" href="https://drive.google.com/file/d/18DawL8A3vCHlKIABUXXveumJcXcTSI2X/view?usp=sharing"><button>Currículo (PT/BR)</button></a>
            <a className="w-[100%] sm:w-[70%] hover:opacity-60 text-center hover:scale-110 transition-all ease-in-out delay-80 mt-6 text-[#17191E] text-base sm:text-[18px] font-semibold p-4 font-montserrat" target="_blank" href="https://drive.google.com/file/d/18DawL8A3vCHlKIABUXXveumJcXcTSI2X/view?usp=sharing"><button>Resume (EN)</button></a>
          </div>
      </div>
    )
}