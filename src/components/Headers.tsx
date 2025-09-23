import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
export default function Headers() {
  const [open, setOpen] = useState(false);
  const onClicked = () => {
    setOpen(!open)
  }
  const [nav, setNav] = useState(true);
  const [scroll, setScroll] = useState(0);

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > scroll){
        setNav(false)
      }else{
        setNav(true)
      }
      setScroll(window.scrollY);
    }
   window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [scroll])
  console.log(nav)

  return (
    <div className={`fixed duration-150 transition-transform ${nav ? "translate-y-0" : "-translate-y-full"} backdrop-blur-sm w-screen top-0
       text-white shadow-xl p-6 flex flex-row justify-between`}>
      <div className="font-bold">FArel&jbran</div>
      <button 
      className='hover:cursor-pointer'
        onClick={onClicked}
      > {open ? <Menu size={28} /> :  <Menu size={28} /> }
      </button>
        <div className={`fixed inset-0 w-screen h-screen bg-black/30 duration-200
          transition-opacity ease-in-out
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} flex justify-end`}
         onClick={onClicked}
         >
          <div className={`bg-white/10 w-64 font-bold h-full p-6 backdrop-blur-sm transform transition-transform duration-300
          ease-in-out ${open ? "translate-x-0 " : "translate-x-full"}
          `} onClick={(e) => e.stopPropagation()} >
            <div className="flex justify-end">
            <X size={28} onClick={onClicked} />  
            </div>
            <nav className="flex flex-col gap-5
            text-xl text-black/30">
            <Link to="home" activeClass='text-white' spy={true} smooth={true} className=' transform transition-transform hover:text-white hover:scale-95'>Home</Link>
            <Link to="about" activeClass='text-white' spy={true} smooth={true} className=' transform transition-transform hover:text-white hover:scale-95'>About Us</Link>
            <Link to="projects" activeClass='text-white' spy={true} smooth={true} className=' transform transition-transform hover:text-white hover:scale-95'>Projects</Link>
            <Link to="contact" activeClass='text-white' spy={true} smooth={true} className=' transform transition-transform hover:text-white hover:scale-95'>Contact</Link>
            </nav>
          </div>
        </div>
    </div>
  )
}
