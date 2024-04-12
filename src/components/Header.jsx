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
        <div className="sticky top-0 z-50 mb-16 bg-white flex justify-center items-center h-24">
            <div className="hidden pt-4 pb-4 md:flex md:items-center ">
                <ul className="flex">
                    <li onClick={() => scrollToSection('projects', 140)} className="text-[#1F2329] font-jetbrains text-xl p-4 mr-55px hover:opacity-40 transition-all cursor-pointer">projetos</li>
                    <li onClick={() => scrollToSection('contact', 140)} className="text-[#1F2329] font-jetbrains text-xl p-4 hover:opacity-40 transition-all cursor-pointer">contato</li>
                </ul>
                <div className="text-[#1F2329] flex ml-55px">
                    <a target="_blank" href="https://github.com/brbertholini"><FaGithub size={24} className="mr-8 hover:opacity-40 transition-all cursor-pointer" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/bruno-bertholini/"><FaLinkedin size={24} className="hover:opacity-40 transition-all cursor-pointer" /></a>
                    <a target="_blank" href="mailto:brbertholini@gmail.com"><MdEmail size={24} className="ml-8 hover:opacity-40 transition-all cursor-pointer" /></a>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5511990246137"><IoLogoWhatsapp size={24} className="ml-8 hover:opacity-40 transition-all cursor-pointer" /></a>
                </div>
            </div>
            <div onClick={handleNav} className="flex md:hidden fixed text-[#1F2329] right-12">
                <h1 className="font-jetbrains fixed left-12">Bruno Bertholini</h1>
                {nav ? <AiOutlineClose size={24} className="bg-transparent text-[#1F2329]" /> : <AiOutlineMenu size={24} className="bg-transparent text-[#1F2329]" />}
            </div>
            <div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] pl-10 pr-10  h-full bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <ul className="">
                        <li onClick={() => scrollToSection('projects', 140)} className="text-[#1F2329] border-b border-[#1F2329] pr-10  font-bold font-jetbrains text-xl pt-10 hover:opacity-40 cursor-pointer">projetos</li>
                        <li onClick={() => scrollToSection('contact', 140)} className="text-[#1F2329] border-b border-[#1F2329] pr-10  font-bold font-jetbrains text-xl pt-7 hover:opacity-40 cursor-pointer">curriculo</li>
                    </ul>
                    <ul className="text-[#1F2329] font-bold pt-7 flex flex-wrap">
                        <li className="flex w-[100%] border-b border-[#1F2329] items-center">
                            <a href="https://github.com/brbertholini" target="_blank" className="flex items-center hover:opacity-40">
                                <FaGithub size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-xl font-jetbrains ml-3">Github</h1>
                            </a>
                        </li>
                        <li className="flex w-[100%] border-b border-[#1F2329] items-center  pt-7">
                            <a href="https://www.linkedin.com/in/bruno-bertholini" target="_blank" className="flex items-center hover:opacity-40">
                                <FaLinkedin size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-xl font-jetbrains ml-3">LinkedIn</h1>
                            </a>
                        </li>
                        <li className="flex w-[100%] border-b border-[#1F2329] items-center pt-7">
                            <a href="mailto:brbertholini@gmail.com" target="_blank" className="flex items-center hover:opacity-40">
                                <MdEmail size={24} className="transition-all cursor-pointer" />
                                <h1 className="text-xl font-jetbrains ml-3">E-mail</h1>
                            </a>
                        </li>
                        <li className="flex w-[100%] border-b border-[#1F2329] items-center pt-7">
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