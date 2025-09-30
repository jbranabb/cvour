import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'
export default function Home() {
  return (
    <section className='w-full h-full'>
      <div className="flex flex-col h-screen gap-0.5 font-bold text-white pt-30 px-10">
        <div className="text-2xl">Servio</div>
        <div className="text-4xl">You Know The business, we Know the Chemistry</div>
        <div className="font-light text-gray-300">Every business has its own rhythm. That’s why we’re 
          here not just as a service provider, but as a partner who understands your flow—so the
           chemistry between strategy and execution works in harmony.</div>
        <div className='flex- flex-row'>
          <div className="flex flex-row gap-2 pt-2 ">
            {/* Github */}
            <div className='hover:bg-white rounded-full duration-150'>
              <SiGithub size={40} className='hover:text-blue-950 hover:scale-110 transition-all' />
            </div>
            {/* Linkedin */}
            <div className='hover:bg-white rounded-2xl duration-150'>
              <SiLinkedin size={40} className='hover:text-sky-500 hover:scale-110 transition-all' />
            </div>
            {/* Instagram */}
            <div className='hover:bg-gradient-to-bl from-purple-700 to-orange-400 rounded-xl duration-150'>
              <SiInstagram size={40} className='hover:text-white hover:scale-80 transition-all' />
            </div>
            <div className="w-28 h-10 bg-white/5 flex justify-center items-center transition-shadow
            duration-500 ease-in-out
             rounded-2xl border-zinc-600 border-1 hover:cursor-pointer hover:shadow-white/20 hover:shadow-lg">
              <div className="transition-transform hover:rotate-6 hover:scale-120"> Explore</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
