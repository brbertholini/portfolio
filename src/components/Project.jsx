import { FaGithub } from "react-icons/fa";

export function Project({ image, title, description, repoLink }) {
    return (
        <div className="w-[100%] mb-14">
            <img className='' src={image} alt={title} />
            <div className='bg-[#16191D] p-5 h-fit'>
                <h1 className='text-white text-[18px] sm:text-[20px] font-jetbrains font-bold mb-3'>{title}</h1>
                <p className="text-[#C7C7C7] text-[14px] sm:text-[16px] text-justify font-jetbrains">{description}</p>
                <a href={repoLink} className="flex mt-5 p-3 bg-white hover:opacity-60 transition-all font-jetbrains">
                    <FaGithub className='mr-3' size={24}/>
                    Repositório
                </a>
            </div>
        </div>
    );
}