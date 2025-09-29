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
        <div className="backdrop-blur-2xl bg-white/5 border-1 rounded-2xl border-white/20 text-white flex flex-col sm:flex-row justify-center items-center ">
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
            <div className="px-8 pb-4 flex flex-col gap-4 ">
                <h1 className="font-bold ">{cards.title}</h1>
                <div className="flex flex-row gap-1 text-xs items-center"> <MdLocationPin size={12}/>{cards.location}</div>
                <p className='text-xs font-medium ' >{cards.subTitle}</p> 
                <div className='flex flex-row'>
                {cards.tools.map((tool, i)=> (<div key={i}>{tool}</div>))}
                </div>
            </div>
        </div>
    )
}
