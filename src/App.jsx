import { Header } from "./components/Header"
import { Project } from "./components/Project"

function App() {

  return (
    <div className="flex flex-col justify-center">
      <Header />
      <div className="ml-8 mr-8 sm:ml-10 sm:mr-10 md:ml-12 md:mr-12 lg:ml-28 lg:mr-28 2xl:ml-60 2xl:mr-60">
      <div className="flex flex-row">
        <div className="mt-14 flex flex-col">
          <h1 className="text-[28px] sm:text-[36px] font-jetbrains font-semibold text-white">Bruno Bertholini</h1>
          <h1 className="mt-[-10px] text-[28px] sm:text-[32px] font-jetbrains font-semibold text-white">a Fullstack Developer</h1>
          <p className="mt-5 text-[14px] sm:text-[16px] font-jetbrains text-[#C7C7C7] text-justify">Após ter algumas experiências com Design, me interessei por Front-end e posteriormente me apaixonei por desenvolvimento web fullstack. Projetei e desenvolvi diversos tipos de aplicações, confira.</p>
          <div className="flex flex-col sm:flex-row">
            <button className="w-[100%] sm:w-fit hover:opacity-60 transition ease-in-out delay-80 mt-6 text-[#17191E] text-[18px] font-semibold bg-white p-4 pl-8 pr-8 font-jetbrains">entrar em contato</button>
            <button className="w-[100%] sm:w-fit hover:opacity-60 transition ease-in-out delay-80 ml-0 sm:ml-8 mt-6 text-[#C7C7C7] text-[18px] font-semibold bg-transparent p-4 pl-8 pr-8 font-jetbrains">projetos</button>
          </div>
        </div>
      </div>
      <div className="pt-32 flex flex-col">
        <h1 className="text-[28px] sm:text-[36px] pb-12 font-jetbrains font-semibold text-white">Projetos</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
        <Project />
        <Project />
        <Project />
        <Project />
        </div>
      </div>
    </div>
  )
}

export default App
