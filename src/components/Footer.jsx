import { scrollToSection } from "../utils/utils"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

export function Footer() {
    return (
        <div className="bg-white flex justify-center items-center pl-6 pr-6 h-28 gap-12">
            <div className="flex flex-col sm:flex-row sm:w-auto gap-4 sm:gap-12 w-[50%]">
            <button onClick={() => scrollToSection('projects', 140)} className="text-[#1F2329] font-jetbrains text-[16px] sm:text-[20px] hover:opacity-40 hover:scale-110 transition-all cursor-pointer">projetos</button>
            <button onClick={() => scrollToSection('container', 140)} className="text-[#1F2329] font-jetbrains text-[16px] sm:text-[20px] hover:opacity-40 hover:scale-110 transition-all cursor-pointer">voltar ao topo</button>
            </div>
            <div className="text-[#1F2329] grid grid-cols-2 w-[50%] sm:w-auto sm:flex sm:gap-6">
                <a target="_blank" href="https://github.com/brbertholini"><FaGithub size={24} className="m-2 hover:opacity-40 hover:scale-125 transition-all cursor-pointer" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/bruno-bertholini/"><FaLinkedin size={24} className="m-2 hover:opacity-40 hover:scale-125 transition-all cursor-pointer" /></a>
                <a target="_blank" href="mailto:brbertholini@gmail.com"><MdEmail size={24} className="m-2 hover:opacity-40 hover:scale-125 transition-all cursor-pointer" /></a>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5511990246137"><IoLogoWhatsapp size={24} className="m-2 hover:opacity-40 hover:scale-125 transition-all cursor-pointer" /></a>
            </div>
        </div>
    )
}