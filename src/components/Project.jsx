import lovecandle from '../assets/images/lovecandle.png';
import { FaGithub } from "react-icons/fa";


export function Project() {

    return(
        <div className="w-[100%] mb-14">
            <img className='' src={lovecandle}></img>
            <div className='bg-[#16191D] p-5 h-fit'>
                <h1 className='text-white text-[18px] sm:text-[20px] font-jetbrains font-bold mb-3'>Gestão de estoque</h1>
                <p className="text-[#C7C7C7] text-[14px] sm:text-[16px] text-justify font-jetbrains">Projeto real para um familiar. Sistema de estoque para uma loja de velas. Rest API desenvolvida com Java Spring, Hibernate, Docker, React no front-end, Figma para prototipação.</p>
                <button className="flex mt-5 p-3 bg-white hover:opacity-60 transition-all font-jetbrains"><FaGithub className='mr-3' size={24}/>Repositório</button>
            </div>
        </div>
    )
}