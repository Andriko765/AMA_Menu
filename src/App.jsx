import { Nav,Footer} from "./components"
import { Cider, Pizza,Snacks,NoAlchohol, Hotdog, Shots } from "./sections"


const App = () => {
  return (
    <main className=" relative bg-[#1d1b20] h-full">
        <Nav />
        <Cider/>
        <Shots/>
        <Pizza/>
        <Hotdog/>
        <Snacks/>
        <NoAlchohol/>
        <Footer/>
    </main>
  )
}

export default App