import { FlipWords, } from './ui/flipwords'
import { AiFillRocket } from 'react-icons/ai'
import { MdPhoneIphone, MdWeb } from 'react-icons/md'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { TbSettingsAutomation } from 'react-icons/tb'
import { HiUsers, HiSparkles } from 'react-icons/hi'
import { SiAndroid} from 'react-icons/si'
export default function About() {
    return (
        <section className='w-screen min-h-screen text-white font-bold'>
            <div className='flex flex-col p-10 h-screen '>
                <div>
                </div>
                <div className="flex flex-row gap-2 text-3xl font-medium sm:text-5xl">
                    Build
                    <FlipWords
                        className='p-0 m-0 font-bold'
                        words={['Beautiful', 'Modern', 'Cool',]} />
                </div>
                <h1 className='text-3xl font-medium sm:text-5xl'>Apps With Us</h1>
                <h1 className='text-inherit w-[80%] sm:text-2xl'>Empowering Small Businesses Through Technology”</h1>
                <p className="font-medium text-xs py-2 sm:text-lg sm:py-0 sm:text-gray-300">We believe every business, no matter how small, has the potential to grow. Through the apps and websites we build, we help small companies upgrade their tools, making them more efficient, modern, and ready to compete in the digital era.</p>
                <div className='text-xl sm:text-2xl'>What we offer..</div>
                <ul className="mt-3 space-y-2 sm:space-y-1 text-sm font-medium
                 text-gray-300 sm:mt-1 sm:text-lg">
                    <li className='flex gap-2 items-center'> <TbSettingsAutomation size={30} className='sm:scale-120' /> Fully customizable solutions tailored to your business needs</li>
                    <li className='flex gap-2 items-center'> <AiFillRocket size={30} className='sm:scale-120' /> Cross-platform apps (Android, and Web) in one development cycle</li>
                    <li className='flex gap-2 items-center'><MdPhoneIphone size={30} className='sm:scale-120' /> Scalable & future-proof technology that grows with your business</li>
                    <li className='flex gap-2 items-center'><RiMoneyDollarCircleFill size={30} className='sm:scale-120' /> Affordable and transparent pricing with no hidden costs</li>
                    <li className='flex gap-2 items-start'><HiUsers size={30} className='sm:scale-120' /> A partner mindset — we grow when your business grows</li>
                </ul>
                <div className="flex flex-col pt-8 gap-4 sm:pt-4">
                    <div className="w-[100%] rounded-2xl h-20 bg-white/15 border-1 border-white/25 
                    flex flex-row gap-4 items-center sm:gap-2 p-6 hover:bg-white/20 transition-all hover:border-white/25">
                      <SiAndroid size={80} className='sm:scale-80' />
                      <div className="flex flex-col">
                      <h1 className="">Android Development</h1>
                      <p className="font-light text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, possimus?</p>
                      </div>
                    </div>
                    <div className="w-[100%] rounded-2xl h-20 bg-white/15 border-1 border-white/25 
                    flex flex-row gap-4 items-center sm:gap-2 p-6 hover:bg-white/20 transition-all hover:border-white/25">
                      <MdWeb size={80} className='sm:scale-80' />
                      <div className="flex flex-col">
                      <h1 className="">Web Development</h1>
                      <p className="font-light text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, possimus?</p>
                      </div>
                    </div>
                    <div className="w-[100%] rounded-2xl h-20 bg-white/15 border-1 border-white/25 
                    flex flex-row gap-4 items-center sm:gap-2 p-6 hover:bg-white/20 transition-all hover:border-white/25">
                      <HiSparkles size={80} className='sm:scale-80' />
                      <div className="flex flex-col">
                      <h1 className="">Ai Development</h1>
                      <p className="font-light text-xs sm:text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, possimus?</p>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
