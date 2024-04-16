import { Header } from "./components/Header"
import { scrollToSection } from "./utils/utils";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div id="container" className="flex flex-col justify-center">
      <Header />
      <div className="ml-8 mr-8 sm:ml-10 sm:mr-10 md:ml-12 md:mr-12 lg:ml-28 lg:mr-28 2xl:ml-96 2xl:mr-96">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1 className="text-[24px] sm:text-[36px] font-jetbrains font-semibold text-white">Bruno Bertholini,</h1>
            <h1 className="mt-[-10px] text-[24px] sm:text-[32px] font-jetbrains font-semibold text-white">a Fullstack Developer</h1>
            <p className="mt-5 text-[14px] sm:text-[16px] font-jetbrains text-[#C7C7C7] text-justify">Após ter algumas experiências com Design, me interessei por Front-end e posteriormente me apaixonei por desenvolvimento web fullstack, focado no desenvolvimento de soluções que possam facilitar a vida das pessoas. Estou desenvolvendo um projeto acadêmico que conta com um website e um aplicativo mobile voltado para a facilitação do processo de adoção de pets. Além de um projeto paralelo de gestão de estoque.</p>
            <div className="flex flex-col sm:flex-row">
              <button onClick={() => scrollToSection('contact', 140)} className="w-[100%] sm:w-fit hover:opacity-60 hover:scale-110 transition ease-in-out delay-80 mt-6 text-[#17191E] text-[18px] font-semibold bg-white p-4 pl-8 pr-8 font-jetbrains">entrar em contato</button>
              <button onClick={() => scrollToSection('projects', 140)} className="w-[100%] sm:w-fit hover:opacity-60 hover:scale-110 transition ease-in-out delay-80 ml-0 sm:ml-8 mt-6 text-[#C7C7C7] text-[18px] font-semibold bg-transparent p-4 pl-8 pr-8 font-jetbrains">projetos</button>
            </div>
          </div>
        </div>
        <Projects />

        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
