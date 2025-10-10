import React from 'react'
import CardProjects from './ui/CardProjects'
import ToolsProjects from './ui/ToolsProjects'
import { SiFlutter, SiSupabase, SiFirebase } from 'react-icons/si'
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import { Oval } from 'react-loader-spinner'
import { div } from 'motion/react-client'
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
  async function getProjects() {
    const { data, error } = await supabase.from('servio_projects').select('*');
    if (error) console.log('Terjadi Masalah bro', error)
    else setProjects(data);
  }
  useEffect(() => {
    console.log('fetching....')
    getProjects();
  }, []);

  const projectTools = [
    { title: 'Flutter', icons: <SiFlutter size={10} />, },
    { title: 'Supabase', icons: <SiSupabase size={10} />, },
    { title: 'Firebase', icons: <SiFlutter size={10} /> },
    { title: 'OneSignal', icons: <SiFirebase size={10} />, },
  ];
  console.log(projects.map((hei) => {
    console.log(hei.tittle)
  }))
  return (
    <section className='w-screen min-h-screen xl:min-h-0 xl:mb-60 p-0 mt-25 md:mt-30 lg:mt-0'>
      <div className="gap-10 sm:px-10 xl:px-0">
        <div className="p-4">
          <h1 className="text-white text-2xl font-extrabold sm:text-3xl md:text-5xl">Stuff We’ve Been Cooking</h1>
          <p className="font-medium text-white text-sm sm:text-lg md:text-2xl">Check out some of the cool projects we’ve dropped.</p>
        </div>
        <div className="md:grid md:gap-10 md:grid-cols-2 md:mt-10 mt-4
        xl:grid-cols-3 p-4 flex flex-col gap-4 2xl:px-25">
          {!projects ?
            <div className="flex justify-center items-center h-60 w-screen ">
              <Oval color="white" secondaryColor="gray" height={60} />
            </div>
            :
            projects.map((e) =>
              <CardProjects
                key={e.id}
                path={e.img_path}
                title={e.tittle}
                location={e.location}
                tools={projectTools.map((tool, index) => (
                  <ToolsProjects
                    key={index}
                    title={tool.title}
                    icons={tool.icons}
                  />
                ))}
                type={e.type}
                subTitle={e.subtite}
              />)}
        </div>
      </div>
    </section>
  )
}
