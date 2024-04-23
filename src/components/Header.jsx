import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react";
import { scrollToSection } from "../utils/utils";
import foto from "../assets/images/foto.jpg"
import { IoLogoWhatsapp } from "react-icons/io";



export function Header() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-center items-center rounded-full h-24 w-full">
            <div className="hidden md:flex justify-between items-center w-full">
                <a target="_blank" href="https://www.linkedin.com/in/bruno-bertholini" className="cursor-pointer hover:scale-110 transition-all"><img className="sm:flex h-14 rounded-full hover:rounded-[35%]" src={foto} /></a>
                <ul className="flex">
                    <li onClick={() => scrollToSection('home', 140)} className="text-[#212121] font-poppins text-base 2xl:text-lg p-4 lg:mr-4 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Início</li>
                    <li onClick={() => scrollToSection(140)} className="text-[#212121] font-poppins text-base lg:mr-4 p-4 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Experiência</li>
                    <li onClick={() => scrollToSection('projects', 50)} className="text-[#212121] font-poppins text-base 2xl:text-lg p-4 lg:mr-4 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Projetos</li>
                    <li onClick={() => scrollToSection(140)} className="text-[#212121] font-poppins text-base 2xl:text-lg p-4 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Contato</li>
                </ul>
            </div>
            <div onClick={handleNav} className="flex md:hidden fixed text-[#1F2329] right-12">
                <h1 className="font-montserrat font-semibold fixed left-12">Bruno Bertholini</h1>
                {nav ? <AiOutlineClose size={24} className="bg-transparent text-[#1F2329]" /> : <AiOutlineMenu size={24} className="bg-transparent text-[#1F2329]" />}
            </div>
            <div>
                <div className={nav ? 'fixed z-10 left-0 top-0 w-[60%] pl-10 pr-10  h-full bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <ul className="">
                        <li onClick={() => { scrollToSection('home', 140); handleNav(); }} className="text-[#1F2329] pr-10 font-bold font-montserrat text-base pt-10 hover:opacity-40 cursor-pointer">Início</li>
                        <li onClick={() => { scrollToSection('projects', 140); handleNav(); }} className="text-[#1F2329] pr-10  font-bold font-montserrat text-base pt-7 hover:opacity-40 cursor-pointer">Projetos</li>
                        <li onClick={() => { scrollToSection('knowledge', 140); handleNav(); }} className="text-[#1F2329] pr-10  font-bold font-montserrat text-base pt-7 hover:opacity-40 cursor-pointer">Habilidades</li>
                        <li onClick={() => { scrollToSection('home', 140); handleNav(); }} className="text-[#1F2329] pr-10  font-bold font-montserrat text-base pt-7 hover:opacity-40 cursor-pointer">Contato</li>
                    </ul>
                    <ul className="text-[#1F2329] font-bold pt-7 flex flex-wrap">
                        <li className="flex w-[100%] items-center">
                            <a href="https://github.com/brbertholini" target="_blank" className="flex items-center hover:opacity-40">
                                <FaGithub size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-base font-montserrat ml-3">Github</h1>
                            </a>
                        </li>
                        <li className="flex w-[100%] items-center  pt-7">
                            <a href="https://www.linkedin.com/in/bruno-bertholini" target="_blank" className="flex items-center hover:opacity-40">
                                <FaLinkedin size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-base font-montserrat ml-3">LinkedIn</h1>
                            </a>
                        </li>
                        <li className="flex w-[100%] items-center pt-7">
                            <a href="mailto:brbertholini@gmail.com" target="_blank" className="flex items-center hover:opacity-40">
                                <MdEmail size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-base font-montserrat ml-3">E-mail</h1>
                            </a>
                        </li>
                        <li className="flex w-[100%] items-center pt-7">
                            <a href="https://api.whatsapp.com/send?phone=5511990246137" target="_blank" className="flex items-center hover:opacity-40">
                                <IoLogoWhatsapp size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-base font-montserrat ml-3">Whatsapp</h1>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}