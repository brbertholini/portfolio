import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Header() {
    return (
        <div className="flex justify-center max-w-(1240px) px4 items-center h-24">
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
    )
}