import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import asdImg from "../public/assets/icon.jpg"
import amma from "../public/assets/projects/amma.jpg"
import erp from "../public/assets/projects/erp.jpg"
import avenys from "../public/assets/projects/avenys.jpg"
import mangan from "../public/assets/projects/mangan.png"
import clock from "../public/assets/projects/clock.png"
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title="Enterprise Resource Planning" backgroundImg={erp} projectUrl="/erp" tech="Next JS / Node JS"/>
                <ProjectItem title="Amma - Juz Amma Playlist" backgroundImg={amma} projectUrl="/amma" tech="Vue JS / Firebase"/>
                <ProjectItem title="Avenys - Beauty partner" backgroundImg={avenys} projectUrl="/avenys" tech="Larevel"/>
                <ProjectItem title="Mangan - Catering" backgroundImg={mangan} projectUrl="/mangan" tech="Vue JS / Bootstrap"/>
                <ProjectItem title="Simple Clock with Vue Js" backgroundImg={clock} projectUrl="/clock" tech="Vue JS" />
            </div>
        </div>
    </div>
  )
}

export default Projects
