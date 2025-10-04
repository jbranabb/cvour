import React from 'react'
import CardProjects from './ui/CardProjects'
import ToolsProjects from './ui/ToolsProjects'
import { SiFlutter, SiSupabase, SiFirebase } from 'react-icons/si'
export default function Projects() {
   const projectTools = [
    { title: 'Flutter', icons: <SiFlutter size={10} />,},
    { title: 'Supabase', icons: <SiSupabase size={10} />,},
    { title: 'Firebase', icons: <SiFlutter size={10} />},
    { title: 'OneSignal', icons: <SiFirebase size={10} />,},
  ];
  return (
    <section className='w-screen min-h-screen p-4'>
      <div className="grid gap-10 md:grid-cols-3 sm:px-10">
        <div className="">
        <h1 className="text-white text-2xl font-extrabold sm:text-3xl">Stuff We’ve Been Cooking</h1>
        <p className="font-medium text-white text-sm sm:text-lg">Check out some of the cool projects we’ve dropped.</p>
        </div>
        <CardProjects
          path='src/assets/mnt.jpeg'
          location='Indondesia, Tanjung Pandan'
          type='Absence Aplication'
          title='Ag Conslutant Absences'
         tools={projectTools.map((tool, index) => (
            <ToolsProjects
              key={index} 
              icons={tool.icons}
              title={tool.title}
            />
          ))}
          subTitle='lorem ipsum dolor simet  jametr wok wok wiwok 
          detok adas dadadasdada dasdada dsadasdas dad asd ad a ' />
        <CardProjects
          path='src/assets/mnt.jpeg'
          location='Indondesia, Tanjung Pandan'
          type='Absence Aplication'
          title='Ag Conslutant Absences'
         tools={projectTools.map((tool, index) => (
            <ToolsProjects
              key={index} 
              icons={tool.icons}
              title={tool.title}
            />
          ))}
          subTitle='lorem ipsum dolor simet  jametr wok wok wiwok 
          detok adas dadadasdada dasdada dsadasdas dad asd ad a ' />
        <CardProjects
          path='src/assets/mnt.jpeg'
          location='Indondesia, Tanjung Pandan'
          type='Absence Aplication'
          title='Ag Conslutant Absences'
         tools={projectTools.map((tool, index) => (
            <ToolsProjects
              key={index} 
              icons={tool.icons}
              title={tool.title}
            />
          ))}
          subTitle='lorem ipsum dolor simet  jametr wok wok wiwok 
          detok adas dadadasdada dasdada dsadasdas dad asd ad a ' />
      </div>
    </section>
  )
}
