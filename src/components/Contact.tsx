import Footer from './footer';
import Marquee from "./ui/Marquee"
import MarqueeRight from "./ui/MarqueeRight"
import TextFileds from "./ui/TextFileds"
import { motion } from 'framer-motion';
export default function Contact() {
  return (
    <section className='w-screen pt-4 '>
      <div className="w-full text-white">
        <div className="md:flex md:flex-row justify-center items-start">
          <div className="marquee md:w-[50%]">
            <div className="px-2 py-2">
              <motion.h1 className="font-bold text-2xl sm:text-4xl"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0, }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 1, ease: "easeOut", }}
              >Why They Choose Us?</motion.h1>
              <motion.h1 className="font-medium pb-2 w-[70%] sm:text-lg"
                initial={{ opacity: 0, x: -30, }}
                whileInView={{ opacity: 1, x: 0, }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              >Trusted by businesses and loved by users across industries.</motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, }}
              whileInView={{ opacity: 1, scale: 1, }}
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >
              <Marquee />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, }}
              whileInView={{ opacity: 1, scale: 1, }}
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            >
              <MarqueeRight />
            </motion.div>
          </div>
          <div className="formCont</div>act md:w-[50%]">
            <motion.div className="pt-10 md:pt-0 pl-2
           font-bold text-3xl sm:text-4xl md:pt-0l"
              initial={{ opacity: 0, x: -30, }}
              whileInView={{ opacity: 1, x: 0, }}
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >Get In Touch</motion.div>
            <motion.div className="pl-3 font-medium sm:text-lg"
              initial={{ opacity: 0, y: -30, }}
              whileInView={{ opacity: 1, y: 0, }}
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >Lets Work Together</motion.div>
            <div className="textArea">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1, }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              >
                <TextFileds title="Name" name='username' placeholder="Frist Name" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1, }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
              >
                <TextFileds title="Email addres" name='email' placeholder="letsworktogher@example.com" />
              </motion.div>
              <motion.div className="pl-2 flex flex-col"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1, }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
              >
                <h1 className="p-1 font-bold">Message</h1>
                <textarea name="helo" id="hello to"
                  placeholder="leave us messgae"
                  className="bg-white/15 p-2
              rounded focus:outline-none
              overflow-hidden 
              font-medium
              w-[90%] min-h-32"></textarea>
              </motion.div>
              <motion.div className="md:w-[100%] flex "
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1, }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
              >
                <div className="w-screen flex justify-center pt-6 md:justify-center md:px-4">
                  <button type="submit"
                    className="bg-white text-black rounded-4xl font-bold
                  hover:scale-102
                  px-8 py-2 shadow-white shadow-md transition-all
                  ease-in-out duration-500 hover:shadow-2xl hover:shadow-white/80">Send Message</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0.0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1, }}
          viewport={{ amount: 0.5, once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
        >
          <Footer />
        </motion.div>
      </div>
    </section>
  )
}
