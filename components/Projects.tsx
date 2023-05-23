import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  // const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <div className='absolute top-20 flex flex-col'>
        <h3 className=' uppercase  text-gray-500 text-2xl text-center tracking-[20px] ml-5'>
          Projects
        </h3>
        <h1 className=' uppercase  text-gray-300 text-sm text-center tracking-[5px]'>
          Click thumbnail for Demo
        </h1>
      </div>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen'>
              <a href={project.LinkToBuild}>
                <motion.img
                  initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  className='h-52 md:h-60  rounded-lg'
                />
              </a>
              <div className='space-y-2 md:space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-xl md:text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>
                    Case Study {i + 1} of {projects.length}:
                  </span>{' '}
                  {project.title}
                </h4>

                <div className='flex items-center space-x-2 justify-center'>
                  {project.technologies.map((tech) => (
                    <img
                      key={tech._id}
                      src={urlFor(tech.image).url()}
                      className='h-7 w-7 md:h-10 md:w-10'
                      alt=''
                    />
                  ))}
                </div>
                <div className='max-h-28 overflow-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                  <p className='text-sm md:text-base'>{project.summary}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}

export default Projects;
