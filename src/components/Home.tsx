import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <section className='w-full h-full'>
      <div className="flex flex-col h-screen gap-0.5 font-bold text-white pt-30 px-10
      md:mt-10 lg:items-center
      2xl:mt-30
      ">
        <motion.div className="text-2xl sm:text-4xl md:text-6xl"
        initial={{opacity:0,y:30}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:"easeOut",}}
        >Servio</motion.div>
        <motion.div className="text-4xl sm:text-6xl md:text-7xl lg:text-center lg:w-[90%]"
         initial={{opacity:0,y:30}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:"easeOut", delay:0.5}}
        >You Know The business, we Know the Chemistry</motion.div>
        <motion.div className="font-light text-gray-300 sm:text-xl md:text-2xl lg:text-center lg:w-[70%] lg:mt-2 "
         initial={{opacity:0,y:30}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:"easeOut",delay:1}}
        >Every business has its own rhythm. That’s why we’re 
          here not just as a service provider, but as a partner who understands your flow—so the
           chemistry between strategy and execution works in harmony.</motion.div>
        <motion.div className='flex- flex-row'
         initial={{opacity:0,y:30}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:"easeOut",delay:1.5}}
        >
          <div className="flex flex-row gap-2 pt-2 ">
            <div className="socialMediaLogo flex  blcok lg:hidden ">
            {/* Github */}
            <div className='hover:bg-white rounded-full duration-150'>
              <SiGithub size={40} className='hover:text-blue-950 hover:scale-100 transition-all scale-75' />
            </div>
            {/* Linkedin */}
            <div className='hover:bg-white rounded-2xl duration-150'>
              <SiLinkedin size={40} className='hover:text-sky-500 hover:scale-100 transition-all scale-75' />
            </div>
            {/* Instagram */}
            <div className='hover:bg-gradient-to-bl from-purple-700 to-orange-400 rounded-xl duration-150'>
              <SiInstagram size={40} className='hover:text-white hover:scale-70 transition-all scale-75' />
            </div>
            </div>
            <Link
            to='about'
            spy={true}
            smooth={true}
            >
            <div className="w-28 h-10 bg-white/5 flex justify-center items-center transition-shadow
            duration-500 ease-in-out
            md:w-40 
             rounded-2xl border-zinc-600 border-1 hover:cursor-pointer hover:shadow-white/20 hover:shadow-lg">
              <div className="transition-transform hover:rotate-6 hover:scale-120"> Explore</div>
            </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
