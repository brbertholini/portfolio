import { FaGithub } from "react-icons/fa";

export function Project({ image, title, description, repoLink }) {
    return (
        <div className="h-fit bg-transparent rounded-lg max-w-[460px] md:max-w-[600px] lg:max-w-[100%] flex flex-col transition-all">
            <h1 className='text-[#212121] text-lg font-semibold font-montserrat'>{title}</h1>
            <div className="rounded-lg drop-shadow-lg my-6 w-full overflow-hidden">
            <a href={repoLink} target="_blank"><img className='rounded-lg hover:scale-105 transition-all duration-300' src={image} alt={title} /></a>
            </div>
            <div className='h-fit pt-[4px] flex flex-col'>
                <p className="text-[#212121] text-base text-pretty text-opacity-80 text-justify font-poppins flex-grow">{description}</p>
                <a href={repoLink} target="_blank" className="flex drop-shadow-md w-fit mt-3 p-3 bg-[#f8f8f8] rounded-full border border-[#212121] border-opacity-50 hover:scale-105 hover:bg-[#e7e7e7] transition-all font-poppins">
                    <FaGithub className='mr-3' size={24}/>
                    Repositório
                </a>
            </div>
        </div>
    );
}