import React from 'react'
import {SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'
export default function Home() {
  return (
    <section className='w-full h-full'>
      <div className="flex flex-col h-screen gap-2 font-bold text-white pt-30 px-10">
        <div className="text-xl">ServeSmth</div>
        <div className="text-5xl">You Know The business, we Know the Chemistry</div>
        <div className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae consectetur magni quos ullam sed ab ea sunt ipsa laudantium unde.</div>
        <div className="flex flex-row gap-3 ">
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
       </div>
      </div>
    </section>
  )
}
