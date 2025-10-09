import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'
export default function Headers() {
  const [open, setOpen] = useState(false);
  const onClicked = () => {
    setOpen(!open)
  }
  const [nav, setNav] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [items, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scroll) {
        setNav(false)
      } else {
        setNav(true)
      }
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setVisible(true)
      } else {
        setVisible(false)
      }
      // console.log(window.scrollY)
      // console.log(items)
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll])

  return (
    <div className={`
      fixed duration-150 transition-all xl:backdrop-blur-none xl:shadow-none
      ${nav && !open ? "backdrop-blur-2xl" : "backdrop-blur-none bg-black xl:bg-transparent"}
      ${nav ? "translate-y-0" : "-translate-y-full"}
      w-screen top-0 z-20 
       text-white shadow-xl p-6 flex flex-row justify-between items-center`}>
      <div className={`font-bold text-xl pl-2.5 transition-all duration-300 ease-in-out  2xl:text-2xl ${items ? 'xl:opacity-100 translate-y-0' : 'xl:opacity-0 translate-y-2'}`}>Servio <span className=' hidden text-sm 2xl:text-base xl:block'>Production</span></div>
      <div className={`font-bold text-xl ${items ? 'hidden' : 'block'}`}></div>

      <div className={`hidden xl:block duration-500 transition-all ${items ? '-translate-y-20': 'translate-y-0'}`}>
        <div className="px-20 py-4 rounded-4xl h-15 w-100 backdrop-blur-md 
        bg-white/10
        flex flex-rows gap-3 items-center justify-center">
          <Link to="home" activeClass='text-white scale-120 font-bold' spy={true} smooth={true} className=' hover:scale-110 hover:font-bold border-1 hover:mx-2 rounded-2xl px-3 border-white/10 cursor-pointer transition-all duration-200 ease-in-out'>Home</Link>
          <Link to="about" activeClass='text-white scale-120 font-bold' spy={true} smooth={true} className=' hover:scale-110 hover:font-bold border-1 hover:mx-2 rounded-2xl px-3 border-white/10 cursor-pointer transition-all duration-200 ease-in-out'>About</Link>
          <Link to="projects" activeClass='text-white scale-120 font-bold' spy={true} smooth={true} className=' hover:scale-110 hover:font-bold border-1 hover:mx-2 rounded-2xl px-3 border-white/10 cursor-pointer transition-all duration-200 ease-in-out'>Projects</Link>
          <Link to="contact" activeClass='text-white scale-120 font-bold' spy={true} smooth={true} className=' hover:scale-110 hover:font-bold border-1 hover:mx-2 rounded-2xl px-3 border-white/10 cursor-pointer transition-all duration-200 ease-in-out'>Contact</Link>
        </div>
      </div>
      <div className={`font-bold text-xl ${items ? 'hidden' : 'block'}`}></div>
      <div className={` transition-all duration-300 ease-in-out ${items ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
        <div className="hidden xl:block">
          <div className="flex flex-row">
            <div className="socialMediaLogo flex gap-2 scale-50 2xl:scale-80">

              <div className='hover:bg-white rounded-full duration-150'>
                <SiGithub size={40} className='hover:text-blue-950 hover:scale-110 transition-all' />
              </div>

              <div className='hover:bg-white rounded-2xl duration-150'>
                <SiLinkedin size={40} className='hover:text-sky-500 hover:scale-110 transition-all' />
              </div>

              <div className='hover:bg-gradient-to-bl from-purple-700 to-orange-400 rounded-xl duration-150'>
                <SiInstagram size={40} className='hover:text-white hover:scale-80 transition-all' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className='hover:cursor-pointer block xl:hidden'
        onClick={onClicked}
      > {open ? <Menu size={28} /> : <Menu size={28} />}
      </button>
      <div className={`fixed inset-0 w-screen h-screen bg-black/30 duration-200
        backdrop-blur-2xl z-10
          transition-opacity ease-in-out
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} flex justify-end`}
        onClick={onClicked}
      >
        <div className={`bg-white/10 w-64 font-bold h-full p-6 z-20  transform transition-transform duration-300
          ease-in-out ${open ? "translate-x-0 " : "translate-x-full"}
          `} onClick={(e) => e.stopPropagation()} >
          <div className="flex justify-end">
            <X size={28} onClick={onClicked} />
          </div>
          <nav className="flex flex-col gap-5
            text-xl text-black/30">
            <Link to="home" activeClass='text-white' spy={true} smooth={true} onClick={onClicked} className=' transform transition-transform hover:text-white hover:scale-95'>Home</Link>
            <Link to="about" activeClass='text-white' spy={true} smooth={true} onClick={onClicked} className=' transform transition-transform hover:text-white hover:scale-95'>About Us</Link>
            <Link to="projects" activeClass='text-white' spy={true} smooth={true} onClick={onClicked} className=' transform transition-transform hover:text-white hover:scale-95'>Projects</Link>
            <Link to="contact" activeClass='text-white' spy={true} smooth={true} onClick={onClicked} className=' transform transition-transform hover:text-white hover:scale-95'>Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
