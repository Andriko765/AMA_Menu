import { Nav,Footer} from "./components"
import { Cider, Pizza,Snacks,NoAlchohol, Hotdog, Shots } from "./sections"
import Alchohol from "./sections/Alchohol"


const App = () => {
  return (
    <main className=" relative bg-[#1d1b20] h-full">
        <Nav />
        <Cider/>
        <Shots/>
        <Alchohol/>
        <Pizza/>
        <Hotdog/>
        <Snacks/>
        <NoAlchohol/>
        <Footer/>
    </main>
  )
}

export default App