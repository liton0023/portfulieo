import React from 'react';
import { projectOne, projectThree, projectTwo } from "../../assets/index";
import Title from '../../components/Layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
    id="projects"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
      <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
        title="INDEPENT SERVICE PROVIDER"
        des=" Dental Clinic Related Website"
        src={projectOne}
        href1={'https://github.com/liton0023/doctor-clenic'}
        href2={'https://rs-dental.web.app/home'}
      />
      <ProjectsCard
        title="E-commerce Website"
        des="Online Produce Selling Website "
        src={projectTwo}
        href1={'https://github.com/liton0023/ema-jhon'}
        href2={'https://ema-john-simple-8d29d.firebaseapp.com/'}
      />
      <ProjectsCard
        title="Proggrming Hero Website"
        des="Online Cousrce Selling Wibesite"
        src={projectThree}
      href1={'https://github.com/liton0023/programming-hero-web'}
      href2={'https://taupe-kashata-1e1bcc.netlify.app/'}
      />
      {/* <ProjectsCard
        title="SOCIAL MEDIA CLONE"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectThree}
      />
      <ProjectsCard
        title="E-commerce Website"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectOne}
      />
      <ProjectsCard
        title="Chatting App"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectTwo}
      /> */}
    </div>
  </section>
  )
}

export default Projects