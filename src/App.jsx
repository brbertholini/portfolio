import { Header } from "./components/Header"
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Knowledge } from "./components/Knowledge";
import { Front } from "./components/Front";
import { BackAndTools } from "./components/BackAndTools";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div id="container" className="flex flex-col justify-center items-center">
      <div className="xl:w-[740px]">
        <Header />
        <Section />
        <Front />
        <BackAndTools />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
