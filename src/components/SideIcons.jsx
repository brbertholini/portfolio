import { FaLinkedin, FaGithub, FaWhatsapp, FaTwitter } from "react-icons/fa";

export function SideIcons() {
    return(
        <div className="text-white flex w-fit gap-4 flex-col items-center justify-center">
            <div className="w-1px h-32 bg-white"></div>
            <FaLinkedin size={24} className="mb-3 mt-3 hover:opacity-40 transition-all cursor-pointer" />
            <FaGithub size={24} className="mb-3 hover:opacity-40 transition-all cursor-pointer" />
            <FaTwitter size={24} className="mb-3 hover:opacity-40 transition-all cursor-pointer" />
            <FaWhatsapp size={24} className="mb-3 hover:opacity-40 transition-all cursor-pointer" />
        </div>
    )
}