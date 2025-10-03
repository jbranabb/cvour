import { FlipWords, } from './ui/flipwords'
import { AiFillRocket } from 'react-icons/ai'
import { MdPhoneIphone, MdWeb } from 'react-icons/md'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { TbSettingsAutomation } from 'react-icons/tb'
import { HiUsers } from 'react-icons/hi'
export default function About() {
    return (
        <section className='w-screen min-h-screen text-white font-bold'>
            <div className='flex flex-col p-10 h-screen '>
                <div>
                </div>
               <img 
               className='mb-6 h-60 object-cover rounded-sm '
               src="src/assets/mnt.jpeg" alt="" />
                <div className="flex flex-row gap-2 text-3xl font-medium">
                    Build
                    <FlipWords
                        className='p-0 m-0 font-bold'
                        words={['Beautiful', 'Modern', 'Cool',]} />
                </div>
                <h1 className='text-3xl font-medium'>Apps With Us</h1>
                <h1 className='text-inherit w-[80%]'>Empowering Small Businesses Through Technology”</h1>
                <p className="font-medium text-xs py-2">We believe every business, no matter how small, has the potential to grow. Through the apps and websites we build, we help small companies upgrade their tools, making them more efficient, modern, and ready to compete in the digital era.</p>
                <div className='text-xl'>What we offer..</div>
                <ul className="mt-3 space-y-2 text-sm font-medium text-gray-300">
                    <li className='flex gap-2 items-center'> <TbSettingsAutomation size={30} /> Fully customizable solutions tailored to your business needs</li>
                    <li className='flex gap-2 items-center'> <AiFillRocket size={30} /> Cross-platform apps (Android, and Web) in one development cycle</li>
                    <li className='flex gap-2 items-center'><MdWeb size={30} /> Scalable & future-proof technology that grows with your business</li>
                    <li className='flex gap-2 items-center'><RiMoneyDollarCircleFill size={30} /> Affordable and transparent pricing with no hidden costs</li>
                    <li className='flex gap-2 items-center'><HiUsers size={30} /> A partner mindset — we grow when your business grows</li>
                </ul>
            </div>
        </section>
    )
}
