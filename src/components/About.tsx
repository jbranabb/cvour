import { FlipWords, } from './ui/flipwords'
import { AiFillRocket } from 'react-icons/ai'
import { MdPhoneIphone, MdWeb } from 'react-icons/md'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { TbSettingsAutomation } from 'react-icons/tb'
import { HiUsers, HiSparkles } from 'react-icons/hi'
import { SiAndroid } from 'react-icons/si'
export default function About() {
    return (
        <section className='w-screen  text-white font-bold md:pt-50 lg:pt-20'>
            <div className='flex flex-col px-10 h-screen lg:min-h-0 '>
                <div>
                </div>
                <div className="flex flex-row gap-2 text-3xl font-medium 
                sm:text-5xl md:text-7xl lg:text-5xl 2xl:text-6xl">
                    Build
                    <FlipWords
                        className='p-0 m-0 font-bold'
                        words={['Beautiful', 'Modern', 'Cool',]} />
                </div>
                <h1 className='text-3xl font-medium sm:text-5xl md:text-6xl lg:text-5xl 2xl:text-6xl'>Apps With Us</h1>
                <h1 className='text-inherit w-[80%] sm:text-2xl md:mt-4 2xl:text-3xl'>Empowering Small Businesses Through Technology</h1>
                <p className="font-medium text-xs py-2 sm:text-lg sm:py-0
                 sm:text-gray-300 md:w-[80%] md:text-xl 2xl:text-2xl 2xl:w-[55%]">We believe every business, no matter how small, has the potential to grow. Through the apps and websites we build, we help small companies upgrade their tools, making them more efficient, modern, and ready to compete in the digital era.</p>
                <div className='text-xl sm:text-2xl md:mt-5 md:text-4xl'>What we offer..</div>

                <div className="lg:flex lg:flex-row lg:justify-start lg:h-[40%] lg:mt-4 ">
                    <div className="mt-2 lg:w-[50%] lg:justify-start lg:mt-0 ">
                        <ul className="mt-3 space-y-2 sm:space-y-1
                 text-sm font-medium lg:text-2xl
                 text-gray-300 sm:mt-1 sm:text-lg md:text-2xl">
                            <div className="flex flex-col gap-3.5">
                                <li className='flex gap-2 items-center lg:gap-4 lg:text-xl 2xl:text-3xl'> <TbSettingsAutomation size={30} className='sm:scale-120 lg:scale-150' /> Fully customizable solutions tailored to your business needs</li>
                                <li className='flex gap-2 items-center lg:gap-4 lg:text-xl 2xl:text-3xl'> <AiFillRocket size={30} className='sm:scale-120 lg:scale-150' /> Cross-platform apps (Android, and Web) in one development cycle</li>
                                <li className='flex gap-2 items-center lg:gap-4 lg:text-xl 2xl:text-3xl'><MdPhoneIphone size={30} className='sm:scale-120 lg:scale-150' /> Scalable & future-proof technology that grows with your business</li>
                                <li className='flex gap-2 items-center lg:gap-4 lg:text-xl 2xl:text-3xl'><RiMoneyDollarCircleFill size={30} className='sm:scale-120 lg:scale-150' /> Affordable and transparent pricing with no hidden costs</li>
                                <li className='flex gap-2 items-center lg:gap-4 lg:text-xl 2xl:text-3xl'><HiUsers size={30} className='sm:scale-120 lg:scale-150' /> A partner mindset — we grow when your business grows</li>
                            </div>
                        </ul>
                    </div>
                    <div className="flex flex-col pt-8 gap-4 sm:pt-4 md:pt-10 md:items-center lg:w-[50%]  lg:pt-0 lg:justify-start">
                        <div className="w-[100%] md:w-[90%] rounded-2xl h-20 bg-white/15 border-1 border-white/25 
                    flex flex-row gap-4 items-center sm:gap-2 lg:gap-6 p-6 md:h-[50%] lg:h-[25%] 2xl:w-[70%] 2xl:h-[28%]  hover:bg-white/20 transition-all hover:border-white/25">
                            <SiAndroid size={80} className='sm:scale-80 lg:scale-125 xl:scale-100 2xl:scale-90' />
                            <div className="flex flex-col">
                                <h1 className="md:text-xl lg:text-base 2xl:text-xl">Android Development</h1>
                                <p className="font-light text-xs sm:text-sm md:text-xl lg:text-base ">We craft modern Android apps that help your business connect directly with anything — simple, fast, and built to scale.</p>
                            </div>
                        </div>
                        <div className="w-[100%] md:w-[90%] rounded-2xl h-20 bg-white/15 border-1 border-white/25 
                    flex flex-row gap-4 items-center sm:gap-2 lg:gap-6 p-6 md:h-[50%] lg:h-[25%] 2xl:w-[70%] 2xl:h-[28%]  hover:bg-white/20 transition-all hover:border-white/25">
                            <MdWeb size={80} className='sm:scale-80 lg:scale-125 xl:scale-100 2xl:scale-90' />
                            <div className="flex flex-col">
                                <h1 className="md:text-xl lg:text-base 2xl:text-xl">Web Development</h1>
                                <p className="font-light text-xs sm:text-sm md:text-xl lg:text-base">From landing pages to full platforms, we build responsive, high-performance websites that make your brand stand out online.</p>
                            </div>
                        </div>
                        <div className="w-[100%] md:w-[90%] rounded-2xl h-20 bg-white/15 border-1 border-white/25 
                    flex flex-row gap-4 items-center sm:gap-2 lg:gap-6 p-6 md:h-[50%] lg:h-[25%] 2xl:w-[70%] 2xl:h-[28%]  hover:bg-white/20 transition-all hover:border-white/25">
                            <HiSparkles size={80} className='sm:scale-80 lg:scale-125 xl:scale-100 2xl:scale-90' />
                            <div className="flex flex-col">
                                <h1 className="md:text-xl lg:text-base 2xl:text-xl">Ai Development</h1>
                                <p className="font-light text-xs sm:text-sm md:text-xl lg:text-base">Let AI do the heavy lifting. Smarter workflows, better decisions, and more time for what really matters.</p>
                            </div>
                        </div>


                       


                    </div>
                </div>

            </div>
        </section>
    )
}
