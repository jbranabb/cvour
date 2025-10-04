import React from 'react'
import {MdLocationPin } from 'react-icons/md'
interface Cards {
 path: string,
 title: string,
 subTitle: string,
 type: string,
 location: string,
 tools:React.ReactNode[]


}

export default function CardProjects( cards : Cards) {
    return (
        <div className="backdrop-blur-2xl bg-white/5 border-1 rounded-2xl border-white/20
         text-white flex flex-col justify-center items-center ">
            <div className="flex justify-center">
                <img src={cards.path} alt="thsis"
                    className='
           rounded shadow-2xl 
           bg-black h-60 w-full
           object-cover scale-80
           '/>
                <div className="absolute h-60 w-full opacity-0 
           transition-all 
           object-cover
            hover:backdrop-blur-xs rounded
            bg-black/50
            duration-200
           hover:opacity-100 scale-80 flex justify-center items-center">{cards.type}</div>
            </div>
            <div className="px-8 pb-4 flex flex-col gap-4 sm:gap-2 ">
                <h1 className="font-bold sm:text-lg ">{cards.title}</h1>
                <div className="flex flex-row gap-1 text-xs items-center
                 sm:scale-120 sm:pl-10 md:pl-6"> <MdLocationPin size={12} className='sm:scale-120'/>{cards.location}</div>
                <p className='text-xs font-medium sm:text-base md:text-sm'>{cards.subTitle}</p> 
                <div className='flex flex-row sm:scale-110 
                sm:pl-4 md:pl-2 '>
                {cards.tools.map((tool, i)=> (<div key={i}>{tool}</div>))}
                </div>
            </div>
        </div>
    )
}
