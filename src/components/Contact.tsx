import Footer from './footer';
import Marquee from "./ui/Marquee"
import MarqueeRight from "./ui/MarqueeRight"
import TextFileds from "./ui/TextFileds"
export default function Contact() {
  return (
    <section className='w-screen min-h-screen pt-4'>
      <div className="w-full min-h-screen text-white">
        <div className="md:flex md:flex-row justify-center items-start">
        <div className="marquee md:w-[50%]">
           <div className="px-4 py-2">
          <h1 className="font-bold text-2xl sm:text-4xl">Why They Choose Us?</h1>
          <h1 className="font-medium pb-2 w-[70%] sm:text-lg">Trusted by businesses and loved by users across industries.</h1>
        </div>
        <Marquee />
        <MarqueeRight />
        </div>
        <div className="formContact md:w-[50%]">
          <div className="pt-10 md:pt-0 pl-2 font-bold text-3xl sm:text-4xl md:pt-0l">Get In Touch</div>
          <div className="pl-3 font-medium sm:text-lg">Lets Work Together</div>
          <TextFileds title="Name" name='username' placeholder="Frist Name" />
          <TextFileds title="Email addres" name='email' placeholder="letsworktogher@example.com" />
          <div className="pl-2 flex flex-col">
            <h1 className="p-1">Message</h1>
            <textarea name="helo" id="hello to"
              placeholder="leave us messgae"
              className="bg-white/15 p-2
              rounded focus:outline-none
              overflow-hidden 
              font-medium
              w-[90%] min-h-32"></textarea>
          </div>
          <div className="md:w-[100%] flex ">
          <div className="w-screen flex justify-center pt-6 md:justify-center md:px-4">
            <button type="submit"
              className="bg-white text-black rounded-4xl font-bold
           px-8 py-2 shadow-white shadow-md transition-all
           hover:scale-102
           ease-in-out duration-500 hover:shadow-2xl hover:shadow-white/80">Send Message</button>
          </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}
