import { createClient } from '@supabase/supabase-js'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import CardProjects from './ui/CardProjects'
import ToolsProjects from './ui/ToolsProjects'
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)
type ParamsProjects = {
  id: number,
  tittle: string,
  subtite: string,
  img_path: string,
  type: string,
  location: string,
  created_at: string;
  tools: string[];
}
export default function Projects() {
  const [projects, setProjects] = useState<ParamsProjects[]>([])
  const [loading, setLoading] = useState(true);
  async function getProjects() {
    const { data, error } = await supabase.from('servio_projects').select('*');
    if (error) console.log('Terjadi Masalah bro', error)
    else setProjects(data);
    console.log(data)
    setLoading(false)
  }
  useEffect(() => {
    console.log('fetching....')
    getProjects();
  }, []);
  return (
    <section className='w-screen min-h-screen xl:min-h-0 xl:mb-60 p-0 mt-25 md:mt-30 lg:mt-0'>
      <div className="gap-10 sm:px-10 xl:px-0">
        <div className="p-6 2xl:px-12"
        >
          <motion.h1 className="text-white text-2xl font-extrabold sm:text-3xl md:text-5xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}

          >What We’ve Been Building</motion.h1>
          <motion.p className="font-medium text-white text-sm sm:text-lg md:text-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >Take a peek at our latest digital experiments and creative builds.</motion.p>
        </div>
        {loading ?
          <div className="flex justify-center items-center h-60 w-screen ">
            <Oval color="white" secondaryColor="gray" height={60} />
          </div>
          :
          <motion.div className="md:grid md:gap-10 md:grid-cols-2 md:mt-10 mt-4
            xl:grid-cols-3 p-4 flex flex-col gap-4 2xl:px-25 2xl:mt-0"
            initial={{ opacity: 0, scale: 0.98, }}
            whileInView={{ opacity: 1, scale: 1, }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >{
              projects.map((e) =>
              (
                <CardProjects
                  key={e.id}
                  path={e.img_path}
                  title={e.tittle}
                  location={e.location}
                  tools={e.tools.map((tools, index) => (
                    <ToolsProjects
                      key={index}
                      title={tools}
                    />
                  ))}
                  type={e.type}
                  subTitle={e.subtite}
                />
              )
              )
            }
          </motion.div>
        }
      </div>
    </section>
  )
}
