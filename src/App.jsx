import { Header } from "./components/Header"
import { SideIcons } from "./components/SideIcons"

function App() {

  return (
      <div className="flex flex-col justify-center">
        <Header />
        <div className="pl-80 w-[950px] mt-32 flex flex-col">
          <h1 className="text-[32px] font-jetbrains font-semibold text-[#17191E] text-end">a Fullstack Developer</h1>
          <h1 className="text-[36px] font-jetbrains font-semibold text-white">Bruno Bertholini</h1>
          <p className="mt-5 text-[16px] font-jetbrains text-[#C7C7C7]">Após ter algumas experiências com Design, me interessei por Front-end e posteriormente me apaixonei por desenvolvimento web fullstack. Projetei e desenvolvi diversos tipos de aplicações, confira.</p>
          <div className="flex justify-between">
            <button className="hover:bg-transparent hover:border-white hover:border-[1px] hover:text-white transition-all hover:scale-105 mt-6 text-[#17191E] text-[28px] font-semibold bg-white p-4 pl-8 pr-8 font-jetbrains">entrar em contato</button>
            <button className="hover:bg-white hover:border-none transition-all hover:scale-105 hover:text-[#17191E] mt-6 text-[#C7C7C7] text-[28px] border-[1px] border-white font-semibold bg-transparent p-4 pl-8 pr-8 font-jetbrains">projetos</button>
          </div>
        </div>
      </div>
  )
}

export default App
