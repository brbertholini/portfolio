import { FaGithub } from "react-icons/fa";

export function Project({ image, title, description, repoLink }) {
    return (
        <div className="h-fit max-w-[460px] md:max-w-[600px] lg:max-w-[100%] flex flex-col">
            <img className='' src={image} alt={title} />
            <div className='bg-[#16191D] p-5 h-fit flex flex-col'>
                <h1 className='text-white text-[18px] sm:text-[20px] font-jetbrains font-bold mb-3'>{title}</h1>
                <p className="text-[#C7C7C7] text-[14px] text-justify font-jetbrains flex-grow min-h-[100px]">{description}</p>
                <a href={repoLink} target="_blank" className="flex  w-fit mt-5 p-3 bg-white hover:scale-105 hover:opacity-60 transition-all font-jetbrains">
                    <FaGithub className='mr-3' size={24}/>
                    Repositório
                </a>
            </div>
        </div>
    );
}