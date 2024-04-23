import { scrollToSection } from "../utils/utils"

export function Footer() {
    return (
        <div className="">
            <div className="pb-12 pt-20 flex justify-between h-24 items-center">
                <h1 className="text-base font-poppins">© 2024 Bruno Bertholini</h1>
                <div className="flex flex-row gap-10">
                <ul className="flex">
                    <li onClick={() => scrollToSection('home', 100)} className="text-[#212121] font-poppins text-base p-4 lg:mr-4 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Início</li>
                    <li onClick={() => scrollToSection(140)} className="text-[#212121] font-poppins text-base lg:mr-4 p-4 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Experiência</li>
                    <li onClick={() => scrollToSection('projects', 50)} className="text-[#212121] font-poppins text-base p-4 lg:mr-4 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Projetos</li>
                    <li onClick={() => scrollToSection('home', 100)} className="text-[#212121] font-poppins text-base p-4 hover:opacity-40 hover:scale-110 transition-all cursor-pointer">Contato</li>
                </ul>
                </div>
            </div>
        </div>
    )
}