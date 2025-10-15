import { motion } from 'framer-motion'
import { AiFillRocket } from 'react-icons/ai'
import { HiSparkles, HiUsers } from 'react-icons/hi'
import { MdPhoneIphone, MdWeb } from 'react-icons/md'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { SiAndroid } from 'react-icons/si'
import { TbSettingsAutomation } from 'react-icons/tb'
import { FlipWords, } from './ui/flipwords'
export default function About() {
    return (
        <section className='w-screen  text-white font-bold md:pt-50 lg:pt-20'>
            <div className='flex flex-col px-10 h-screen lg:min-h-0 '>
                <motion.div className="flex flex-row gap-2 text-3xl font-medium 
                sm:text-5xl md:text-7xl lg:text-5xl 2xl:text-6xl"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 1, once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Build
                    <FlipWords
                        className='p-0 m-0 font-bold'
                        words={['Beautiful', 'Modern', 'Cool',]} />
                </motion.div>
                <motion.h1 className='text-3xl font-medium sm:text-5xl md:text-6xl lg:text-5xl 2xl:text-6xl'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 1, once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                >Apps With Us</motion.h1>
                <motion.h1 className='text-inherit w-[80%] sm:text-2xl md:mt-4 2xl:text-3xl'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 1, once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                >Empowering Small Businesses Through Technology</motion.h1>
                <motion.p className="font-medium text-xs py-2 sm:text-lg sm:py-0
                 sm:text-gray-300 md:w-[80%] md:text-xl 2xl:text-2xl 2xl:w-[55%]"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 1, once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                >We believe every business, no matter how small, has the potential to grow.
                    Through the apps and websites we build, we help small companies upgrade their tools,
                    making them more efficient, modern, and ready to compete in the digital era.</motion.p>
                <motion.div
                    className='text-xl sm:text-2xl md:mt-5 md:text-4xl'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 1, once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
                >What we offer..</motion.div>
                <div className="lg:flex lg:flex-row lg:justify-start lg:h-[40%] lg:mt-4 ">
                    <div className="mt-2 lg:w-[50%] lg:justify-start lg:mt-0 ">
                        <ul className="mt-3 space-y-2 sm:space-y-1
                 text-sm font-medium lg:text-2xl
                 text-gray-300 sm:mt-1 sm:text-lg md:text-2xl">
                            <div className="flex flex-col gap-3.5">
                                <motion.li className='flex gap-2 items-center lg:gap-4 lg:text-xl 2xl:text-3xl'
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ amount: 1, once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                                > <TbSettingsAutomation size={30} className='sm:scale-120 lg:scale-150' /> Fully customizable solutions tailored to your business needs</motion.li>
                                <motion.li className='flex gap-2 items-center lg:gap-4 lg:text-xl 2xl:text-3xl'
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ amount: 1, once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
                                > <AiFillRocket size={30} className='sm:scale-120 lg:scale-150' /> Cross-platform apps (Android, and Web) in one development cycle</motion.li>
                                <motion.li className='flex gap-2 items-center lg:gap-4 lg:text-xl 2xl:text-3xl'
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ amount: 1, once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 1.9 }}
                                ><MdPhoneIphone size={30} className='sm:scale-120 lg:scale-150' /> Scalable & future-proof technology that grows with your business</motion.li>
                                <motion.li className='flex gap-2 items-center lg:gap-4 lg:text-xl 2xl:text-3xl'
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ amount: 1, once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 2.1 }}
                                ><RiMoneyDollarCircleFill size={30} className='sm:scale-120 lg:scale-150' /> Affordable and transparent pricing with no hidden costs</motion.li>
                                <motion.li className='flex gap-2 items-center lg:gap-4 lg:text-xl 2xl:text-3xl'
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ amount: 1, once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 2.3 }}
                                ><HiUsers size={30} className='sm:scale-120 lg:scale-150' /> A partner mindset — we grow when your business grows</motion.li>
                            </div>
                        </ul>
                    </div>
                    <div className="flex flex-col pt-8 gap-4 sm:pt-4 md:pt-10 md:items-center lg:w-[50%]   lg:pt-0 lg:justify-start">
                        {/* Android Development */}
                        <motion.div className="w-[100%] md:w-[90%] rounded-2xl h-20 bg-white/15 border-1 border-white/25 
                    flex flex-row gap-2 items-center sm:gap-6 lg:gap-6 p-6 md:h-[50%] lg:h-[40%]  2xl:w-[70%] 2xl:h-[28%] 
                    xl:h-min xl:px-6 xl:py-2 
                    hover:bg-white/20 transition-all hover:border-white/25"
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{  once: true, }}
                            transition={{ duration: 1.5, ease: "circOut", delay: 2.7 }}>
                            <SiAndroid size={80} className='sm:scale-125 lg:scale-125 xl:scale-100 2xl:scale-90' />
                            <div className="flex flex-col scale-85 sm:scale-100">
                                <h1 className="md:text-xl lg:text-base 2xl:text-xl">Android Development</h1>
                                <p className="font-light text-xs sm:text-sm md:text-xl lg:text-base">We craft modern Android apps that help your business connect directly with anything — simple, fast, and built to scale.</p>
                            </div>
                        </motion.div>
                        {/* Android Development */}
                        <motion.div className="w-[100%] md:w-[90%] rounded-2xl h-20 bg-white/15 border-1 border-white/25 
                    flex flex-row gap-2 items-center sm:gap-6 lg:gap-6 p-6 md:h-[50%] lg:h-[40%] 2xl:w-[70%] 2xl:h-[28%] 
                    xl:h-min xl:px-6 xl:py-2 
                    hover:bg-white/20 transition-all hover:border-white/25"
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{  once: true, }}
                            transition={{ duration: 1.5, ease: "circOut", delay: 2.7 }}>
                            <MdWeb size={80} className='sm:scale-125 lg:scale-125 xl:scale-100 2xl:scale-90' />
                            <div className="flex flex-col scale-85 sm:scale-100">
                                <h1 className="md:text-xl lg:text-base 2xl:text-xl">Web Development</h1>
                                <p className="font-light text-xs sm:text-sm md:text-xl lg:text-base">From landing pages to full platforms, we build responsive, high-performance websites that make your brand stand out online.</p>
                            </div>
                        </motion.div>
                        {/* Android Development */}
                        <motion.div className="w-[100%] md:w-[90%] rounded-2xl h-20 bg-white/15 border-1 border-white/25 
                    flex flex-row gap-2 items-center sm:gap-6 lg:gap-6 p-6 md:h-[50%] lg:h-[40%] 2xl:w-[70%] 2xl:h-[28%] 
                    xl:h-min xl:px-6 xl:py-2 
                    hover:bg-white/20 transition-all hover:border-white/25"
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{  once: true, }}
                            transition={{ duration: 1.5, ease: "circOut", delay: 2.7 }}>
                            <HiSparkles size={80} className='sm:scale-125 lg:scale-125 xl:scale-100 2xl:scale-90' />
                            <div className="flex flex-col scale-85 sm:scale-100">
                                <h1 className="md:text-xl lg:text-base 2xl:text-xl">Ai Development</h1>
                                <p className="font-light text-xs sm:text-sm md:text-xl lg:text-base">Let AI do the heavy lifting. Smarter workflows, better decisions, and more time for what really matters.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section >
    )
}
