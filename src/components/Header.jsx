import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react";

export function Header() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-center px4 items-center h-24">
            <div className="hidden pt-12 md:flex md:items-center ">
                <ul className="flex">
                    <li className="text-white font-jetbrains text-xl p-4 mr-55px hover:opacity-40 transition-all cursor-pointer">projetos</li>
                    <li className="text-white font-jetbrains text-xl p-4 hover:opacity-40 transition-all cursor-pointer">contato</li>
                </ul>
                <div className="text-white flex ml-55px">
                    <FaGithub size={24} className="mr-8 hover:opacity-40 transition-all cursor-pointer" />
                    <FaLinkedin size={24} className="hover:opacity-40 transition-all cursor-pointer" />
                    <MdEmail size={24} className="ml-8 hover:opacity-40 transition-all cursor-pointer" />
                </div>
            </div>
            <div onClick={handleNav} className="block md:hidden fixed text-[#C7C7C7] right-12">
                {!nav ? <AiOutlineClose size={24} className="bg-[#C7C7C7] text-[#1F2329]"/> : <AiOutlineMenu size={24} className="bg-[#C7C7C7] text-[#1F2329]"/>}
            </div>
            <div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] pl-10 pr-10  h-full bg-[#C7C7C7] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <ul className="">
                        <li className="text-[#1F2329] border-b border-[#1F2329] pr-10  font-bold font-jetbrains text-xl pt-10">projetos</li>
                    </ul>
                    <ul className="text-[#1F2329] font-bold pt-7 flex flex-wrap">
                        <li className="flex w-[100%] border-b border-[#1F2329] items-center">
                            <FaGithub size={24} className="hover:opacity-40 transition-all cursor-pointer" />
                            <h1 className="text-xl font-jetbrains ml-3">Github</h1>
                        </li>
                        <li className="flex w-[100%] border-b border-[#1F2329] items-center  pt-7">
                            <FaLinkedin size={24} className="hover:opacity-40 transition-all cursor-pointer" />
                            <h1 className="text-xl font-jetbrains ml-3">LinkedIn</h1>
                        </li>
                        <li className="flex w-[100%] border-b border-[#1F2329] items-center pt-7">
                            <MdEmail size={24} className="hover:opacity-40 transition-all cursor-pointer" />
                            <h1 className="text-xl font-jetbrains ml-3">E-mail</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}