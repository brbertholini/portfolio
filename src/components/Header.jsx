import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react";
import { scrollToSection } from "../utils/utils";
import { IoLogoWhatsapp } from "react-icons/io";



export function Header() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="sticky top-0 z-50 flex justify-center items-center h-40 w-full">
            <div className="hidden md:flex pt-4 pb-4 justify-between items-center w-full lg:mr-64 lg:ml-64">
                <h1 className="font-poppins text-base 2xl:text-xl">Bruno Bertholini</h1>
                <ul className="flex">
                    <li onClick={() => scrollToSection(140)} className="text-[#212121] font-poppins text-base 2xl:text-xl p-4 lg:mr-8 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Início</li>
                    <li onClick={() => scrollToSection(140)} className="text-[#212121] font-poppins text-base 2xl:text-xl p-4 lg:mr-8 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Projetos</li>
                    <li onClick={() => scrollToSection(140)} className="text-[#212121] font-poppins text-base 2xl:text-xl lg:mr-8 p-4 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Habilidades</li>
                    <li onClick={() => scrollToSection(140)} className="text-[#212121] font-poppins text-base 2xl:text-xl p-4 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Contato</li>
                </ul>
            </div>
            <div onClick={handleNav} className="flex md:hidden fixed text-[#1F2329] right-12">
                <h1 className="font-montserrat font-semibold fixed left-12">Bruno Bertholini</h1>
                {nav ? <AiOutlineClose size={24} className="bg-transparent text-[#1F2329]" /> : <AiOutlineMenu size={24} className="bg-transparent text-[#1F2329]" />}
            </div>
            <div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] pl-10 pr-10  h-full bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <ul className="">
                        <li onClick={() => { scrollToSection('projects', 140); handleNav(); }} className="text-[#1F2329] pr-10  font-bold font-jetbrains text-xl pt-10 hover:opacity-40 cursor-pointer">projetos</li>
                        <li onClick={() => { scrollToSection('knowledge', 140); handleNav(); }} className="text-[#1F2329] pr-10  font-bold font-jetbrains text-xl pt-7 hover:opacity-40 cursor-pointer">conhecimento</li>
                        <li onClick={() => { scrollToSection('contact', 140); handleNav(); }} className="text-[#1F2329] pr-10  font-bold font-jetbrains text-xl pt-7 hover:opacity-40 cursor-pointer">curriculo</li>
                    </ul>
                    <ul className="text-[#1F2329] font-bold pt-7 flex flex-wrap">
                        <li className="flex w-[100%] items-center">
                            <a href="https://github.com/brbertholini" target="_blank" className="flex items-center hover:opacity-40">
                                <FaGithub size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-xl font-jetbrains ml-3">Github</h1>
                            </a>
                        </li>
                        <li className="flex w-[100%] items-center  pt-7">
                            <a href="https://www.linkedin.com/in/bruno-bertholini" target="_blank" className="flex items-center hover:opacity-40">
                                <FaLinkedin size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-xl font-jetbrains ml-3">LinkedIn</h1>
                            </a>
                        </li>
                        <li className="flex w-[100%] items-center pt-7">
                            <a href="mailto:brbertholini@gmail.com" target="_blank" className="flex items-center hover:opacity-40">
                                <MdEmail size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-xl font-jetbrains ml-3">E-mail</h1>
                            </a>
                        </li>
                        <li className="flex w-[100%] items-center pt-7">
                            <a href="https://api.whatsapp.com/send?phone=5511990246137" target="_blank" className="flex items-center hover:opacity-40">
                                <IoLogoWhatsapp size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-xl font-jetbrains ml-3">Whatsapp</h1>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}