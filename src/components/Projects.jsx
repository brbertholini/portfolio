import { Project } from "./Project"
import lovecandle from '../assets/images/lovecandle.png';
import adopet from '../assets/images/adopet.png';

export function Projects() {
    return(
        <div>
        <div className="pt-32 flex flex-col">
          <h1 id="projects" className="text-2xl pb-12 font-poppins font-extrabold text-[#212121]">Projetos</h1>
        </div>
        <div className="justify-items-center">
          <div className="grid grid-cols-1 gap-24 justify-items-center">
            <Project
              image={lovecandle}
              title="Gestão de estoque"
              description="Sistema de estoque em desenvolvimento para uma loja de velas. Rest API sendo desenvolvida com Java Spring, Hibernate, Docker, React no front-end e Figma para prototipação."
              repoLink="https://github.com/brbertholini/love-candle-backend"
            />
            <Project
              image={adopet}
              title="Adopet"
              description="Projeto acadêmico do 4º semestre da faculdade. O projeto é um web site e um mobile app desenvolvido em Nodejs, React, Firebase e Kotlin pensado e desenvolvido para facilitar o processo de adoção de pets."
              repoLink="https://github.com/yuriTakamisawaRibeiro/AdoPet"
            />
          </div>
        </div>
        </div>
    )
}