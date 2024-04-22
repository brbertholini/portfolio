import { FaGithub } from "react-icons/fa";

export function Project({ image, title, description, repoLink }) {
    return (
        <div className="h-fit bg-transparent rounded-lg max-w-[460px] md:max-w-[600px] lg:max-w-[100%] flex flex-col transition-all">
            <a href={repoLink} target="_blank" >
            <h1 className='text-[#212121] text-lg font-montserrat font-bold mb-3'>{title}</h1>
            <img className='rounded' src={image} alt={title} />
            <div className='h-fit pt-5 flex flex-col'>
                <p className="text-[#212121] text-base text-pretty text-justify font-poppins flex-grow min-h-[100px]">{description}</p>
                <a href={repoLink} target="_blank" className="flex  w-fit mt-5 p-3 bg-[#212121] hover:scale-105 hover:opacity-60 transition-all font-poppins">
                    <FaGithub className='mr-3' size={24}/>
                    Repositório
                </a>
            </div>
            </a>
        </div>
    );
}