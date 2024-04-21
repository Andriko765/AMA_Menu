import { useState } from "react"

const Nav = () => {
   const [inputActive, setinputActive] = useState(false);
   const [isOpen, setisOpen] = useState(false);
   const [activeLink, setActiveLink] = useState("Cider");
   const [catopen, setcatopen] = useState(false);
  return (
    
        <header className=" top-0 fixed bg-[#1d1b20] w-full ">
  <div className="flex px-5 py-3 justify-between items-center desktop:max-container tablet: max-w-[720px]   mx-auto">
            <div className="flex gap-3">
              <img src="https://i.ibb.co/gyQNHDF/photo-2023-07-05-12-18-41.jpg"
              width={65}
              height={65}
               alt="Logo" />

            <div className= {`flex gap-3 items-center my-auto rounded-[0.6rem] max-h-11 px-3 bg-transparent ${ inputActive ? "input-active": ""}`}>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-light-grey">
                  <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  </path>
              </svg>

              <input 
                onFocus={() => setinputActive(true)}
                onBlur={() => setinputActive(false)}
               className='border border-0 rounded-[0.6rem] p-0  w-full bg-transparent h-10 focus:outline-none placeholder:text-white block'
              placeholder="Пошук"/>
            </div>
           
            </div>
            <div className=" flex items-center">
                <button type="button" onClick={() => setisOpen (!isOpen)} className=" border border-[#343434] p-3 rounded-lg">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                
                </svg>
                </button>
              </div>


</div>
<nav className="px-5 py-3  items-center desktop:max-container tablet: max-w-[720px] mx-auto ">
   <ul className=" desktop:flex px-5 py-3  items-center desktop:max-container tablet: max-w-[720px]  tablet:flex hidden   mx-auto ">
    <li  className={`cursor-pointer border-b-2 p-3 ${activeLink === 
    "Cider" ? " border-b-blue-600":"border-b-2"}`}
     onClick={() => setActiveLink("Cider")}>
     <a href="#cider">Сидр</a>
     </li>
    <li className={`cursor-pointer border-b-2 p-3 ${activeLink === 
    "Shots" ? " border-b-blue-600":"border-b-2"}`}
    onClick={() => setActiveLink("Shots")}>
     <a href="#shots">Шоти</a>
    </li>
    <li className={`cursor-pointer border-b-2 p-3 ${activeLink === 
    "Alcho" ? " border-b-blue-600":"border-b-2"}`}
    onClick={() => setActiveLink("Alcho")}>
     <a href="#alcho">Важкий алкоголь</a>
    </li>
    <li className={`cursor-pointer border-b-2 p-3 ${activeLink === 
    "Pizza" ? " border-b-blue-600":"border-b-2"}`}
    onClick={() => setActiveLink("Pizza")}>
     <a href="#pizza">Піца</a>
    </li>
    <li className={`cursor-pointer border-b-2 p-3 ${activeLink === 
    "Hot-Dog" ? " border-b-blue-600":"border-b-2"}`}
    onClick={() => setActiveLink("Hot-Dog")}>
     <a href="#hot-dog">Хот-доги</a>
    </li>
    <li className={`cursor-pointer border-b-2 p-3 ${activeLink === 
    "Snack" ? " border-b-blue-600":"border-b-2"}`}
    onClick={() => setActiveLink("Snack")}>
     <a href="#snack">Снеки</a>
    </li>
    <li className={`cursor-pointer border-b-2 p-3 ${activeLink === 
    "NOAlcho" ? " border-b-blue-600":"border-b-2"}`}
    onClick={() => setActiveLink("NOAlcho")}>
     <a href="#noalcho">Б\А напої</a>
    </li>
   </ul>
   
   <button className=" flex desktop:hidden tablet:hidden border gap-3 w-fit border-[#495057] rounded-lg cursor-pointer py-0 pr-2 pl-3 h-11  text-center items-center  text-xl"   >
   {activeLink}
    <span>
    <svg  className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
    </span>
    
   </button>
  

</nav>

        <div className={` absolute h-screen  top-0 w-full z-50 bg-[#1d1b20] bg-opacity-70 flex justify-start   ${catopen  ? 'block':'hidden'}`}>
                <div className=" absolute top-1/4 left-1/4 bg-[#1d1b20] w-80 h-[400px] ml-5 rounded-xl">
                        
                </div>
        </div>
        



        <nav className={` absolute h-screen top-0 w-full z-50 bg-[#1d1b20] bg-opacity-70 flex justify-end ${isOpen ? 'block':'hidden'}` }>
        <div className="bg-[#1d1b20] h-screen w-[358px]">
          <div className=" p-4 flex justify-end" >
            <button className="bg-[#343434] rounded-xl w-11 h-11"
            onClick={() => setisOpen (!isOpen)}>
              <span className=" block h-0.5   rounded-t-full bg-white rotate-45"></span>
              <span className=" block h-0.5  rounded-t-full bg-white  -rotate-45"></span>
            </button>
          </div>
          <ul >
            <li className=" p-3">Контакти</li>
            <hr className=" border"/>
          </ul>

          </div>
        </nav>
        </header>

    
  )
}

export default Nav