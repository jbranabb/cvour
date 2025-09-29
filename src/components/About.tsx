import React from 'react'
import { SiLaravel, SiAndroid } from 'react-icons/si'
import { FiSettings } from 'react-icons/fi'
import { FlipWords, } from './ui/flipwords'
export default function About() {
    return (
        <section className='w-screen min-h-screen text-white font-bold'>
            <div className='flex flex-col p-10'>
                <div className="flex flex-row gap-2 text-3xl font-medium">
                    Build
                    <FlipWords
                        className='p-0 m-0 font-bold'
                        words={['Beautiful', 'Modern', 'Cool',]} />
                        </div>
                <h1 className='text-3xl font-medium'>Apps With Us</h1>
                <h1 className='text-inherit'>Empowering Small Businesses Through Technology”</h1>
                <p className="font-medium text-xs">We believe every business, no matter how small, has the potential to grow. Through the apps and websites we build, we help small companies upgrade their tools, making them more efficient, modern, and ready to compete in the digital era.</p>
                <div className='mt-3 text-xl'>What we offer..</div>
                <div className="w-full rounded grid gap-4 pt-2 ">
                    {/* It COns */}
                    <div className="bg-gray-500/15 p-2 rounded-2xl flex flex-row gap-2 items-center">
                        <FiSettings size={40} className='hover:rotate-120 hover:scale-110 ease-in-out transition-transform'/>
                        <div className="flex flex-col">
                            <h1>IT Conslutant</h1>
                            <h1 className='font-medium text-xs'>consulting how do'd like to do with your apps</h1>
                        </div>
                    </div>
                    {/* web Devp */}
                    <div className="bg-gray-500/15 p-2 rounded-2xl flex flex-row gap-2 items-center">
                        <SiLaravel size={40} className='hover:animate-pulse hover:scale-110 ease-in-out transition-transform'/>
                        <div className="flex flex-col">

                            <h1>Website Development</h1>
                            <h1 className='font-medium text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing </h1>
                        </div>
                    </div>
                    {/* web Devp */}
                    <div className="bg-gray-500/15 p-2 rounded-2xl flex flex-row gap-2 items-center">
                        <SiAndroid size={40} className='hover:scale-110 hover:animate-pulse ease-in-out transition-transform'/>
                        <div className="flex flex-col">
                            <h1>Mobile Development</h1>
                            <h1 className='font-medium text-xs'>consulting how do'd like to do with your apps</h1>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
