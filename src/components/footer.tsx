import React from 'react'
import { Si1And1, SiInstagram, SiX, SiLinkedin, SiGithub } from 'react-icons/si'
export default function Footer() {
    return (
        <div className="w-screen h-[80%] text-white 
        bg-gradient-to-t from-white/10 to-white/0 pt-10">
            <div className='flex flex-row gap-2
             items-center font-extrabold px-2 py-2 text-xl sm:text-3xl'> <Si1And1 size={20} className='sm:scale-110'/><span>Servio</span></div>
            <p className="px-2 text-sm w-[60%] sm:text-lg">Lorem ipsum olor sit amet, consectetur adipisicing elit. Odit, vel?</p>
            <div className="flex flex-row gap-2 px-2 pt-6 sm:scale-120 sm:max-w-min sm:mx-2 ">
                <div className="hover:scale-110">
                <SiX />
                </div>
                <div className="hover:scale-110">
                <SiInstagram />
                </div>
                <div className="hover:scale-110">
                <SiLinkedin />
                </div>
                <div className="hover:scale-110">
                <SiGithub />
                </div>
            </div>
            <div className="flex flex-row w-screen items-center justify-between px-2 ">
            <p className="text-sm py-10 w-[30%] sm:text-base"> © 2025 All rights reserved, Hope We Can Help.</p>
            <div className="flex flex-col underline text-xs sm:text-base">
            <p className="pr-4">Privacy Policy</p>
            <p className="pr-4">Terms Service</p>
            </div>
            </div>
        </div>
    )
}
