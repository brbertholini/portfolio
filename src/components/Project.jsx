import { FaGithub } from "react-icons/fa";

export function Project({ image, title, description, repoLink }) {
    return (
        <div className="h-fit bg-[#141414] rounded-lg p-8 max-w-[460px] md:max-w-[600px] lg:max-w-[100%] flex flex-col hover:scale-105 transition-all">
            <a href={repoLink} target="_blank" >
            <img className='rounded' src={image} alt={title} />
            <div className='p-5 h-fit flex flex-col'>
                <h1 className='text-[#F8F8F8] text-[18px] sm:text-[20px] 2xl:text-[20px] font-montserrat font-bold mb-3'>{title}</h1>
                <p className="text-[#f8f8f8] text-[14px] 2xl:text-[16px] text-justify font-poppins flex-grow min-h-[100px]">{description}</p>
                <a href={repoLink} target="_blank" className="flex  w-fit mt-5 p-3 bg-[#f8f8f8] hover:scale-105 hover:opacity-60 transition-all font-poppins">
                    <FaGithub className='mr-3' size={24}/>
                    Repositório
                </a>
            </div>
            </a>
        </div>
    );
}